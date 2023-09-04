import Card from './card'
import React from 'react'
const Card1=(props)=>{
    return(
    <div>
        
      
            
     
            <div class="col-lg-4">
              <div class="card1 mb-5 mb-lg-0">
                <div class="card1-body">
                  <h5 class="card1-title text-muted text-uppercase text-center"> {props.title}</h5><hr/>
                  
                  <ul class="fa-ul">
                    <li>{props.body}</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>framework of software,design,programming,debugging</li>
                   
                    
                  </ul>
                  
           
              
            </div>
          </div>
       </div>
        </div>
      
        )
}
export default  Card1
//It is a process involving the creation,maintenance of application ,