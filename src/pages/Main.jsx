import { useEffect, useState } from "react"
import { getPlaces } from "../api/placeApi"
import { Card } from "../components/Card"
import styles from "../styles/main.module.scss"

export function Main () {
    const [places, setPlaces] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const allPlace = await getPlaces();
            setPlaces(allPlace)
        }
        fetchData()
    },[])

    console.log(places)
    return(
        <div className={styles.firdiv}>
            <h1 className={styles.h1}> All Place </h1>
            <div className={styles.secdiv}>
                {places.map((place) => <Card key={place.id} place={place}/>)}
            </div>
        </div>
    )
}