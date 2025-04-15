import { Link, Route, Routes, useNavigate } from "react-router"
import { Main } from "./pages/Main"
import { Detail } from "./pages/Detail"
import { Favorite } from "./pages/Favorite"
import styles from "./styles/app.module.scss"
import { useEffect, useState } from "react"
import { getPlaces, getUserPlaces } from "./api/placeApi"
import { Error404, Loading } from "./components/LoadingError"



function App() {

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
              console.error(err);
              setIsError("Loading Fail ...")
            } finally {
              setIsPending(false)
            }
          }
          fetchData()
      },[])

  return (
    <>

    {/* &&는 왼쪽이 true일 때만 오른쪽 값을 반환 */}
    { isError && <Error message={isError} /> }
    { isPending && <Loading /> }

    {!isError && !isPending && (
    <>
      <h1 className={styles.h1}
        onClick={() => navigate('/') }
      > Eating Mark ! 🍓 </h1>

        <nav className={styles.nav}>
          <Link to={'/'}> Main </Link>
          <Link to={'/detail'}> Detail </Link>
          <Link to={'/favorite'}> Favorite </Link>
        </nav>

        <main className={styles.main}>
          <Routes>
            <Route path={"/"} element={<Main places={places}/>}/>
            <Route path={"/detail/:placeId"} element={<Detail />}/>
            <Route path={"/favorite"} element={<Favorite fav={fav}/>}/>
            <Route path={"*"} element={<Error404 />}/>
          </Routes>
        </main>
        </>
    )}
    </>
  )
}

export default App
