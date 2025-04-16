import { Link, Route, Routes } from "react-router"
import { Main } from "./pages/Main"
import { Detail } from "./pages/Detail"
import { Favorite } from "./pages/Favorite"
import styles from "./styles/app.module.scss"
import { Error, Error404, Loading } from "./components/LoadingError"
import { GetFetchApiProvider, GetFetchApi } from "./context/GetFetchApi";
import { useContext } from "react"
import { FavoriteFetchApiProvider } from "./context/FavoriteFetchApi"
// import { FavoriteFetchApiProvider } from "./context/FavoriteFetchApi"



function ContextApp() {
  return (
    <FavoriteFetchApiProvider>
      <GetFetchApiProvider>
        <App />
      </GetFetchApiProvider>
    </FavoriteFetchApiProvider>
  )
}
export default ContextApp;



function App() {

  const {isError, isPending, navigate } = useContext(GetFetchApi)
  

  return (
    <>

    {/* &&는 왼쪽이 true일 때만 오른쪽 값을 반환 */}
    { isError && <Error isError={isError} /> }
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
              <Route path={"/"} element={<Main/>}/>
              <Route path={"/detail/:placeId"} element={<Detail />}/>
              <Route path={"/favorite"} element={<Favorite/>}/>
              <Route path={"*"} element={<Error404 />}/>
            </Routes>
          </main>

      </>
    )}
    </>
  )
}

