import react from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navbar-wrapper">
            <img src={props.navbar.logo} className="pic"></img>
            {/* ako postoje props, props.navbar i props.navbar.routes onda app radi */}
            {props&& props.navbar&& props.navbar.routes&& props.navbar.routes.map((route) => {
                // ako goto ne postoji samo '' jer link mora imati to
               return  <Link to={route.goto? route.goto : ''}>{route.title}</Link>
            })}
            <p>{props.title}</p>
            <p>{props.name} {props.lastName}</p>
        </div>
    )
}

export default Navbar;