import React, { useState } from 'react';
import { FaBars }from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoDocumentText } from "react-icons/io5";
import { CgMenuBoxed } from "react-icons/cg";
import { FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<IoMdHome />
        },
        {
            path:"/masterD",
            name:"MasterData",
            icon:<TfiMenuAlt />
        },
        {
            path:"/products",
            name:"Products",
            icon:<IoCart/>
        },
        {
            path:"/guides",
            name:"Guides",
            icon:<IoDocumentText/>
        },
        {
            path:"/workorders",
            name:"WorkOrders",
            icon:<CgMenuBoxed/>
        },
        {
            path:"/material",
            name:"MaterialKits",
            icon:<FaTools/>
        }
    ]
    return (
        <div className="container-sb">
           <div style={{width: isOpen ? "300px" : "75px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">SL</h1>
                   <div style={{marginLeft: isOpen ? "160px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link id='iconss' to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;