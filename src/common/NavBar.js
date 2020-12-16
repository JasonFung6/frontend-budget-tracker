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
      <Link to='/expenses'>Expenses</Link>
      <Link to='/summary'>Summary</Link>
    </nav>

  )
}

export default withRouter(NavBar)
