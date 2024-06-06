
//import Navside from "../navside/Navside";
import Sidebar from "../sidebar/Sidebar"; //import Sidebar1 from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    
    <div className="navbar"><Sidebar />
      <div className="wrapper">
        <span>Himanshi</span>
        <div className="socials">
          <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
          <a href="#"><img src="/dribbble.png" alt="Dribbble" /></a>
          </div>
        </div>
      </div>
    
  );
}

export default Navbar;
