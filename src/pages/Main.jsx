import { useContext} from "react"
import { Card } from "../components/Card"
import styles from "../styles/main.module.scss"
import { Favorite } from "./Favorite"
import { GetFetchApi } from "../context/GetFetchApi"
import { UserLocation } from "../context/UserLocation"

export function Main () {
    
    const { places } = useContext(GetFetchApi)
    const {sortedClick, sortedPlaces, isSorted} =useContext(UserLocation)

    return(
        <div className={styles.firdiv}>
            <Favorite/>
            <div className={styles.secdiv}>
                <h1 className={styles.h1}> All Place ... </h1>
                <button className={isSorted ? styles.button : styles.button1}
                onClick={() => sortedClick()}> {isSorted ? "기본순" : "거리순"}</button>
            </div>
            <div className={styles.thrdiv}>
                {sortedPlaces ? 
                sortedPlaces.map((place) => <Card key={place.id} place={place}/>) 
                : places.map((place) => <Card key={place.id} place={place}/>)}

            </div>
        </div>
    )
}