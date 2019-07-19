import React from 'react'

import styled from 'styled-components' 

import Slide  from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash'

import GIcon from '../images/git-icon.png'


const Content = styled.div `
    position: relative;
    display: block;
    width: 100%;
    height: 1325px;
    background-image: linear-gradient(#e8e6e7, #ffffff);
    

    .content-container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: row;
        align-items: center;
        align-content: center;
        align-self: center;
        justify-content: center;
    }
`

const Github = () => (

    <Content>
        <div id="content" class="content-container">
            <h1>How'd we get here?</h1>
            <img src={GIcon} alt="" />
        </div>
    </Content>
)

export default Github