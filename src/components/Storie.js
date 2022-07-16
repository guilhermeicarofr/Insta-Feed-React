export default function Storie(props) {
    return (
        <div>
            <img className="storie-background" src="images/stories_background.png"/>
            <img className="storie-pic" src={props.img}/>
            <h3>{props.username}</h3>
        </div>
    );
}