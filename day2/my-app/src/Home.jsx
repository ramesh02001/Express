import React, { useState }  from 'react'
import './Home.css'
 import Card from './Card'
 
function Home(    ) {
 
  const [receivedData,setRec]=useState("");
  const handleDataFromChild =(data)=>{
    setRec(data);
  }
  return (
 <>
   <div className='nav'>
        <div className='container'>
          <div className='logo'> EXPRESS </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li>
              <a className="sur sur-secondary dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
            </li>
          </ul>
          <button className="shopCard"> <i className="fa fa-shopping-cart" aria-hidden="true"></i>Card {receivedData}  </button>
        </div>
      </div>
      <div className='off'>
        <h2>Summer sale offer</h2>
         <div className='container-md'> Flipkart is all set to start its Big Billion Days 2023 from October 8 to October 15, 2023. The 10th edition of the Big Billion Days sale will compete with the Amazon Great Indian Festival, which is also starting on the same day </div> 
      </div>

  
      <div className='cards'>
        <div className='container-sm'>
          <Card ondata={handleDataFromChild}  ></Card>
            
        </div>
        </div> 
   </> 

  )
}

export default Home