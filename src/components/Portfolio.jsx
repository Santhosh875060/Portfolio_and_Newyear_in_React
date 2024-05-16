import { Link } from "react-router-dom"
import style from "C:\\Users\\SANTHOSH\\Desktop\\New folder (2)\\My ReactProject\\portfolio\\src\\app.module.css"


const Port=()=>{
    return(
        <div>
             <div id={style.border}>
            <Link to={"/home"}>Home</Link>
            <Link to={"/folio"}>My Portfolio</Link>
            <Link to={"/google"}>Newyear</Link>
            </div>
        </div>
    )
}
export default Port