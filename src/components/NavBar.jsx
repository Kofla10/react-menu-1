import React, { useState }  from 'react'

import { Link } from 'react-router-dom'

import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons'
import * as FaIcons from 'react-icons'


const Data = [
  {
    title: 'Home',
    path: '/',
    cName: 'nav-text'

  },
  {
    title: 'Report',
    path: '/report',
    cName: 'nav-text'
  },
  {
    title: 'Product',
    path: '/product',
    cName: 'nav-text'
  }
]

export const NavBar = () => {
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSetsidebar(!sidebar);

  return (
      <div>
        <IconContext.Provider value={{color:"#fff"}}>
          <nav>
            <ul>
              {
                Data.map((item, i) => {
                  return (
                    <li key={i} className={item.cName}>
                      <Link to={item.path}>
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
