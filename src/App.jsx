import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import category from "./pages/category";
import search from "./pages/search";
import singlegif from "./pages/singlegif";
import Favourites from "./pages/Favourites";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
         <Navbar></Navbar>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/:category" element={<category/>}/>
          <Route path ="/search/:query" element={<search/>}/>
          <Route path ="/:type/:slug" element={<singlegif/>}/>
          <Route path ="/favourites" element={<Favourites/>}/>
          
        </Routes>
     
      </Router>
    </div>
  )
}
