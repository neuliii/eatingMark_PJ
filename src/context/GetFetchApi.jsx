import { createContext, useEffect, useState } from "react";
import { getPlaces, getUserPlaces } from "../api/placeApi";
import { useNavigate } from "react-router";

export const GetFetchApi = createContext(null);

export const GetFetchApiProvider = ({ children }) => {

    const navigate = useNavigate()

    const [places, setPlaces] = useState([])
    const [fav, setFav] = useState([])

    const [isError, setIsError] = useState(null)
    const [isPending, setIsPending] = useState(false)

  
      useEffect(()=> {
          const fetchData = async () => {
            try{
              setIsError(null)
              setIsPending(true)
              const allPlace = await getPlaces();
              const favPlace = await getUserPlaces()
              setPlaces(allPlace)
              setFav(favPlace)
            } catch (err) {
              setIsError("Loading Fail ... " + err.message)
            } finally {
              setIsPending(false)
            }
          }
          fetchData()
      },[])
    
    return (
    	<GetFetchApi.Provider 
        value={{places, setPlaces, fav, setFav, isError, setIsError, isPending, setIsPending, navigate}}
        >
            
        	{children}
        </GetFetchApi.Provider>
    )
}

