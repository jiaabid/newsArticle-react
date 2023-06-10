
import { useNavigate,NavLink } from "react-router-dom";
import React from "react";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CloudIcon from '@mui/icons-material/Cloud';

const Header=()=>{
    
return(
    <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light headNav">
  <div class="container">
      <ul class="navbar-nav">
    
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TV
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Three</a></li>
            <li><a class="dropdown-item" href="#">Bravo</a></li>
            <li><a class="dropdown-item" href="#">NewsHub</a></li>
            <li><a class="dropdown-item" href="#">Three Now</a></li>
            <li><a class="dropdown-item" href="#">TV Guide</a></li>     
          </ul>

        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SPORTS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">      
          
          <li><a class="dropdown-item" href="#">Three</a></li>
            <li><a class="dropdown-item" href="#">Bravo</a></li>
            <li><a class="dropdown-item" href="#">NewsHub</a></li>
            <li><a class="dropdown-item" href="#">Three Now</a></li>
            <li><a class="dropdown-item" href="#">TV Guide</a></li>     
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">NEWS</a>
        </li>
      </ul>
  </div>
</nav>
<header>
<nav className="navbar navbar-expand-lg navbar-light bg-light pb-0 header">
    <div className="container ">
        
      <div className="row brand">
      <div className="col-6 col-md-6 ">
   
      <h1> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> Newshub  </h1>
      <span className="hidden">30 May 2023</span>
      </div>
    
        <div className="col-6 weatherWrap ">
                {/* <!-- Weather Forecast Component --> */}
              
               
        <a href="https://www.newshub.co.nz/home/podcasts.html" >
    
          
            <div  className="mediaWeatherInfo" >
<div className="weatherIcon">
<CloudIcon
fontSize="large"
 className="cloudIcon"/>
</div>
<div className="weatherContent">
<h3>Akl</h3>
<div className="degree"><h5>19° </h5> <span> 11°</span></div>

</div>
          
             
            </div>
            
        </a>
       
       <div className="row mediaWrapper hidden">
       {/* Podcast */}
        <div className="col-4 ">
        <a href="https://www.newshub.co.nz/home/podcasts.html" className="media">
        
            <div className="mediaIcon" >
            <div className="mediaIconWrap">
            <HeadphonesIcon fontSize="inherit"/>
            </div>
             
            </div>
            <div className="mediaContent">
                <h3 className="mediaContentHeading" >Podcasts </h3>
                <p>Listen to Newshub's latest podcasts</p>
            </div>
        </a>
        </div>
        {/* ThreeNow */}
        <div className="col-4 ">
        <a href="https://www.newshub.co.nz/home/podcasts.html" className="media ">
        
            <div className="mediaIcon"  >
            <div className="mediaIconWrap" style={{backgroundColor:"#C92C6D"}}>
            <span style={{color:"#fff", fontSize:"8px",fontWeight:"600" }} >NOW</span>
            </div>
             
            </div>
            <div className="mediaContent">
                <h3 className="mediaContentHeading">Three Now  </h3>
                <p>Watch the latest current affairs shows</p>
            </div>
        </a>
        </div>
        {/* <!-- Weather Forecast Component --> */}
        <div className="col-md-4 col-6 ">
        <a href="https://www.newshub.co.nz/home/podcasts.html"  >
    
            <div className="mediaContent mediaWeather">
                <h3 className="mediaContentHeading">Auckland</h3>
               
            <div className="mediaWeatherInfo"  >
<div className="weatherIcon">
<CloudIcon
fontSize="large"
 className="cloudIcon"/>
</div>
<div className="weatherContent">
    
<h5>19°</h5> <span>11°</span>
</div>
          
             
            </div>
            </div>
        </a>
        </div>

       </div>
     </div>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <nav className="navbar navbar-expand-lg mainNavWrap mx-auto w-100 mt-2 " style={{display:"block", zIndex:"1000"

     }}>

<div className="container-fluid ">
 

    <ul className="navbar-nav mainNav ">
                   
      <div className="nav-item">
        <NavLink exact activeClassname="linkActive" className="nav-link" to="home">HOME </NavLink>     
      </div>
      <div className="nav-item">

        <NavLink exact activeClassname="linkActive" style={{color:"#000"}} className="nav-link" to="personalizeFeed">PERSONALIZE NEWSFEED</NavLink>      
      </div>
 
      <div className="nav-item">      
        <NavLink exact activeClassname="linkActive" className="nav-link" to="newZealand">NEW ZEALAND </NavLink>      
      </div>
    
      <div className="nav-item">
      <NavLink exact activeClassname="linkActive" className="nav-link" to="world">WORLD</NavLink> 
      </div>
      <div className="nav-item">
       
        <NavLink exact activeClassname="linkActive" className="nav-link" to="decision23">DECISION23 </NavLink> 
      </div>
      <div className="nav-item">
         <NavLink exact activeClassname="linkActive" className="nav-link" to="sport">SPORT </NavLink> 
      </div>
      <div className="nav-item">
       
         <NavLink exact activeClassname="linkActive" className="nav-link" to="entertainment">ENTERTAINMENT </NavLink> 
      </div>
      <div className="nav-item">
         <NavLink exact activeClassname="linkActive" className="nav-link" to="lifeStyle">LIFE STYLE </NavLink> 
      </div>
      <div className="nav-item">       
         <NavLink exact activeClassname="linkActive" className="nav-link" to="travel">TRAVEL </NavLink> 
      </div>
      <div className="nav-item">
         <NavLink exact activeClassname="linkActive" className="nav-link" to="technology">TECHNOLOGY </NavLink> 
      </div>
      <div className="nav-item">
         <NavLink exact activeClassname="linkActive" className="nav-link" to="money">MONEY </NavLink> 
      </div>
      <div className="nav-item">
         <NavLink exact activeClassname="linkActive" className="nav-link" to="show">SHOW </NavLink> 
      </div>
     
    </ul>
 </div>

</nav>
    </div>
      </div>
    </div>
    </nav>
</header>
    </>
)
}
export default Header;