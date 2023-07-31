// import {BsBellFill} from "react-icons/bs"/

import"../styles/navbar.css"
const Navbar = ({setState}) =>{

      return(
        <div className='navBar'>
          <div className="nav-container">
          
                <div className='nav-left'>
                  <img className="logo" src="https://seeklogo.com/images/P/pexels-logo-EFB9232709-seeklogo.com.png" alt="logo"/>
              <h2 className='pexel1'>Pexels</h2>
              </div>
      </div>
            <div className="nav-right"> 
          <div class="dropdown">
            <p class="dropbtn">Explore </p>
            <div class="dropdown-content">
              <a href="#">Discover Photos</a>
              <a href="#">Popular Searches</a>
              <a href="#">LeaderBoard</a>
              <a href="#">Challenges</a>
              <a href="#">Free Vedios</a>
              <a href="#">Pexels Blog</a>
            </div>
          </div>
          <h3>License</h3>
                <div  className="dawn">
               <p className="downbtn">...</p>
               <div className="drop-content">
               <a href="#">Login</a>
               <a href="#">Join</a>
               <a href="#">Change Language</a>
               <a href="#">Image & Vedios API</a>
               <a href="#">Apps & Plugins</a>
               <a href="#">FAQ</a>
               <a href="#">Partnerships</a>
               <a href="#">Imprint & Terms</a>

               </div>
               </div>
              </div>
               {/* <BsBellFill className="bell"/> */}

               <div  className="head">
                <h2 className="hd1">The best free stock photos, royalty free</h2>
                <h2 className="hd1">images & videos shared by creators.</h2>
               </div>
               <div>
                <input className="search" placeholder="Search for free Photos "></input>
               </div>
              </div>
        )  
      }

  export default Navbar;