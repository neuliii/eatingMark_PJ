
import { useEffect, useState } from "react"
import { Card } from "../components/Card"
import { sortPlacesByDistance } from "../components/loc"
import styles from "../styles/main.module.scss"
import { Favorite } from "./Favorite"

export function Main ({places}) {
    
    const [userLocation, setUserLocation] = useState(null)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLocation({
                lon: position.coords.longitude,
                lat: position.coords.latitude
            })
        }, (err) => {
            console.error("위치 정보를 가져오는 데 실패했어요!", err)
          })
    },[])

    const sortedPlaces = userLocation ? sortPlacesByDistance(places, userLocation.lat, userLocation.lon)
        : places

    return(
        <div className={styles.firdiv}>
            <Favorite/>
            <h1 className={styles.h1}> All Place ... </h1>
            <div className={styles.secdiv}>
                {sortedPlaces
                .map((place) => <Card key={place.id} place={place}/>)}
            </div>
        </div>
    )
}