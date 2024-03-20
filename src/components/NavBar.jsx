import React, { useState }  from 'react'

import { Link } from 'react-router-dom'

import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'

import '../css/NavBar.css'


const Data = [
  {
    title: 'Home',
    path: '/',
    cName: 'nav-text',
    icon: <AiIcons.AiFillHome/>

  },
  {
    title: 'Report',
    path: '/report',
    cName: 'nav-text',
    icon: <AiIcons.AiFillHome/>
    // icon: <AiIcons.FaCartPlus/>
  },
  {
    title: 'Product',
    path: '/product',
    cName: 'nav-text',
    icon: <AiIcons.AiFillHome/>
    // icon: <AiIcons.FaCartPlus/>
  }
]

export const NavBar = () => {
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  console.log(sidebar)

  return (
      <div>
        <IconContext.Provider value={{color:"#fff"}}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

          <nav className={ sidebar?"nav-menu active":"nav-menu" }>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose/>
                </Link>
              </li>
              {
                Data.map((item, i) => {
                  return (
                    <li key={i} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>

                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
  )
}
