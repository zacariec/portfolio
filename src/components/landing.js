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
        position: relative;
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
        flex-wrap: wrap;
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
        position: relative;
        display: flex;
        overflow-x: hidden;
        justify-content: flex-start;
        align-self: center;
        align-items: center;
        height: 400px;
        width: 50%;
        background-color: #4bffa5;
        z-index: 1;

        h1 {
            font-size: 12em;
            color: #040f3d;
        }

        h2 {
            display: none;
        }

    `}
`;

const WhiteHalf = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        display: none;

        h2 {
            display: none;
        }
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        display: flex;
        position: relative;
        justify-content: flex-end;
        align-items: center;
        height: 800px;
        padding: 1em;
        width: 50%;
        background-color: white;

            h2 {
                postition: absolute;
                margin-left: 1em;
                font-size: 6em;
                color: #4bffa5;
            }

    `}
`;

const ContentContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        height: 100%;
        width: 100%;
        padding: 1em;
        background-color: white;

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
        postition: relative;
        display: flex;
        flex-direction: column;
        padding: 5em;

        h3 {
            position: relative;
            color: #040f3d;
        }

        p {
            position: relative;
        }


    `}


`

const Landing = () => (

<LandingContainer>

    <WhiteHalf>
        <Fade>
            <h2>I'm</h2>
        </Fade>
    </WhiteHalf>

        <Half>
            <Fade left delay={400}>
                <h2>I'm</h2>
            </Fade>

            <Fade right delay={600}>
                <h1>Zac.</h1>
            </Fade>
        </Half>

    <ContentContainer>
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
    </ContentContainer>

</LandingContainer>

)

export default Landing;
