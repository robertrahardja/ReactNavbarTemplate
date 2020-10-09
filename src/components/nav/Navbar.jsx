import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); */

  .logo {
    padding: 15px 0;
  }

`

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>Nav Bar</div>
      <Burger/>
    </Nav>
  )
}

export default Navbar
