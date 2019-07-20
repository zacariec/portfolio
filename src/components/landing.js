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
        height: 1100px;
        width: 100%;
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

const Half = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: flex-end;
        height: 411px;
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
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`;

const Button = styled.button `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        display: none;

        h5 {
            display: none;
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

const HalfHalf = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        height: 700px;
        width: 100%;
        padding: 1em;

        h3 {
            position: relative;
            color: #040f3d;
        }

        p {
            position: relative;
        }

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}


`

const Landing = () => (

<LandingContainer>

    <Slide left>
        <Half>
            <Fade left delay={400}>
                <h2>I'm</h2>
            </Fade>

            <Fade right delay={600}>
                <h1>Zac.</h1>
            </Fade>
        </Half>
    </Slide>

    <Fade delay={1300}>
        <Button>
            <h5>go</h5>
        </Button>
    </Fade>

    <HalfHalf>
        <Fade delay={3000}>
            <h3>I'm aspiring to be a Full-Stack Web Developer.</h3>
        </Fade>
        <Fade delay={3800}>
            <p>
                I started my Web Development journey towards the end of 2018 and have continued to love it ever since.
                Starting off with basic HTML and CSS, than moving to JavaScript, jQuery and a plethora of different frameworks.
            </p>
        </Fade>

        <Fade delay={5000}>
        <h3>Keep it simple and keep it responsive.</h3>
        </Fade>
        <Fade delay={6800}>
            <p>
                I decided to build my portfolio using <a href="https://gatsbyjs.org">GatsbyJS</a>.<br></br>
                Allowing me to implement and leverage the powers of <a href="https://reactjs.org">ReactJS</a> and other great packages. <br></br><br></br>
                All while maintaning a fast, responsive and simple layout.
            </p>
        </Fade>

    </HalfHalf>

</LandingContainer>

)

export default Landing;
