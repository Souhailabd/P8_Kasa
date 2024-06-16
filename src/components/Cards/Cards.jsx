import { logements } from"../../utils/Logements" 
import { Link } from "react-router-dom"

function Cards() {
    return (
        <section className="logementsCards">
            {logements.map(({ id, cover, title})=>(
                <Link key={id} to={'logement/${id}'}>
                    <article className="card">
                        <img src={cover} alt={'${title} cover'} className="card-img"/>
                        <div className="card-overlay">
                            <h2 className="card-overlay-title">{title}</h2>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    )
}


export default Cards