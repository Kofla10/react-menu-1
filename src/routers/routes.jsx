import { BrowserRouter,
        Routes,
        Route
    } from "react-router-dom";     
import { Home } from "../pages/Home";
import { NavBar } from "../components/NavBar";
import { Product } from "../pages/Product";
import { Report, Report1, Report2, Report3 } from "../pages/Report";


    
    export const MyRoutes = () => {
      return (
        <BrowserRouter>
        <NavBar/>
                <Routes>
                    <Route exact path = "/"  element = {< Home />} />
                    <Route exact path = "/product" element = { < Product /> }/>
                    <Route exact path = "/report" element = { <Report/> }/>
                    <Route exact path = "/report/reports1" element = { <Report1/> }/>
                    <Route exact path = "/report/reports2" element = { <Report2/> }/>
                    <Route exact path = "/report/reports3" element = { <Report3/> }/>
                </Routes>
        </BrowserRouter>
      )
    }
    