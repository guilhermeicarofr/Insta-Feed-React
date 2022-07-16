import background from "./../images/app/background.png";

export default function Storie(props) {
    return (
        <div>
            <img className="storie-background" src={background} alt=""/>
            <img className="storie-pic" src={props.img} alt=""/>
            <h3>{props.username}</h3>
        </div>
    );
}