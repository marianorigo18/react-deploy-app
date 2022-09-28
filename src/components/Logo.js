import { Component} from "react";
import { NavLink } from "react-router-dom";
class Logo extends Component{
    render(){
        return(
            <h2><NavLink to="/">Logo</NavLink></h2>
        )
    }
}
export default Logo