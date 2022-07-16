import UserProfile from "./UserProfile";
import FollowSuggestion from "./FollowSuggestion";

const userprofile = {name:"Koichi Hirose", username:"koichi_hirose", img:"images/koichi.jpg"};
const suggestions = [
    {username:"cinderella_beauty_salon", img:"images/cinderella.jpeg", info:"Seguido por me_yukako"},
    {username:"yoshikage_kira", img:"images/kira.jpg", info:"Novo no Instagram"},
    {username:"tower_toyohiro", img:"images/toyohiro.png", info:"Segue você"},
    {username:"trattoria_trussardi_italianfood", img:"images/trattoriatrussardi.png", info:"Seguido por okuyasu_niji + 1"},
    {username:"guido_mista", img:"images/mista.jpeg", info:"Seguido por giorno_gio"},
    {username:"otoichi_akira_official", img:"images/akira.jpg", info:"Novo no Instagram"}
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