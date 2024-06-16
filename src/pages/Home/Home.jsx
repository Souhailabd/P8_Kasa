// Importation des composants
import Banner from "../../components/Banner/Banner";
// Importation de l'image d'arrière-plan de la bannière
import HomeBannerImage from "../../assets/homeBackground.png";
import { PageTitle } from "../../utils/PageTitle";
import Cards from "../../components/Cards/Cards";



// Définition du composant Home
function Home() {
  const bannerTitle = "chez vous, partout et ailleurs";

  // Appel de la fonction PageTitle pour définir le titre de la page
  PageTitle("Kasa | Location entre particuliers")


return (
    <div className="homePage">
        <Banner
        img={HomeBannerImage}
        alt="mer et montagnes"
        title={bannerTitle}
        />
        <Cards />
    </div>
)
}
export default Home