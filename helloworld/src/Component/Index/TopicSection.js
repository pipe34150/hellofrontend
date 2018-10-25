import React from 'react'
import styled from 'styled-components'

const Topic = (props) => (
    <div>
        <h1>{props.name}</h1>
    </div>
)

const Section1 = (props) => (
    <row>
    <Pic src = 'img/beaverpic.jpg'/>
    <button onclick="{props.name}">{props.name}</button>
    </row>
)
const Pic = styled.img`
  width: 60%;
  max-width: 150px;
  user-select: none;
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
        <Section1 name = "Front-End"/>
        <Section1 name = "Design"/>
        <Section1 name = "Game"/>
        <Section1 name = "Infra"/>
        <Topic2 name = "Front-End"/>
        <Topic2 name = "Design"/>
        <Topic2 name = "Game"/>
        <Topic2 name = "Infra"/>
    </div>

)

export default Topics