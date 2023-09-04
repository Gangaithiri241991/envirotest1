import React from "react"
import Navbar2 from './navbar2'
import img from './1682582643.png'
import img1 from './1677079492.png'
import img2 from './1682586072.png'
import {NavLink} from 'react-router-dom'
export default function News(){
    return(
        <div  className="home1">
           
            <Navbar2/>
            <section className="news1">
            <p className="news"><u className="news2"> News </u></p><br/>
            <div className="container-news">
            <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
         <div class="card-body">
          <h2>Artificial Intelligence</h2><hr/>
            <img src={img} height="80%" width="80%"/>
            <p>How AI And ML Will Impact Software Development</p>
            <p>Impact Of Artificial Intelligence And Machine Learning In software development Artificial in...

        
 </p>

 <NavLink to ="/news1">Read More</NavLink>
            </div> 
            </div>
            
         </div><br/>
         <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
         <div class="card-body">
          <h2>Artificial Intelligence</h2><hr/>
            <img src={img2} height="130%" width="100%"/>
            <p>How AI And ML Will Impact Software Development</p>
            <p>Impact Of Artificial Intelligence And Machine Learning In software development Artificial in...


 </p>
 <NavLink to ="/news2">Read More</NavLink>
            </div> 
            </div>
            
         </div><br/>
         <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
         <div class="card-body">
          <h2>LATEST PROGRAMMING LANGUAGE UPDATES</h2><hr/>
            <img src={img1} height="130%" width="100%"/>
            <p>How AI And ML Will Impact Software Development</p>
            <p>Impact Of Artificial Intelligence And Machine Learning In software development Artificial in...


 </p>
 <NavLink to ="/news3">Read More</NavLink>
            </div> 
            </div>
            
         </div><br/>
         </div><br/><br/>
         <div className="container1">
    
 <div>
<h6>TECHASOFT PVT. LTD.</h6>
    <a>#435, 3rd Floor, 27th Main Road,
1st Sector HSR Layout, Bangalore - 560102</a></div>
<div>
<h6>INTERNATIONAL SERVICE.</h6>
    <a>Digital Marketing
SEO Agency
Search Engine Marketing
Social Media Marketing</a></div>
<div>
<h6>TECHASOFT PVT. LTD.</h6>
    <a>#435, 3rd Floor, 27th Main Road,
1st Sector HSR Layout, Bangalore - 560102</a></div>
<div>
<h6>TECHASOFT PVT. LTD.</h6>
    <a>#435, 3rd Floor, 27th Main Road,
1st Sector HSR Layout, Bangalore - 560102</a>
</div>
</div>

            </section>
        </div>
    )
}