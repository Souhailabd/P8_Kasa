
// Importation des composants et fonctionnalités de React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Importation des composants des différentes pages et des composants de navigation
import Home from './pages/Home/Home'



import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'


// Définition du composant principal App
function App() {
    // Rendu du composant
    return (
        // Utilisation du composant Router pour gérer la navigation
        <Router>
            {/* Composant Header pour afficher le Header sur toutes les pages */}
            <Header />
            {/* Composant Routes pour définir les itinéraires de navigation */}
            <Routes>
                {/* Itinéraire pour la page d'accueil */}
                <Route path="/" element={<Home />} />
                
            </Routes>
            {/* Composant Footer pour afficher le pied de page sur toutes les pages */}
            <Footer />
        </Router>
    )
}
export default App
