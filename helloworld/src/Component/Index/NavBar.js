import React from 'react'
import styled from 'styled-components'



const Header = styled.div`
    background-color: #ffc905;
    -webkit-box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);
    -moz-box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);
    box-shadow: 0 12px 34px rgba(0, 0, 0, 0.12);
    padding : 1.5em 5em;
    text-align:center;

`
const Logo = styled.div`
    user-select: none;
    float:left;
    margin-left:4em;
    text-align:right;
    color:#69302C;

`
const RegisterButton = styled.div`
    float: right;
    text-align:left;
    margin-right:4em;
    color:white;
`


const NavPosition = styled.nav`
    display: inline-flex;
    padding: 0 14px;
    align-items:center;
    color:white;
    

`
const NavItem = (props) => (
    <NavPosition>{props.name}</NavPosition>
)

const Register = () => (
    <RegisterButton>รีจีสเตอร์</RegisterButton>
)

const NavBar = () => (
    <Header>
        <Logo>โลโก้.พีเอ็นจี</Logo>
        <NavItem name = 'ฟ้อนเอ็นด์'/>
        <NavItem name = 'ดรีซายน์'/>
        <NavItem name = 'เกรมส์'/>
        <NavItem name = 'อินทร์ฟร๊'/>
        <Register />
        
    </Header>
)
    
export default NavBar
