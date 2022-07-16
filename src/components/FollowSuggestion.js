export default function FollowSuggestion(props) {
    return(
        <div>
            <img src={props.img}/>
            <h2><strong>{props.username}</strong></h2>
            <h3>{props.info}</h3>
            <h5>Seguir</h5>
        </div>
    );
}