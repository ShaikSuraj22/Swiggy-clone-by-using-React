import React, { useEffect, useState } from 'react'
import '../components/Categ.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";


function catogery() {
    const[slide,setSlide]=useState(3);
    const [categories,setCategery]=useState([]);
    const fetchcategory=async()=>{
        const response= await fetch("http://localhost:5000/categories");
        const data= await response.json();
        setCategery(data);
    }
    useEffect(
        ()=>{
            fetchcategory();
        },[]
    )
    const nextslide=()=>{
        if(categories.length-8==slide) return false
        setSlide(slide+3);
    }
    const prevslide=()=>{
        if(slide==0) return false
        setSlide(slide-3);
    }
  return (
    <>
    <div className="main ">
        <div className="le">
            <h2>What's on your mind?</h2>
        </div>
        <div className="symbols ">
            <div className="leftball">
                <div className="sym" onClick={prevslide}>
                    <IoIosArrowRoundBack/>
                </div>
               
            </div>
            <div className="rightball">
                <div className="sym" onClick={nextslide}>
                    <IoIosArrowRoundForward/>
                </div>
            </div>
        </div>
        
        
    </div>
    <div className="hi">
            {
                categories.map(
                    (cat,index)=>{
                        return (
                            <div style={{
                                transform:`translateX(-${slide*100}%)`
                            }} key={index} className="box">
                                <img src={"http://localhost:5000/images/" +cat.image} alt="" />
                            </div>
                        )
                    }
                )
            }
        </div>
        <hr className='line'/>
    </>
    )
}

export default catogery
