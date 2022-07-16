import Stories from "./Stories"

export default function Feed() {
    return (
        <div className="feeds">
            
            <Stories />

            <div className="post">
                <div className="post-header">
                        <img src="images/josuke.jpg"/>
                        <h2><strong>jo_josuke</strong></h2>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img className="post-pic" src="images/josuke-post.jpg"/>
                <div className="post-footer">
                    <ion-icon className="like-icon" name="heart-outline"></ion-icon>
                    <ion-icon className="comment-icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon className="direct-icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="save-icon" name="bookmark-outline"></ion-icon>
                    <img src="images/okuyasu.jpg"/>
                    <h2>Curtido por <strong>okuyasu_niji</strong> e <strong>outras 251 pessoas</strong> </h2>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                        <img src="images/giorno.jpg"/>
                        <h2><strong>giorno_gio</strong></h2>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img className="post-pic" src="images/giorno-post.jpg"/>
                <div className="post-footer">
                    <ion-icon className="like-icon" name="heart-outline"></ion-icon>
                    <ion-icon className="comment-icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon className="direct-icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="save-icon" name="bookmark-outline"></ion-icon>
                    <img src="images/mista.jpeg"/>
                    <h2>Curtido por <strong>guido_mista</strong> e <strong>outras 5.165 pessoas</strong> </h2>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                        <img src="images/rohan.jpg"/>
                        <h2><strong>kishibe_rohan</strong></h2>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                
                <video width="612" height="345" autoplay muted>
                    <source src="images/rohan-video.mp4" type="video/mp4"/>
                    <source src="images/rohan-video.ogv" type="video/ogg"/>
                </video>
                
                
                <div className="post-footer">
                    <ion-icon className="like-icon" name="heart-outline"></ion-icon>
                    <ion-icon className="comment-icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon className="direct-icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="save-icon" name="bookmark-outline"></ion-icon>
                    <img src="images/kira.jpg"/>
                    <h2>Curtido por <strong>yoshikage_kira</strong> e <strong>outras 43.213 pessoas</strong> </h2>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                        <img src="images/yukako.jpg"/>
                        <h2><strong>me_yukako</strong></h2>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img className="post-pic" src="images/yukako-post.jpg"/>
                <div className="post-footer">
                    <ion-icon className="like-icon" name="heart-outline"></ion-icon>
                    <ion-icon className="comment-icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon className="direct-icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="save-icon" name="bookmark-outline"></ion-icon>
                    <img src="images/koichi.jpg"/>
                    <h2>Curtido por <strong>koichi_hirose</strong> e <strong>outras 1.654 pessoas</strong> </h2>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                        <img src="images/okuyasu.jpg"/>
                        <h2><strong>okuyasu_niji</strong></h2>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img className="post-pic" src="images/okuyasu-post.png"/>
                <div className="post-footer">
                    <ion-icon className="like-icon" name="heart-outline"></ion-icon>
                    <ion-icon className="comment-icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon className="direct-icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="save-icon" name="bookmark-outline"></ion-icon>
                    <img src="images/rohan.jpg"/>
                    <h2>Curtido por <strong>kishibe_rohan</strong> e <strong>outras 591 pessoas</strong> </h2>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                        <img src="images/joseph.jpg"/>
                        <h2><strong>joestar_jos</strong></h2>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img className="post-pic" src="images/joseph-post.jpg"/>
                <div className="post-footer">
                    <ion-icon className="like-icon" name="heart-outline"></ion-icon>
                    <ion-icon className="comment-icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon className="direct-icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="save-icon" name="bookmark-outline"></ion-icon>
                    <img src="images/jotaro.jpg"/>
                    <h2>Curtido por <strong>kujo_j</strong> e <strong>outras 68 pessoas</strong> </h2>
                </div>
            </div>
            <div className="post">
                <div className="post-header">
                        <img src="images/rohan.jpg"/>
                        <h2><strong>kishibe_rohan</strong></h2>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
                <img className="post-pic" src="images/rohan-post.png"/>
                <div className="post-footer">
                    <ion-icon className="like-icon" name="heart-outline"></ion-icon>
                    <ion-icon className="comment-icon" name="chatbubble-outline"></ion-icon>
                    <ion-icon className="direct-icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon className="save-icon" name="bookmark-outline"></ion-icon>
                    <img src="images/rohan.jpg"/>
                    <h2>Curtido por <strong>kishibe_rohan</strong> e <strong>outras 29.864 pessoas</strong> </h2>
                </div>
            </div>
        </div>
    );
}