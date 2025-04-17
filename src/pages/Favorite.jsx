import { useContext } from "react"
import { FavoriteFetchApi } from "../context/FavoriteFetchApi"
import styles from "../styles/favorite.module.scss"
import { Card } from "../components/Card" 
import { UserLocation } from "../context/UserLocation"

export function Favorite () {

    const {userPlaces} = useContext(FavoriteFetchApi)
    const {sortedFavPlaces} = useContext(UserLocation)

    const displaySorted = sortedFavPlaces || userPlaces

    return(
        <>
        <div className={styles.container}>
        <div className={styles.leftSide}>
            <h1 className={styles.h1}>Favorite</h1>
            <div className={styles.sidediv}></div>
        </div>

        <div className={styles.secdiv}>
            {displaySorted.length > 0 ? (
            displaySorted.map((place) => <Card key={place.id} place={place} />)
            ) : (
            <p>찜한 맛집이 없습니다.</p>
            )}
        </div>
        </div>
        </>
    )
}