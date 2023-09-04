
import './App.css';
import img from "./i.png"
import img1 from "./d.png"
import img2 from "./fa.avif"
import img3 from "./download (3).png"
import img4 from "./download (2).png"
import img5 from  "./youtupe.avif"
import Navbar2 from "./component/navbar2"
import Carosel from './component/carosel.js';
import Card from "./component/card"
import Home from  "./component/home"
import About from "./component/about"
import {Route,Routes,Link } from "react-router-dom"
import News from './component/news'
import News1 from './component/news1'
import News2 from './component/news2'
import News3 from './component/news3'
import Industry from './component/industry'
import Technology from './component/technology';
import Contact from './component/contact';
//import Testimonial from './component/testimonial';
import Clients from './component/clients.js'
import img7 from './component/canada_watsapp.png'
import Doctor from './component/doctor'
import Elearning from './component/Elearning';
import imgin from './component/india_watsapp.png'
import imgusa from './component/usa_watsapp.png'
import imgdu from './component/dubai_whatapp.png'
import ContactUs from './component/contactus'
import Footer from './component/footer'
import Hrms from './component/hrms'
//import Card1 from './component/card1'


function App() {
  return (
    <div className="App">
      
       
     <header >
      <nav  >
    <div className="container6">

<img src={img2} height="2%" width="2%"/>
<img src={img3} height="2%" width="2%"/>
<img src={img1} height="2%" width="2%"/>
<img src={img4} height="2%" width="2%"/>
<img src={img} height="3%" width="3%"/>
<img src={img5} height="2%" width="2%"/>
        
      
        
       
      
       
        
        
        
<div>
  <ul>
        <li><img src={img7} height="35%" width="35%"/>123425</li>
        <li> <img src={imgin} height="35%" width="35%"/>gghjjk </li>
        <li><img src={imgusa}height="35%" width="35%"/></li> 
        <li><img src={imgdu}height="35%" width="35%"/>123425</li> </ul> </div>            
    </div>
      </nav>
      <hr/>
      
      
      
      <Routes>
      
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/news" element = {<News/>}
        />

         <Route path="/news1" element = {<News1/>}/>
                    
         <Route path="/news2" element = {<News2/>}/> 
          <Route path="/news3" element = {<News3/>}/>
         <Route path="/doctor1" element={<Doctor/>}/>
         <Route path="/elearn1" element={<Elearning/>}/>
         <Route path="/hrms" element={<Hrms/>}/>
        </Routes>
        <Navbar2/>
      </header><br/><br/>
    
      <section className="container">
      <Carosel/>
      </section>
     <section className='car2'>

      <h5 className="section2">BUILDING THE GAP BETWEEN BUSINESS AND TECHNOLOGY</h5>
     <p className='sect2'>OUR SERVICES</p>
     
     <Card/><br/><br/>
    
     
     
     </section><br/>
     <h6>Industries</h6>
     <section>
     
      <Industry/>





     </section>
     <h5>TECHNOLOGY</h5>
     
<Technology/>





<section>

  <Clients/>
  </section>

      <section>
      <h6>Share your Query and contact</h6> 
            <Contact/>
      </section>

<section>

  </section>
  
    
      <section>

     <Footer/>
        </section>
        <section>
       
        </section>
   </div>
  
   
  );
}

export default App;
