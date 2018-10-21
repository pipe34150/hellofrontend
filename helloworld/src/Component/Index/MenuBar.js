import React from 'react'

const MenuBar = (props) => (
    <li>{props.name}</li>
)

const MenuBars = () => (
    <div>
        <MenuBar name = "Logo.png"/>
        <MenuBar name = "Front-End"/>
        <MenuBar name = "Design"/>
        <MenuBar name = "Game"/>
        <MenuBar name = "Infra"/>
        <MenuBar name = "Register"/>
    </div>
)

export default MenuBars