import UserProfile from "./UserProfile";
import FollowSuggestion from "./FollowSuggestion";

import koichi from "./../images/users/koichi.jpg";
import cinderella from "./../images/users/cinderella.jpeg";
import kira from "./../images/users/kira.jpg";
import toyohiro from "./../images/users/toyohiro.png";
import trattoriatrussardi from "./../images/users/trattoriatrussardi.png";
import mista from "./../images/users/mista.jpeg";
import akira from "./../images/users/akira.jpg";

const userprofile = {name:"Koichi Hirose", username:"koichi_hirose", img:koichi};
const suggestions = [
    {username:"cinderella_beauty_salon", img:cinderella, info:"Seguido por me_yukako"},
    {username:"yoshikage_kira", img:kira, info:"Novo no Instagram"},
    {username:"tower_toyohiro", img:toyohiro, info:"Segue você"},
    {username:"trattoria_trussardi_italianfood", img:trattoriatrussardi, info:"Seguido por okuyasu_niji + 1"},
    {username:"guido_mista", img:mista, info:"Seguido por giorno_gio"},
    {username:"otoichi_akira_official", img:akira, info:"Novo no Instagram"}
];

export default function SideBar() {
    return (
        <div class="sidebar-column">
            <div class="sidebar">
                
                <UserProfile name={userprofile.name} username={userprofile.username} img={userprofile.img} />

                <div class="sidebar-suggestions">
                    <h3><strong>Sugestões para você</strong></h3>
                    <h4>Ver Tudo</h4>

                    {/* FollowSuggestions render */}
                    {suggestions.map(suggestion => <FollowSuggestion username={suggestion.username} img={suggestion.img} info={suggestion.info} />)}
                    
                    <br/>
                    <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade Termos • Localizações • Contas mais relevantes • Hashtags Idioma</p>
                    <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                </div>
                
            </div>
        </div>            
    );
}