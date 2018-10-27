import React from 'react'
import styled from 'styled-components'

const TextBox = styled.h1`
    text-align:center;
    color:#69302C;
`
const Pic = styled.img`
    max-width: 250px;
    user-select: none;
`
const Button = styled.button`
    display: -webkit-flex;
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 5px;
    color: #69302C;
    border: 2px solid #69302C;
    margin:auto;
    margin-top:1em;
    
    
`
const Box = styled.div`
    margin : 1em;
    width:10em;
    height:10em;
    display:inline-table;
    text-align:center;
    align-items:center;
    
`

const LargeBox = styled.div`
    align-content:center;
    text-align:center;
    margin-top:3em;
`

const Topic = (props) => (
    <TextBox>{props.name}</TextBox>
)

const Section1 = (props) => (
    <Box>
    <Pic src = 'img/beaverpic.png'/>
    <Button onclick="{props.name}">{props.name}</Button>
    </Box>
)

const Topic2 = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>#HelloWorld #Beaver #HelloBeaver #Hello{props.name}</p>
    </div>
)

const SelectionSection = () => (
    <LargeBox>
        <Section1 name = "#Front-End" color='red'/>
        <Section1 name = "#Design" color = 'blue'/>
        <Section1 name = "#Game" color = 'cyan'/>
        <Section1 name = "#Infra" color = 'lime'/>
    </LargeBox>
)
const Topics = () => (
    <div>
        <Topic name = "Hello Bieber"/>
        <SelectionSection />
        <Topic2 name = "Front-End"/>
        <Topic2 name = "Design"/>
        <Topic2 name = "Game"/>
        <Topic2 name = "Infra"/>
    </div>

)

export default Topics