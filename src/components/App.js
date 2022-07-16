import TopBar from "./TopBar";


export default function App() {
    return (



    <body>
        <TopBar />

        <div class="page">
            <div class="sidebar-column">
                <div class="sidebar">
                    <div class="sidebar-profile">
                        <img src="images/koichi.jpg"/>
                        <h2><strong>koichi_hirose</strong> <br/> Koichi Hirose</h2>
                    </div>
                    <div class="sidebar-sugestions">
                        <h3><strong>Sugestões para você</strong></h3>
                        <h4>Ver Tudo</h4>
                        <div>
                            <img src="images/cinderella.jpeg"/>
                            <h2><strong>cinderella_beauty_salon</strong></h2>
                            <h3>Seguido por me_yukako</h3>
                            <h5>Seguir</h5>
                        </div>
                        <div>
                            <img src="images/kira.jpg"/>
                            <h2><strong>yoshikage_kira</strong></h2>
                            <h3>Novo no Instagram</h3>
                            <h5>Seguir</h5>
                        </div>
                        <div>
                            <img src="images/toyohiro.png"/>
                            <h2><strong>tower_toyohiro</strong></h2>
                            <h3>Segue você</h3>
                            <h5>Seguir</h5>
                        </div>
                        <div>
                            <img src="images/trattoriatrussardi.png"/>
                            <h2><strong>trattoria_trussardi_italianfood</strong></h2>
                            <h3>Seguido por okuyasu_niji + 1</h3>
                            <h5>Seguir</h5>
                        </div>
                        <div>
                            <img src="images/mista.jpeg"/>
                            <h2><strong>guido_mista</strong></h2>
                            <h3>Seguido por giorno_gio</h3>
                            <h5>Seguir</h5>
                        </div>
                        <div>
                            <img src="images/akira.jpg"/>
                            <h2><strong>otoichi_akira_official</strong></h2>
                            <h3>Novo no Instagram</h3>
                            <h5>Seguir</h5>
                        </div>
                        <br/>
                        <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade Termos • Localizações • Contas mais relevantes • Hashtags Idioma</p>
                        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                    </div>
                </div>
            </div>
            <div class="feeds">
                
                <div class="stories-feed">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                    <div>
                        <img class="storie-background" src="images/stories_background.png"/>
                        <img class="storie-pic" src="images/rohan.jpg"/>
                        <h3>kishibe_rohan</h3>
                    </div>
                    <div>
                        <img class="storie-background" src="images/stories_background.png"/>
                        <img class="storie-pic" src="images/shigekiyo.jpg"/>
                        <h3>shingekiyo</h3>
                    </div>
                    <div>
                        <img class="storie-background" src="images/stories_background.png"/>
                        <img class="storie-pic" src="images/josuke.jpg"/>
                        <h3>jo_josuke</h3>
                    </div>
                    <div>
                        <img class="storie-background" src="images/stories_background.png"/>
                        <img class="storie-pic" src="images/yukako.jpg"/>
                        <h3>me_yukako</h3>
                    </div>
                    <div>
                        <img class="storie-background" src="images/stories_background.png"/>
                        <img class="storie-pic" src="images/jotaro.jpg"/>
                        <h3>kujo_j</h3>
                    </div>
                    <div>
                        <img class="storie-background" src="images/stories_background.png"/>
                        <img class="storie-pic" src="images/giorno.jpg"/>
                        <h3>giorno_gio</h3>
                    </div>
                    <div>
                        <img class="storie-background" src="images/stories_background.png"/>
                        <img class="storie-pic" src="images/okuyasu.jpg"/>
                        <h3>okuyasu_niji</h3>
                    </div>
                    <div>
                        <img class="storie-background" src="images/stories_background.png"/>
                        <img class="storie-pic" src="images/joseph.jpg"/>
                        <h3>joestar_jos</h3>
                    </div>
                </div>

                <div class="post">
                    <div class="post-header">
                            <img src="images/josuke.jpg"/>
                            <h2><strong>jo_josuke</strong></h2>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <img class="post-pic" src="images/josuke-post.jpg"/>
                    <div class="post-footer">
                        <ion-icon class="like-icon" name="heart-outline"></ion-icon>
                        <ion-icon class="comment-icon" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                        <ion-icon class="save-icon" name="bookmark-outline"></ion-icon>
                        <img src="images/okuyasu.jpg"/>
                        <h2>Curtido por <strong>okuyasu_niji</strong> e <strong>outras 251 pessoas</strong> </h2>
                    </div>
                </div>
                <div class="post">
                    <div class="post-header">
                            <img src="images/giorno.jpg"/>
                            <h2><strong>giorno_gio</strong></h2>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <img class="post-pic" src="images/giorno-post.jpg"/>
                    <div class="post-footer">
                        <ion-icon class="like-icon" name="heart-outline"></ion-icon>
                        <ion-icon class="comment-icon" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                        <ion-icon class="save-icon" name="bookmark-outline"></ion-icon>
                        <img src="images/mista.jpeg"/>
                        <h2>Curtido por <strong>guido_mista</strong> e <strong>outras 5.165 pessoas</strong> </h2>
                    </div>
                </div>
                <div class="post">
                    <div class="post-header">
                            <img src="images/rohan.jpg"/>
                            <h2><strong>kishibe_rohan</strong></h2>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    
                    <video width="612" height="345" autoplay muted>
                        <source src="images/rohan-video.mp4" type="video/mp4"/>
                        <source src="images/rohan-video.ogv" type="video/ogg"/>
                    </video>
                    
                    
                    <div class="post-footer">
                        <ion-icon class="like-icon" name="heart-outline"></ion-icon>
                        <ion-icon class="comment-icon" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                        <ion-icon class="save-icon" name="bookmark-outline"></ion-icon>
                        <img src="images/kira.jpg"/>
                        <h2>Curtido por <strong>yoshikage_kira</strong> e <strong>outras 43.213 pessoas</strong> </h2>
                    </div>
                </div>
                <div class="post">
                    <div class="post-header">
                            <img src="images/yukako.jpg"/>
                            <h2><strong>me_yukako</strong></h2>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <img class="post-pic" src="images/yukako-post.jpg"/>
                    <div class="post-footer">
                        <ion-icon class="like-icon" name="heart-outline"></ion-icon>
                        <ion-icon class="comment-icon" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                        <ion-icon class="save-icon" name="bookmark-outline"></ion-icon>
                        <img src="images/koichi.jpg"/>
                        <h2>Curtido por <strong>koichi_hirose</strong> e <strong>outras 1.654 pessoas</strong> </h2>
                    </div>
                </div>
                <div class="post">
                    <div class="post-header">
                            <img src="images/okuyasu.jpg"/>
                            <h2><strong>okuyasu_niji</strong></h2>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <img class="post-pic" src="images/okuyasu-post.png"/>
                    <div class="post-footer">
                        <ion-icon class="like-icon" name="heart-outline"></ion-icon>
                        <ion-icon class="comment-icon" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                        <ion-icon class="save-icon" name="bookmark-outline"></ion-icon>
                        <img src="images/rohan.jpg"/>
                        <h2>Curtido por <strong>kishibe_rohan</strong> e <strong>outras 591 pessoas</strong> </h2>
                    </div>
                </div>
                <div class="post">
                    <div class="post-header">
                            <img src="images/joseph.jpg"/>
                            <h2><strong>joestar_jos</strong></h2>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <img class="post-pic" src="images/joseph-post.jpg"/>
                    <div class="post-footer">
                        <ion-icon class="like-icon" name="heart-outline"></ion-icon>
                        <ion-icon class="comment-icon" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                        <ion-icon class="save-icon" name="bookmark-outline"></ion-icon>
                        <img src="images/jotaro.jpg"/>
                        <h2>Curtido por <strong>kujo_j</strong> e <strong>outras 68 pessoas</strong> </h2>
                    </div>
                </div>
                <div class="post">
                    <div class="post-header">
                            <img src="images/rohan.jpg"/>
                            <h2><strong>kishibe_rohan</strong></h2>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    <img class="post-pic" src="images/rohan-post.png"/>
                    <div class="post-footer">
                        <ion-icon class="like-icon" name="heart-outline"></ion-icon>
                        <ion-icon class="comment-icon" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="direct-icon" name="paper-plane-outline"></ion-icon>
                        <ion-icon class="save-icon" name="bookmark-outline"></ion-icon>
                        <img src="images/rohan.jpg"/>
                        <h2>Curtido por <strong>kishibe_rohan</strong> e <strong>outras 29.864 pessoas</strong> </h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-bar">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>


    </body>









    );}