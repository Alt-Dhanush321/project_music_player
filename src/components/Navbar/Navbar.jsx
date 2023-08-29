import React, { useState } from 'react'
import {GiReactor } from 'react-icons/gi'
import {CgMenuLeft} from 'react-icons/cg'
import {RxCross2} from 'react-icons/rx'
import navLinks from './NavItems'
import './Navbar.css'

function Navbar() {

  const [menu, setMenu] = useState(false)

  return (
    <nav className='navbar '>
      <h1 className="brand flex gap-4 items-center text-4xl font-extrabold text-white">
      React <GiReactor />
      </h1>
      <div className="icon" onClick={()=>setMenu(!menu)}>
      {menu ? <CgMenuLeft className='text-4xl font-extrabold text-white' /> : <RxCross2 className='text-4xl font-extrabold text-white' /> }
      </div>
      <ul className={menu ?"active nav-items flex items-center gap-9 ":"nav-items flex items-center gap-9"}>
        { navLinks.map((item,i)=>(
          <li className={item.className + " text-white font-bold w-24 text-center py-2 px-4 rounded-lg"} key={i}>
            <a href={item.url}>{item.navItem}</a>
          </li>
        ))
       
        }
      </ul>

    </nav>
  )
}

export default Navbar