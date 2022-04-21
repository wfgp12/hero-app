import { Link } from "react-router-dom"
import { heroImages } from "../../helpers/heroImages"


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagesPath = heroImages(`./${id}.jpg`)
    return (
        <div className="col  animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4 col-sm-4">
                        <img 
                            src={imagesPath} 
                            className='card-img-top' 
                            alt={superhero}
                        />
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                (alter_ego !== characters) &&
                                <p className="text-muted">{characters}</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
