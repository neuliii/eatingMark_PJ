import { useEffect, useState } from "react"
import { getPlaces } from "../api/placeApi"
import { Card } from "../components/Card"

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
        <>
            {places.map((place) => <Card key={place.id} place={place}/>)}
        </>
    )
}