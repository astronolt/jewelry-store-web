import { useState } from 'react';
import { Link } from "react-router-dom";
import { close, menu } from "../../assets";
import { shop, navLinksRight, navLinksLeft } from "../../constants";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss"


const Navbar = () => {

   const [toggle, setToggle] = useState(false);

   return (
      <nav className='w-full navbar border-b-[2px] border-[#444] text-white'>

         <div className="wrapper">
            <div className="left">
               <div className='item list-none sm:flex hidden justify-end items-center flex-1'>
                  {navLinksRight.map((nav, index) => (
                     <Link
                        key={nav.id}
                        to={nav.url}
                        className={`font-default font-normal cursor-pointer text-[16px]
                     ${index === navLinksRight.length - 1 ? 'mr-0' : 'mr-10'}`}
                     >
                        {nav.title}
                     </Link>
                  ))}
               </div>
            </div>

            <div className="center bg-gold-gradient rounded-xl border-4 border-[#ffdb58] mx-[25px]">
               <Link className="link" to="/">
                  <img src="/logo.svg" alt="sendbar" className='w-[50px] mx-[17px] py-[30px]' />
               </Link>
            </div>

            <div className="right">

               <div className='item list-none sm:flex hidden justify-end items-center flex-1'>
                  {navLinksLeft.map((nav, index) => (
                     <Link
                        key={nav.id}
                        to={nav.url}
                        className={`font-default font-normal cursor-pointer text-[16px]
                     ${index === navLinksLeft.length - 1 ? 'mr-0' : 'mr-10'}`}
                     >
                        {nav.title}
                     </Link>
                  ))}
               </div>

               <div className="icons">
            {/* <SearchIcon/> */}
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              {/* <span>{ products.length }</span> */}
            </div>
          </div>

            </div>
         </div>
         {/* {open && <Cart/>} */}


         { /** mobile menu */}
         <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
            <img src={toggle ? close : menu}
               alt="menu"
               className='w-[28px] h-[28px] object-contain'
               onClick={() => setToggle((togglePrev) => !togglePrev)}
            />

            <div
               className={`${toggle ? 'flex' : 'hidden'} p-4 bg-red-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
               <ul
                  className='list-none flex flex-col justify-end items-center flex-1'>

                  {navLinksRight.map((nav, index) => (
                     <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px]
                  ${index === navLinksRight.length - 1 ? 'mr-0' : 'mb-10'}`}
                     >
                        <a href={`#${nav.id}`}>
                           {nav.title}
                        </a>
                     </li>
                  ))}

               </ul>
            </div>
         </div>

      </nav>
   )
}

export default Navbar