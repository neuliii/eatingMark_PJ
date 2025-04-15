
import { Card } from "../components/Card"
import styles from "../styles/main.module.scss"
import { Favorite } from "./Favorite"

export function Main ({places}) {
    

    console.log(places)
    return(
        <div className={styles.firdiv}>
            <Favorite/>
            <h1 className={styles.h1}> All Place ... </h1>
            <div className={styles.secdiv}>
                {places.map((place) => <Card key={place.id} place={place}/>)}
            </div>
        </div>
    )
}