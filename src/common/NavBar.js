import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, Image } from 'react-bootstrap'


const NavBar = () => {

  // const [navBarActive, setnavBarActive] = React.useState(false)

  // const toggleNavBar = () => {
  //   return setnavBarActive(!navBarActive)
  // }

  return (
    <Navbar bg="nav-theme" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to='/profile'>
        <Image src='https://pbs.twimg.com/profile_images/3591982071/f875f1abcf63e927a81cd28d375060a5.jpeg'
          roundedCircle
          width='50'
          height='50'
          alt='Image of User'
        /> Hi, Suzy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mx-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
          <Nav.Link as={Link} to='/expenses'>Expenses</Nav.Link>
          <Nav.Link as={Link} to='/summary'>Summary</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default withRouter(NavBar)
