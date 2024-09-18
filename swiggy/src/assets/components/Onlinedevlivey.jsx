import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import '../components/Cardd.css';

function Onlinedevlivey() {
    const [data,setdata]=useState([]);

  
    const fetchToprestaurant= async()=>{
      const response=await fetch('http://localhost:5000/top-restaurant-chains')
      const apidata=await response.json();
      setdata(apidata)
    }
    
    useEffect(
      ()=>{
          fetchToprestaurant();
  
      },[]
    )
  return (
    <div className='bb'>
        <div className='online'>
            <div > <h2>Restaurants with online food delivery in Chhindwara</h2></div>
        </div>
        <div className="gr">
            {
                data.map(
                    (d,i)=>{
                        return <Card {...d} />
                    }
                )
            }
        </div>
        


    </div>
  )
}

export default Onlinedevlivey
