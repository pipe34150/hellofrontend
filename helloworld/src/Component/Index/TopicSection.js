import React from 'react'
import styled from 'styled-components'

const Topic = (props) => (
    <div>
        <h1>{props.name}</h1>
    </div>
)

const Section1 = (props) => (
    <Box>
    <Pic src = 'img/beaverpic.png'/>
    <Button onclick="{props.name}">{props.name}</Button>
    </Box>
)
const Pic = styled.img`
    max-width: 150px;
    user-select: none;
`
const Button = styled.button`
    display:flex;
    margin:auto;
    
`
const Box = styled.div`
    margin : 10px;
    display:inline-block;
    text-align:center;
    align-items:center;
    
`
const Topic2 = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>#HelloWorld #Beaver #HelloBeaver #Hello{props.name}</p>
    </div>
)


const Topics = () => (
    <div>
        <Topic name = "Hello World"/>
        <Section1 name = "Front-End" color='red'/>
        <Section1 name = "Design" color = 'blue'/>
        <Section1 name = "Game" color = 'cyan'/>
        <Section1 name = "Infra" color = 'lime'/>
        <Topic2 name = "Front-End"/>
        <Topic2 name = "Design"/>
        <Topic2 name = "Game"/>
        <Topic2 name = "Infra"/>
    </div>

)

export default Topics