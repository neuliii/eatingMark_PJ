import { createContext, useEffect, useState } from "react";
import { deleteUserPlace, getUserPlaces, saveUserPlace } from "../api/placeApi";

export const FavoriteFetchApi = createContext([]);

// 이 컴포넌트는 Provider 역할을 하며, children을 감싸서 하위 트리 컴포넌트에 Context를 전달
export const FavoriteFetchApiProvider = ({children}) => {

    const [userPlaces, setUserPlaces] = useState([]);

    // Fav 목록 가져오기
    useEffect(() => {
        const fetchUserPlaces = async () => {
            const places = await getUserPlaces();
            setUserPlaces(places);
        };
        fetchUserPlaces()
    }, []);
    
      // Fav 목록 추가하기
      const addPlace = async (place) => {
        await saveUserPlace(place);
        setUserPlaces((prev) => [...prev, place]); // 기존 값 유지
      };
      
      // Fav 목록 삭제하기
      const removePlace = async (id) => {
        await deleteUserPlace(id);
        setUserPlaces((prev) => prev.filter((p) => p.id !== id)); // 상태 유지
      };


    return(
        <FavoriteFetchApi.Provider
        value={{ userPlaces,  addPlace, removePlace } }>

            {children}
        </FavoriteFetchApi.Provider>
    )
}