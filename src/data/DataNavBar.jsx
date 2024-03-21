import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'

export const Data = [
    {
      title     : 'Home',
      path      : '/',
      cName     : 'nav-text',
      icon      : <AiIcons.AiFillHome/>,
      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpFill/>,
      
  
    },
    {
      title     : 'Report',
      path      : '/report',
      cName     : 'nav-text',
      icon      : <AiIcons.AiFillHome/>,
      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpFill/>,
      subNav: [
        {
          title     : 'Report 1',
          path      : '/report/reports1',
          cName     : 'nav-text',
          icon      : <AiIcons.AiFillHome/>,
        },
        {
          title     : 'Report 2',
          path      : '/report/reports2',
          cName     : 'nav-text',
          icon      : <AiIcons.AiFillHome/>,
        },
        {
          title     : 'Report 3',
          path      : '/report/reports3',
          cName     : 'nav-text',
          icon      : <AiIcons.AiFillHome/>,
        }
      ]
    },
    {
      title     : 'Product',
      path      : '/product',
      cName     : 'nav-text',
      icon      : <AiIcons.AiFillHome/>,
      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpFill/>
    }
  ]