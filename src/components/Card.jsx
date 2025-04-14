import { useNavigate } from "react-router"

export const Card = ({place}) => {
    const navigate = useNavigate()
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    
    return(
        <>
        <section onClick={() => navigate(`/detail/${place.id}`)}>
            <img src={`${BASE_URL}/${place.image.src}`} alt={place.title}/>
            <div> {place.title} </div>
        </section>
        </>
    )
}