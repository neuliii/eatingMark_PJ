import { useNavigate } from "react-router"
import styles from "../styles/card.module.scss"


export const Card = ({place, fav}) => {
    const navigate = useNavigate()
    const BASE_URL = import.meta.env.VITE_BASE_URL;


    
    return(
        <>
        <section className={styles.section}
        onClick={() => navigate(`/detail/${place.id}`)}>
            <img src={`${BASE_URL}/${place.image.src}`} alt={place.title}/>
            <div> {place.title} </div>
            <button onClick={(e) => {e.stopPropagation();
                {fav ? '' : ''}}
            }
            > {fav ? '♥︎' : '♡'} </button>
        </section>
        </>
    )
}