import { heroes } from "../../data/heroes"
import { HeroCard } from "./HeroCard"

export const HeroesHome = () => {
  return (
    <div>
        <h1>Super Heroes</h1>
        <hr/>
        <div className="row rows-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />   
                ))
            }
        </div>
    </div>
  )
}
