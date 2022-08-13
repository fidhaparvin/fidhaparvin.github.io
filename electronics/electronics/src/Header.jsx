import React, { useRef } from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { Input} from 'antd';
import { AudioOutlined } from '@ant-design/icons';


function Header() {
  const input = useRef()
  console.log('#ref',input);
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  function onSearch(){

    //  input.current.focus=true;
  }
  return (
    <div>
        <Navbar bg="light" expand="lg" style={{lineHeight:'2.5'}}>
  <Container>
    <Navbar.Brand style={{fontSize:'2.25rem'}}>My Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="mens">Men's</NavLink>
        <NavLink className="nav-link" to="womens">Women's</NavLink>
        <NavLink className="nav-link" to="/electronics">Electronis</NavLink>
        <NavLink className="nav-link" to="/Jewelery">Jewelery</NavLink>        
      </Nav>
    </Navbar.Collapse>
    <Search placeholder="Search for Products" ref={input} onSearch={onSearch()} style={{ width: 300}} />
  </Container>
</Navbar>
    </div>
  )
}

export default Header