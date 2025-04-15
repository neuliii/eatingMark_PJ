import { Link, Route, Routes, useNavigate } from "react-router"
import { Main } from "./pages/Main"
import { Detail } from "./pages/Detail"
import { Favorite } from "./pages/Favorite"
import styles from "./styles/app.module.scss"
import { useEffect, useState } from "react"
import { getPlaces, getUserPlaces } from "./api/placeApi"



function App() {

  const navigate = useNavigate()
  const [places, setPlaces] = useState([])
  const [fav, setFav] = useState([])
  
      useEffect(()=> {
          const fetchData = async () => {
              const allPlace = await getPlaces();
              const favPlace = await getUserPlaces()
              setPlaces(allPlace)
              setFav(favPlace)
          }
          fetchData()
      },[])

  return (
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
        </Routes>
      </main>

    </>
  )
}

export default App
