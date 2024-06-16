import Banner from "../../components/Banner/Banner";
import AboutBannerImage from "../../assets/aboutBackground.png";
import { PageTitle } from "../../utils/PageTitle";


function About(){
    PageTitle("Kasa | À Propos ")
    return(
        <div className="about-page">
            <Banner
            img = {AboutBannerImage}
            alt = "montagnes enneigées"
            />
        </div>
    )
}




























export default About;