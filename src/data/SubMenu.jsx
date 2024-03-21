import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const SubMenu = ({item, close}) => {
  
  const [subnav, setSubnav] = useState(false)

  const showSubNav = () => setSubnav(!subnav)
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}> 
        <div onClick={!item.subNav && close}>
          {item.icon}
          <SidebarLaber>
            {item.title}
          </SidebarLaber>
        </div>

        <div>
          {
            item.subNav && subnav
            ? item.iconOpened 
            :item.subNav
            ?item.iconClosed
            :null
          }
        </div>
      </SidebarLink>
      {subnav && item.subNav.map((item , index) =>{
        return(
          <DropdownLink to={item.path} key={index} onClick={close}>
            <div>
              {item.icon}

              <SidebarLaber>
                {item.title}
              </SidebarLaber>
            </div>

          </DropdownLink>
        )
      } )

      }
    </>
  )
}

export default SubMenu

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover{
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLaber = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover{
    background-color: #632ce4;
    cursor: pointer;
  }
`;