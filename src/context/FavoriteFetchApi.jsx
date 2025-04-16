import { createContext, useEffect, useState } from "react";
import { deleteUserPlace, getUserPlaces, saveUserPlace } from "../api/placeApi";

export const FavoriteFetchApi = createContext([]);

export const FavoriteFetchApiProvider = ({children}) => {

    const [userPlaces, setUserPlaces] = useState([]);

    useEffect(() => {
        const fetchUserPlaces = async () => {
            const places = await getUserPlaces();
            setUserPlaces(places);
        };
        fetchUserPlaces()
    }, []);

    const isPlaceLiked = (id) => {
        return userPlaces && Array.isArray(userPlaces) && userPlaces.some(place => place.id === id);
      };
    
      const addPlace = async (place) => {
        await saveUserPlace(place);
        setUserPlaces((prev) => [...prev, place]); // 기존 값 유지
      };
      
      const removePlace = async (id) => {
        await deleteUserPlace(id);
        setUserPlaces((prev) => prev.filter((p) => p.id !== id)); // 상태 유지
      };


    return(
        <FavoriteFetchApi.Provider
        value={{ userPlaces, isPlaceLiked, addPlace, removePlace } }>

            {children}
        </FavoriteFetchApi.Provider>
    )
}