import React, { useState } from 'react'
import '../components/Navbar.css';

import { PiCaretLineDown } from "react-icons/pi"
import { IoIosSearch } from "react-icons/io";
import { IoHelpBuoy } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { PiSignInFill } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
function Navbar() {
  const [toggle,setToggle]=useState(false);  
  const showsidemenu=()=>{
    setToggle(true);
  }
  const hideshowmenu=()=>{
    setToggle(false);
  }
  const links=[
    {
        icon:"",
        name:"Swiggy Corporate"
    },
    {
        icon:<IoIosSearch />,
        name:"Search"
    },
    {
        icon:<CiDiscount1/>,
        name:"Offers",
        sup:"New"
    },
    {
         icon:<IoHelpBuoy/>,
            name:"Help"
    },
    {
        icon:<PiSignInFill/>,
           name:"Sign In"
    },
    {
        icon:<FaCartShopping/>,
           name:"Cart"
   },

  ]
  return (
    <>
        <div className="black-overlay" onClick={hideshowmenu} style={{
           opacity: toggle ? 1:0,
           visibility: toggle ? "visible" : "hidden",
        }}>
            <div onClick={(e)=>{
                e.stopPropagation()
            }} className="leftbar"  style={{
                left:toggle ? '0%': '-100%'

            }}>

            </div>

        </div>
        <div>
            <div className="main">
                <div className="logo">
                    <img src="images/logo.png" class alt="" />
                </div>
                <div className="location">
                    <h1 >Other </h1>  
                    <div className='dropdown'> <PiCaretLineDown  onClick={showsidemenu}/></div>
                    
                </div>
                <div className="left">
                    {
                        links.map(
                            (link,index)=>{
                                return <li className='flex item-center gap-2 duration-500'>
                                            {link.icon}
                                            {link.name}
                                            <sup>{link.sup}</sup>
                                     </li>
                            }
                        )
                    }
        
                </div>
            </div>
            
        </div>
    </>

  )
}

export default Navbar
