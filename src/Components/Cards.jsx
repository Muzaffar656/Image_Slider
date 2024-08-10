import React from 'react'
import './card.css'
const Cards = ({data,slide}) => {

  return (
    <>
    <div className='my-card'>

    {
        data.map((item,index)=>{
return(
  <>
  <h1>{item.cardno}</h1>
    <img src={item.img} alt="image" />
  </>
)
        })
    }
    </div>
    </>
  )
}

export default Cards