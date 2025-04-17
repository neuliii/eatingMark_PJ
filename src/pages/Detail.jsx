import { useParams } from "react-router"
import { Card } from "../components/Card"
import { GetFetchApi } from "../context/GetFetchApi"
import { useContext } from "react"
import styles from "../styles/detail.module.scss"

export function Detail () {
    const baseURL = import.meta.env.VITE_BASE_URL

    const { places } = useContext(GetFetchApi)

    const { placeId } = useParams()

    const selectedPlace = places.find((el) => String(el.id) === String(placeId));

    // console.log(selectedPlace)

    return(
        <>
            <div className={styles.firdiv}>
                <h1>{selectedPlace.title}</h1>
                <img src={`${baseURL}/${selectedPlace.image.src}`}/>
                <div></div>
                <p> {selectedPlace.description} </p>
            </div>
        </>
    )
}