import Storie from "./Storie";

const stories = [
    {username:"kishibe_rohan", img: "images/rohan.jpg"},
    {username:"shingekiyo", img: "images/shingekyo.jpg"},
    {username:"jo_josuke", img: "images/josuke.jpg"},
    {username:"me_yukako", img: "images/yukako.jpg"},
    {username:"kujo_j", img: "images/jotaro.jpg"},
    {username:"giorno_gio", img: "images/giorno.jpg"},
    {username:"okuyasu_niji", img: "images/okuyasu.jpg"},
    {username:"joestar_jos", img: "images/joseph.jpg"}
];


export default function Stories() {
    return (
        <div className="stories-feed">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            
            {/* stories render */}            
            {stories.map((storie) => <Storie username={storie.username} img={storie.img} />)}
        </div>
    );
}