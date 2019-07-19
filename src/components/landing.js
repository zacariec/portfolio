import React from "react"

import styled from 'styled-components' 
import media from 'styled-media-query'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import Slide  from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash'

import { Link } from "gatsby"


import DIcon from '../images/down-icon.png'


//color palette.
//#dd7035 #bd937d #dec8ba #e8e6e7 #ffffff

const LandingContainer = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        height: 100%;
        width: 100%;

        }

        .half {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 500px;
            width: 100%;
            background-color: #4bffa5;

            h1 {
                position: relative;
                color: #040f3d;
                font-size: 10em;
                padding-left: 10px;
            }

            h2 {
                top: .6em;
                position: relative;
                color: #040f3d;
                font-size: 7em;
                padding-left: 10px;

            }
        }

        .half-half {
            display: flex;
            flex-direction: column;
            height: 500px;
            width: 100%;
            background-color: #ffffff;
        }
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        height: 100%;
        width: 70%;
        background-color: green;
    `}
    
    /* Styles for large screens */
    ${media.greaterThan("large")`
        height: 100%;
        width: 100%;
        background-color: green;
    `}

`;

const Button = styled.button `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        display: flex;
        height: 40px;
        width: 80px;
        border: 3px solid #040f3d;
        bottom: 20px;
        left: 140px;
        color: #040f3d;
        background-color: transparent;

        h5 {
            position: relative;
            width: 100%;
            height: 100%;
            top: .3em;
            margin: 0 auto;
            text-align: center;
        }

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        display: block;
        background-color: transparent;
        border: 3px solid #040f3d;

            h5 {
                display: block;
                position: relative;
                color: #040f3d;
                width: 90%;
                height: 90%;
                margin: 0 auto;
                text-align: center;
            }
        
        :hover {
            opacity: 0.5;
        }
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        display: block;
        background-color: transparent;
        border: 3px solid #040f3d;
        height: 50px;
        width: 100px;

            h5 {
                display: block;
                position: relative;
                color: #040f3d;
                width: 90%;
                height: 90%;
                margin: 0 auto;
                text-align: center;
            }
    
        :hover {
            opacity: 0.5;
        }
    `}



`;

const Landing = () => (

<LandingContainer>

    <Slide left>
        <div className="half">
            <Fade left delay={400}>
                <h2>I'm</h2>
            </Fade>

            <Fade right delay={600}>
                <h1>Zac.</h1>
            </Fade>
        </div>
    </Slide>

    <Fade delay={1300}>
        <Button><h5>go</h5></Button>
    </Fade>

    <div className="half-half">

    </div>

</LandingContainer>

)

export default Landing;