import Storie from "./Storie";

import rohan from "./../images/users/rohan.jpg";
import shingekiyo from "./../images/users/shin.jpg";
import josuke from "./../images/users/josuke.jpg";
import yukako from "./../images/users/yukako.jpg";
import jotaro from "./../images/users/jotaro.jpg";
import giorno from "./../images/users/giorno.jpg";
import okuyasu from "./../images/users/okuyasu.jpg";
import joseph from "./../images/users/joseph.jpg";

const stories = [
    {username:"kishibe_rohan", img:rohan},
    {username:"shingekiyo", img:shingekiyo},
    {username:"jo_josuke", img:josuke},
    {username:"me_yukako", img:yukako},
    {username:"kujo_j", img:jotaro},
    {username:"giorno_gio", img:giorno},
    {username:"okuyasu_niji", img:okuyasu},
    {username:"joestar_jos", img:joseph}
];

export default function Stories() {
    return (
        <div className="stories-feed">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            
            {/* stories render */}            
            {stories.sort(()=>Math.random()-0.5).map((storie) => <Storie username={storie.username} img={storie.img} />)}
        </div>
    );
}