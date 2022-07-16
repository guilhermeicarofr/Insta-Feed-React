import Feed from "./Feed";
import SideBar from "./SideBar";

export default function Page() {
    return(
        <div className="page">
            <SideBar />
            <Feed />        
        </div>
    );
}