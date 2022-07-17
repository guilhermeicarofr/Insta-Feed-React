import Stories from "./Stories"
import Post from "./Post"

import rohan from "./../images/users/rohan.jpg";
import josuke from "./../images/users/josuke.jpg";
import yukako from "./../images/users/yukako.jpg";
import giorno from "./../images/users/giorno.jpg";
import okuyasu from "./../images/users/okuyasu.jpg";
import joseph from "./../images/users/joseph.jpg";
import koichi from "./../images/users/koichi.jpg";
import jotaro from "./../images/users/jotaro.jpg";
import kira from "./../images/users/kira.jpg";
import mista from "./../images/users/mista.jpeg";

import josuke_postimg from "./../images/posts/josuke-post.jpg";
import giorno_postimg from "./../images/posts/giorno-post.jpg";
import rohan_postimg from "./../images/posts/rohan-post.png";
import yukako_postimg from "./../images/posts/yukako-post.jpg";
import okuyasu_postimg from "./../images/posts/okuyasu-post.png";
import joseph_postimg from "./../images/posts/joseph-post.jpg";
import rohan_videoa from "./../images/posts/rohan-video.mp4";
import rohan_videob from "./../images/posts/rohan-video.ogv";

const posts = [
    {profile_img:josuke, profile_username:"jo_josuke", post_type:"image", post_file1:josuke_postimg, post_file2:"", like_img:okuyasu, like_username:"okuyasu_niji", like_count:"251"},
    {profile_img:giorno, profile_username:"giorno_gio", post_type:"image", post_file1:giorno_postimg, post_file2:"", like_img:mista, like_username:"guido_mista", like_count:"5.165"},
    {profile_img:rohan, profile_username:"kishibe_rohan", post_type:"video", post_file1:rohan_videoa, post_file2:rohan_videob, like_img:kira, like_username:"yoshikage_kira", like_count:"43.213"},
    {profile_img:yukako, profile_username:"me_yukako", post_type:"image", post_file1:yukako_postimg, post_file2:"", like_img:koichi, like_username:"koichi_hirose", like_count:"1.654"},
    {profile_img:okuyasu, profile_username:"okuyasu_niji", post_type:"image", post_file1:okuyasu_postimg, post_file2:"", like_img:rohan, like_username:"kishibe_rohan", like_count:"591"},
    {profile_img:joseph, profile_username:"joestar_jos", post_type:"image", post_file1:joseph_postimg, post_file2:"", like_img:jotaro, like_username:"kujo_j", like_count:"68"},
    {profile_img:rohan, profile_username:"kishibe_rohan", post_type:"image", post_file1:rohan_postimg, post_file2:"", like_img:rohan, like_username:"kishibe_rohan", like_count:"29.864"}
];

function postJSX(post) {
    return (
        <Post
         profile_img={post.profile_img}
         profile_username={post.profile_username} 
         post_type={post.post_type} 
         post_file1={post.post_file1} 
         post_file2={post.post_file2} 
         like_img={post.like_img} 
         like_username={post.like_username} 
         like_count={post.like_count} 
        />
    );
}

export default function Feed() {
    return (
        <div className="feeds">
            <Stories />
            {posts.map(postJSX)}
        </div>
    );
}