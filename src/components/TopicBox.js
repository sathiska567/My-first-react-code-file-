import React from 'react'
import "./TopicBox.css"

export default function TopicBox(props) {
    // we can write js this place
//  const topic = "My Favourit food is rice"
//  const item = "and chicken"

// const a =10;
// const b =20;
// const c = a+b ;

 // const foodPrices = {kottu:"250",rice:"300"} <= we can't use objects
  return (
    <div>
        <div className="topicBox">
            {/* <span className='text'> {topic} {item}</span> */}
        
            {/* <span className='text'> {c}</span> */}

            {/* <span className='text'>{alert("Hellow")}</span> */}

            {/* <span className='text'> {[20,30,40,50]}</span> */}

            {/* <span className='text'> {foodPrices}</span> <=we can't use objects */}
   
        <spam>My favourit food is {props.food}</spam> 
        </div>
    </div>
  )
}
