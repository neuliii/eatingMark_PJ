import { Link, Route, Routes, useNavigate } from "react-router"
import { Main } from "./pages/Main"
import { Detail } from "./pages/Detail"
import { Favorite } from "./pages/Favorite"
import styles from "./styles/app.module.scss"



function App() {

  const navigate = useNavigate()

  return (
    <>
    <h1 className={styles.h1}
      onClick={() => navigate('/') }
    > Eating Mark ! 🍓 </h1>

      <nav className={styles.nav}>
        <Link to={'/'}> Main </Link>
        <Link to={'/datail'}> Detail </Link>
        <Link to={'/favorite'}> Favorite </Link>
      </nav>

      <main className={styles.main}>
        <Routes>
          <Route path={"/"} element={<Main />}/>
          <Route path={"/detail/:placeId"} element={<Detail />}/>
          <Route path={"/Favorite"} element={<Favorite />}/>
        </Routes>
      </main>

    </>
  )
}

export default App
