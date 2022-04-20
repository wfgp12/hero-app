import { useMemo } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();


  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const imagesPath = `/assets/${hero.id}.jpg`

  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  }=hero

  const handleReturn = () => {
    navigate(-1);
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={imagesPath}
          alt={superhero} 
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego: </b> {alter_ego} </li>
          <li className="list-group-item"> <b>Publisher: </b> {publisher} </li>
          <li className="list-group-item"> <b>First appearance: </b> {first_appearance} </li>
        </ul>

        <h5 className="mt-5">Characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
