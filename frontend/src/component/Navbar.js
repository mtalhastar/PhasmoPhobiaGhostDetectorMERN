import {Link} from 'react-router-dom';


const refresh=()=>{
  window.location.reload()
}
const NavBar =()=>{
    return(
 <header>
           <nav>
        <div className="nav-header"> <span className="nav-logo">Ghost Evidence</span> </div>
        <ul className="nav-links">         
            <li onClick={refresh}><Link to="/"><span>Ghost Evidence </span></Link></li>
            <li><Link to="/test"><span>Ghost & Evidence</span></Link></li>
            <li><Link to="/EvidencePage"><span>Evidence Details </span></Link></li>
            <li><Link to="/GhostPage"><span>Ghost Details</span></Link></li>
            <li><Link to="/GamePage"><span>Game Details</span></Link></li>
        </ul>
         </nav>
</header>
    )
};
export default NavBar;
