
import React from 'react'
import Navbar2 from './navbar2'
import img from './1682582643.png'
import {NavLink} from "react-router-dom"
import Footer from './footer';
export default function News2(){
    return(
        <div  className='home'>News2
            <Navbar2/>
            <section>
                <div className="container">
                 <h5>AI TECHNOLOGY LIKE CHATGPT WILL RESHAPE SOFTWARE CODING JOBS FOREVER</h5>
                 <img src={img} height="100%" width="100%"/> <br/>
                 
                 <div className='news1details'> 
                 <h5>NEWS DETAILS</h5><hr/>
                 <h5><b>What Is ChatGPT?</b></h5>
                 <p>ChatGPT is a large language model created by OpenAI, based on the GPT (Generative Pre-trained Transformer) architecture. It is one of the most advanced natural language processing (NLP) models currently available, capable of generating human-like responses to a wide range of prompts.

</p>
      <p>The model was trained on a massive dataset of text from the internet, including books,
         articles, and websites. This allowed it to learn patterns and relationships in language and develop an understanding of grammar, syntax, and semantics.</p>
             <p>ChatGPT is designed to generate responses to prompts that are typed into a chat interface, such as a messaging app or a web chatbot. It uses its vast knowledge of language to understand the meaning behind the prompt and generate a response that is appropriate and coherent.</p>    
               <p>The model has a wide range of applications, from chatbots and virtual assistants to language translation and text generation. It has been used to generate news articles, write poetry, and even create works of fiction.

</p>  
<p>Overall, ChatGPT represents a significant advancement in the field of natural language processing and has the potential to revolutionize the way we interact with computers and machines.</p>
                 </div>
                 <div>
                    <h5><b>ChatGPT Will Reshape Software Coding Jobs Forever</b></h5><br/>
                    <p>AI technology like ChatGPT has the potential to reshape software coding jobs in significant ways. While it's unlikely that AI will entirely replace human coders, it's clear that AI tools and techniques will become increasingly important in the field of software development.</p>
                    <p>One significant way that AI technology is already reshaping software coding jobs is through the use of automated code generation. With AI-powered tools, developers can write code more quickly and efficiently than ever before. These tools can analyze data sets, learn patterns, and generate code that fits the requirements of a given project.</p>
                    <p>Another area where AI is making an impact is in the field of software testing. With the help of AI-powered tools, developers can automate testing processes and identify potential bugs and errors more quickly and accurately than manual testing.</p>
                    
                    <h5></h5>
                 </div>
                 <div>
            <h5>OTHER NEWS</h5>
        </div>

        <div className="container-news">
            <div class="col-lg-4">
          <div class="card mb-5 mb-lg-0">
         <div class="card-body">
          <h2>Artificial Intelligence</h2><hr/>
            <img src={img} height="130%" width="100%"/>
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
            <img src={img} height="130%" width="100%"/>
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
          <h2>Artificial Intelligence</h2><hr/>
            <img src={img} height="130%" width="100%"/>
            <p>How AI And ML Will Impact Software Development</p>
            <p>Impact Of Artificial Intelligence And Machine Learning In software development Artificial in...


 </p>
 <NavLink to ="/news3">Read More</NavLink>
            </div> 
            </div>
            
         </div><br/>
         </div><br/><br/>
                 </div>
                </section>
                <Footer/>
        </div>
    )
}
 