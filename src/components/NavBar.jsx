import React from 'react'

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
  
  return (
      <div>
        <nav>
          <ul>
            {
              Data.map((item, i) => {
                return (
                  <li key={i} className={item.cName}>
                    <span>{item.title}</span>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
  )
}
