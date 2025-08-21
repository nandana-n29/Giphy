import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import singlegif from "./pages/singlegif";
import Favourites from "./pages/Favourites";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

export default function App() {
  return (
     <div className="py-4 mx-auto">
      {/* <div className="container px-6 py-4 mx-auto"> */}
      <Router>
         <Navbar></Navbar>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/:category" element={<Category/>}/>
          <Route path ="/search/:query" element={<Search/>}/>
          <Route path ="/:type/:slug" element={<singlegif/>}/>
          <Route path ="/favourites" element={<Favourites/>}/>
          
        </Routes>
     
      </Router>
    </div>
    // </div>
  )
}
