function PostContent(props) {

    if(props.type==="img")
        return (
            <img className="post-pic" src={props.file1} alt=""/>
        );
    else if(props.type==="video")
        return (
            <video width="612" height="345" autoplay muted>
                <source src={props.file1} type="video/mp4"/>
                <source src={props.file2} type="video/ogg"/>
            </video>
        );
}

export default function Post(props) {
    return (
        <div className="post">
            <div className="post-header">
                    <img src={props.profile_img} alt=""/>
                    <h2><strong>{props.profile_username}</strong></h2>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <PostContent type={props.post_type} file1={props.post_file1} file2={props.post_file2} />

            <div className="post-footer">
                <ion-icon className="like-icon" name="heart-outline"></ion-icon>
                <ion-icon className="comment-icon" name="chatbubble-outline"></ion-icon>
                <ion-icon className="direct-icon" name="paper-plane-outline"></ion-icon>
                <ion-icon className="save-icon" name="bookmark-outline"></ion-icon>
                <img src={props.like_img} alt=""/>
                <h2>Curtido por <strong>{props.like_username}</strong> e <strong>outras {props.like_count} pessoas</strong> </h2>
            </div>
        </div>
    );
}