export default function UserProfile(props) {
    return (
        <div className="sidebar-profile">
            <img src={props.img} alt=""/>
            <h2><strong>{props.username}</strong> <br/> {props.name}</h2>
        </div>
    );
}