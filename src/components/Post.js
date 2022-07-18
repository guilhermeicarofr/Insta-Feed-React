import React from "react";

export default function Post(props) {
    
    //Post like state variable
    const [like, setLike] = React.useState("heart-outline");
    const [likeplus, setLikeplus] = React.useState(0);
    //State variable like function
    function likePost(clicked) {
        console.log(clicked);
        if(clicked==="file") {
            setLike("heart");
            setLikeplus(1);
        } else if(clicked==="icon") {
            if(like==="heart") {
                setLike("heart-outline");
                setLikeplus(0);
            } else if(like==="heart-outline") {
                setLike("heart");
                setLikeplus(1);
            }
        }
    }

    //PostFile component image/video filetype sensitive
    function PostFile(props) {
        if(props.type==="image")
            return (
                <img className="post-pic" onDoubleClick={()=>likePost("file")} src={props.file1} alt=""/>
            );
        else if(props.type==="video")
            return (
                <video onDoubleClick={()=>likePost("file")} width="612" height="345" autoPlay muted>
                    <source src={props.file1} type="video/mp4"/>
                    <source src={props.file2} type="video/ogg"/>
                </video>
            );
    }

    //Post main component
    return (
        <div className="post">
            <div className="post-header">
                    <img src={props.profile_img} alt=""/>
                    <h2><strong>{props.profile_username}</strong></h2>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <PostFile type={props.post_type} file1={props.post_file1} file2={props.post_file2} />

            <div className="post-footer">
                <ion-icon onClick={()=>likePost("icon")} name={like}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
                <img src={props.like_img} alt=""/>
                <h2>Curtido por <strong>{props.like_username}</strong> e <strong>outras {Number(props.like_count)+likeplus} pessoas</strong> </h2>
            </div>
        </div>
    );
}