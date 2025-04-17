import { Children, createContext, useContext, useEffect, useState } from "react";
import { GetFetchApi } from "./GetFetchApi";
import { sortPlacesByDistance } from "../components/loc";
import { FavoriteFetchApi } from "./FavoriteFetchApi";

export const UserLocation = createContext();

export const UserLocationProvider = ({children}) => {

    const {places} = useContext(GetFetchApi)
    const {userPlaces} = useContext(FavoriteFetchApi)

    const [userLocation, setUserLocation] = useState(null)
    const [sortedPlaces, setSortedPlaces] = useState(null); // null로 초기화
    const [sortedFavPlaces, setSortedFavPlaces] = useState(null); // null로 초기화
    const [isSorted, setIsSorted] = useState(false); // 정렬 상태 확인용

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
    
    const sortedClick = () => {
        if(!isSorted){
            setSortedPlaces(userLocation ? sortPlacesByDistance(places, userLocation.lat, userLocation.lon)
                        : places)
            setSortedFavPlaces(userLocation ? sortPlacesByDistance(userPlaces, userLocation.lat, userLocation.lon)
                        : userPlaces)
        } else {
            setSortedPlaces(null);
            setSortedFavPlaces(null)
        }
        setIsSorted((prev) => !prev);
        }

    return(
        <UserLocation.Provider value={{sortedClick, sortedPlaces, isSorted, sortedFavPlaces}}>
            {children}
        </UserLocation.Provider>
    )
}