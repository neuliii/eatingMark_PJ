import { Link, Route, Routes } from "react-router"
import { Main } from "./pages/Main"
import { Detail } from "./pages/Detail"
import { Favorite } from "./pages/Favorite"

function App() {

  console.log(import.meta.env.BASE_URL)
  return (
    <>
      <nav>
        <Link to={'/'}> Main </Link>
        <Link to={'/datail'}> Detail </Link>
        <Link to={'/favorite'}> Favorite </Link>
      </nav>
      <main>
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
