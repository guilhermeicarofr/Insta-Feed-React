import logo from './../images/app/logo.png';

function MobileBar() {
    return(
        <div className="mobile-bar">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src={logo} alt=""/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}
function DesktopBar() {
    return(
        <div className="desktop-bar">
                <div>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="vert-division"></div>
                    <img src={logo} alt=""/>
                </div>
                <input type="text" placeholder="Pesquisar" />
                <div>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
    );
}

export default function TopBar() {
    return (
        <div className="top-bar">
            <MobileBar />
            <DesktopBar />
        </div>
    );
}