export default function UserProfile(props) {
    return (
        <div class="sidebar-profile">
            <img src={props.img}/>
            <h2><strong>{props.username}</strong> <br/> {props.name}</h2>
        </div>
    );
}