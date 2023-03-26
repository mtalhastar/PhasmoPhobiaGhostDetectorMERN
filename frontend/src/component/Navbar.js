import {Link} from 'react-router-dom';

const NavBar =()=>{
    return(
 <header>
           <nav>
        <div className="nav-header"> <span className="nav-logo">Ghost Evidence</span> </div>
        <ul className="nav-links">         
            <li><Link to="/"><span>Ghost Evidence</span></Link></li>
            <li><Link to="/Evidence"><span>Evidence Details</span></Link></li>
            <li><Link to="/Ghost"><span>Ghost Details</span></Link></li>
        </ul>
         </nav>
</header>
    )
};
export default NavBar;
