import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Adjective from "./pages/Adjective";
import Anime from "./pages/Anime";
import Artndesign from "./pages/Artndesign";
import Animals from "./pages/Animals";
import Favourites from "./pages/Favourites";
import Reactions from "./pages/Reactions";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
         <Navbar></Navbar>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/adjective" element={<Adjective/>}/>
          <Route path ="/animals" element={<Animals/>}/>
          <Route path ="/anime" element={<Anime/>}/>
          <Route path ="/art&design" element={<Artndesign/>}/>
          <Route path ="/favourites" element={<Favourites/>}/>
          <Route path ="/reactions" element={<Reactions/>}/>
        </Routes>
     
      </Router>
    </div>
  )
}
