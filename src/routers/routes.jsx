import { BrowserRouter,
        Routes,
        Route
    } from "react-router-dom";     
import { Home } from "../pages/Home";
import { NavBar } from "../components/NavBar";
import { Product } from "../pages/Product";
import { Report } from "../pages/Report";


    
    export const MyRoutes = () => {
      return (
        <BrowserRouter>
        <NavBar/>
                <Routes>
                    <Route exact path="/"  element={< Home />} />
                    <Route exact path="/product" element={ < Product /> }/>
                    <Route exact path="/report" element={ <Report/> }/>
                </Routes>
        </BrowserRouter>
      )
    }
    