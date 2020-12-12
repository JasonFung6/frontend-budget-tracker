import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = () => {

  // const [navBarActive, setnavBarActive] = React.useState(false)

  // const toggleNavBar = () => {
  //   return setnavBarActive(!navBarActive)
  // }

  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/spend'>Spend</Link>
      <Link to='/expenditure'>Expenditure</Link>
    </nav>

  )
}

export default withRouter(NavBar)
