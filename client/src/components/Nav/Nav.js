import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  /*position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;*/
  background: white;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid #DFDCE3;
  a {
    font-size: 18px;
    color: black;
    font-family: 'Assistant', sans-serif;
    text-decoration: none;
  }

  a:hover {
    color: #DFDCE3;
    text-decoration: none;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: flex-start;
  a {
    font-size: 16px;
    color: #8fbc8b;
    font-family: 'Assistant', sans-serif;
    padding-left: 30px;
    text-decoration: none;
    margin-top: 10px;
  }
`;

const Time = styled.div`
  font-size: 18px;
  color: #CF667E;
  font-family: 'Futura';
`;

const NavLogo = styled.img`
  height: 40px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

const Nav = () => (
  <NavBar>
    <Link href="/queue">
      <NavLogo src={require('../../assets/SVG/Asset 1.svg')} alt="logo" />
    </Link>
    <Link href="/queuehistory">History</Link>
    <Link href="/newaccount">Account</Link>
    <Link href="/login">Logout</Link>
    <Time>
      6:52 PM
    </Time>
  </NavBar>
);

export default Nav;
