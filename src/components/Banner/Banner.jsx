import homeBackgroundImage from "../../assets/homeBackground.png";

function Banner() {
return (
    <div className="banner">
        <img src={homeBackgroundImage} alt= "banner img " className="banner-img" />
        <div className="banner-overlay">
            <h1 className="banner-overlay-title">Chez vous, partout et ailleur</h1>
        </div>
    </div>
)
}

export default Banner