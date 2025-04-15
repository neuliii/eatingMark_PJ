import { Card } from "../components/Card"
import styles from "../styles/favorite.module.scss"

export function Favorite ({fav}) {
    console.log("fav prop:", fav);
    return(
        <>
            <h1 className={styles.h1} > Favorite </h1>
            {fav ? (
            fav.map((place) => <Card key={place.id} place={place} />)
            ) : (
                <p>찜한 맛집이 없습니다.</p>
            )}
        </>
    )
}