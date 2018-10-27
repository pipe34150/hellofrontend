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
const RegisterButton = styled.button`
    float: right;
    text-align:left;
    margin-right:4em;
    color:white;
    font-size: 0.9em;
    border-radius: 5px;
    color: #69302C;
    border: 2px solid #69302C;
    margin:auto;
    margin-top:-0.1em;
    padding : 0.2em 0.4em;
    background-color: Transparent;
    font-family: "Kanit";
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
    <RegisterButton>รีจีสเตอร์ บัททอน</RegisterButton>
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
