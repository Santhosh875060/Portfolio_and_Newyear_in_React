import { BrowserRouter, Route, Routes } from "react-router-dom"
import Port from "./components/Portfolio"
import Folio from "./components/Folio"
import Home from "./components/Home"
import Google from "./components/GooglePlay"
const App=()=>{
    return(
        <div > 
            
            <BrowserRouter>
            <Port></Port>
            <Routes>
                
                <Route element={<Home/>} path="/home"></Route>
                <Route element={<Folio/>} path="/folio"></Route>
                <Route element={<Google/>} path="/google"></Route>
            
            </Routes>
            </BrowserRouter> 
        </div>
    )
}
export default App