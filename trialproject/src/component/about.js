import React from "react"
import Navbar2 from './navbar2'
import img from './1682586072.png'
import broucher from "./broucher.pdf"
import Footer from './footer'
export default function About(){
    return(
        <div  className="home">
            
            <Navbar2/>
             
                <img src={img} height="100%" width="100%" />
               
                <div className="container">
       <div className="about">
    <p><h5>ABOUT US</h5>
             <p>Techasoft Pvt. Ltd. is a fast-growing IT Company that provides holistic 
                IT solutions to businesses across geographies We offer IT expertise in software, 
                website, and application (iOS & Android) development; UI/UX design; and digital marketing. We are situated at around 12 service locations, serving businesses belonging to various sectors. So long, we have forayed into healthcare, food services, travel & tourism, logistic & shipping, e-commerce, banking, technology, manufacturing, and IT-enabled education service industries so far. Currently, we have a team of highly skilled IT professionals that work round the clock to ensure Techasoft stays true to its offerings & commitments. Our team of experienced experts includes software developers,
                eb developers, designers, and digital marketing experts.</p>
           <h5>What makes us different? / Why us? / Why Techasoft?</h5>
                <p>
We, at Techasoft, believe in working in partnerships with our clients. Each of our clients is equally important to us and we collaborate, to understand their unique needs and working methods. We consistently interact and work together to create intelligent solutions that meet our client’s evolving business demands. And thus, provide quick turnarounds by following this collaborative style of working. We have been continuously bridging the gap between business and technology.

We believe that communication is the key and our team of experts always follows this principle. We carry out constant communication between team members and clients, ensuring transparency. This also enables us to get greater insights as well as trust from all our clients. All of our projects are delivered at the stated times and our services come within a rather affordable range.

Our development process is seamlessly carried out and it follows a systematic approach – We begin with signing a Non-Disclosure Agreement (NDA) with the client. Post which process and documentation is done. The responsibilities are shared among the team member to ensure a timely and smooth progression of the project. Proper scheduling is done of the whole process and we also carry out frequent reporting to keep everyone (including the clients) within the loop. We have a completely agile approach and get continuous client feedback and output, and accordingly change and progress with our development. This is why we can take on complex projects that other developers may perceive as difficult, making us one of the best software developers out there.

Download Our Brochure</p></p>
 

<a href= {broucher} className="butt">DOWNLOAD OUR BROUCHER</a>
</div><br/>


<div class="col-lg-4">
       <div class="card mb-5 mb-lg-0">
         <div class="card-body">
<h2>Mission</h2><hr/>
            <p>Our mission is to provide innovative software solutions for excellence and enterprise compliance.</p>
            </div> 
            </div>
            
         </div><br/>
         <div class="col-lg-4">
       <div class="card mb-5 mb-lg-0">
         <div class="card-body">
            <h2>vision</h2><hr/>
            <p>Our vision is to become businesses’ first choice when it comes to software development and maintenance. To accomplish this, we always try to exceed our client’s expectations. 
                Techasoft strives to build lasting partnerships and ensures client satisfaction.</p>
            </div> 
            </div>
            
         </div><br/>








</div>
       <Footer/>         
        </div>
    )
}