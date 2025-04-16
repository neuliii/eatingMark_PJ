import { useContext } from "react"
import { FavoriteFetchApi } from "../context/FavoriteFetchApi"
import styles from "../styles/favorite.module.scss"
import { Card } from "../components/Card" 



export function Favorite () {

    const {userPlaces} = useContext(FavoriteFetchApi)


    return(
        <>
        <div className={styles.firdiv}>
            <div>
            <h1 className={styles.h1} > Favorite </h1>
            </div>
            <div className={styles.secdiv}>
            {userPlaces.length > 0 ? (
            userPlaces.map((place) => <Card key={place.id} place={place} />)
            ) : (
                <p>찜한 맛집이 없습니다.</p>
            )}
            </div>
        </div>
        </>
    )
}