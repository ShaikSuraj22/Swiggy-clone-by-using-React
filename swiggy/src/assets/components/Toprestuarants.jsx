import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import '../components/Categ.css';
import Card from '../components/card'
import '../components/Cardd.css';




function Toprestuarants() {
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
    <>
    <div className="main ">
        <div className="le">
            <h2>Restaurants  Near Me</h2>
        </div>
        <div className="symbols ">
            <div className="leftball">
                <div className="sym">
                    <IoIosArrowRoundBack/>
                </div>
               
            </div>
            <div className="rightball">
                <div className="sym" >
                    <IoIosArrowRoundForward/>
                </div>
            </div>
        </div>
          
    </div>
    <div className='cardds'>
            {
                data.map(
                    (d,i)=>{
                        return <Card {...d} key={i}/>
                    }
                )
            }
        </div>  
    
    </>

  )
}

export default Toprestuarants
