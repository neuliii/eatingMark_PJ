
import { useContext, useEffect, useState } from "react"
import { Card } from "../components/Card"
import { sortPlacesByDistance } from "../components/loc"
import styles from "../styles/main.module.scss"
import { Favorite } from "./Favorite"
import { GetFetchApi } from "../context/GetFetchApi"

export function Main () {
    
    const [userLocation, setUserLocation] = useState(null)
    const [distance, setDistance] = useState(false)
    const { places } = useContext(GetFetchApi)

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
            <div className={styles.secdiv}>
                <h1 className={styles.h1}> All Place ... </h1>
                <button className={styles.button}
                onClick={() => setDistance(!distance)}> {distance ? "기본순" : "거리순"}</button>
            </div>
            <div className={styles.thrdiv}>
                {distance ? 
                sortedPlaces.map((place) => <Card key={place.id} place={place}/>) 
                : places.map((place) => <Card key={place.id} place={place}/>)}

            </div>
        </div>
    )
}