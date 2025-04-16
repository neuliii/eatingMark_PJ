import { createContext, useEffect, useState } from "react";
import { getPlaces } from "../api/placeApi";
import { useNavigate } from "react-router";

export const GetFetchApi = createContext(null);

export const GetFetchApiProvider = ({ children }) => {

    const navigate = useNavigate()

    const [places, setPlaces] = useState([])

    const [isError, setIsError] = useState(null)
    const [isPending, setIsPending] = useState(false)

  
      useEffect(()=> {
          const fetchData = async () => {
            try{
              setIsError(null)
              setIsPending(true)
              const allPlace = await getPlaces();
              setPlaces(allPlace)
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
        value={{places, setPlaces, isError, setIsError, isPending, setIsPending, navigate}}
        >
            
        	{children}
        </GetFetchApi.Provider>
    )
}

