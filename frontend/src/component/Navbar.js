import {Link} from 'react-router-dom';

const NavBar =()=>{
    return(
 <header>
           <nav>
        <div className="nav-header"> <span className="nav-logo">Ghost Evidence</span> </div>
        <ul className="nav-links">         
            <li><Link to="/Page1"><span>Page 1</span></Link></li>
            <li><Link to="/"><span>Page 2</span></Link></li>
            <li><Link to="/Page3"><span>Page 3</span></Link></li>
        </ul>
         </nav>
</header>
    )
};
export default NavBar;
