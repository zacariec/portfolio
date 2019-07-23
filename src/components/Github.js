import React from 'react'

import styled from 'styled-components'
import media from 'styled-media-query'

import ProjectScreen from '../images/dbdprojectjpg.jpg'
import GIcon from '../images/git-icon.png'
import EIcon from '../images/electron-icon.png'
import RIcon from '../images/react-icon.png'

const Github = () => (

    <Content>
        <GithubContainer>

            <GContentContainer>
                <GTitleContainer>
                    <h3>Lets get to know me</h3>
                </GTitleContainer>
                <p>
                    Currently located in Geelong, Victoria, Australia. Looking to land my first Junior Web Development job. <br></br><br></br>
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100426.7511516272!2d144.2994243004982!3d-38.13238005755164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4727b0417d681%3A0x4045675218ccda0!2sGeelong+VIC!5e0!3m2!1sen!2sau!4v1563860765024!5m2!1sen!2sau" allowfullscreen></iframe>
                <p>
                    If you don't know what Geelongs like, it's a beautiful city right in the middle of the most beautiful beaches in Victoria.
                </p>

                <GTitleContainer>
                    <h3>Projects</h3>
                </GTitleContainer>

                <img src={ProjectScreen} alt=""/>
                <h4>Mass Broadcast.</h4>
                <p>
                    Built with Electron & React, this very basic app was built for a company I worked for to make their lives easier
                    when sending mass text messages to customers.
                </p>

                <div>
                    <img src={EIcon} alt=""/>
                    <img src={RIcon} alt=""/>
                </div>
                <h4>Electron/React Boilerplate.</h4>
                <p>
                    A quick and easy boilerplate to get your journey with Electron & React started.
                    There's a few things under the hood that are required to be able to deploy/build and this boiler just includes all the good things.
                    You can get started with it <a href="">here.</a>
                </p>

                <h4>My Portfolio.</h4>
                <p>
                    I built my portfolio using GatsbyJS and ReactJS, infact it's the first site i've built. Utilising things such as Styled Components 
                    and Styled Media Querys allows me to
                    keep a nice clean code while being responsive and accessible for many different devices.
                    <br></br>
                    <br></br>
                    I decided to use GatsbyJS for my portfolio for a lot of different reasons, mostly because it plays nicely with ReactJS
                    and it's easy to rollout to <a href="www.netlify.com">Netlify.</a>
                </p>

                <h3>GitHub</h3>
                <p>
                    You can check out the code for this website and all my other projects at my <a href="https://github.com/GPudgima">Github</a>.
                </p>


            </GContentContainer>

            <GIconContainer>
                <a href="https://github.com/GPudgima">
                    <img src={GIcon} alt=""/>
                </a>
            </GIconContainer>
        </GithubContainer>
    </Content>
)


const Content = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`

const GithubContainer = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        width: 100%;
        height: 100%;
        flex-direction: row;
        padding: 1em;

            h3 {
                color:  #040f3d;
            }


    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        width: 100%;
        height: 100%;
        flex-direction: column;
        padding: 1em;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        width: 100%;
        height: 100%;
        flex-direction: column;
        padding: 1em;

    `}
`

const GTitleContainer = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        width: 100%;
        height: 50px;

            h3 {
                width: 100%;
                height: 100%;
            }
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`

const GContentContainer = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        
        iframe {
            position: relative;
            width: 100%;
            height: 400px;
            border: none;
        }
            div {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;

                img {
                position: relative;
                width: 100px;
                height: 100px;
                }
            }
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        width: 100%;
        padding: 5em;
        display: flex;
        flex-direction: column;

        iframe {
            position: relative;
            width: 50%;
            border: none;
            height: 500px;
            align-self: center;
        }

        img {
            width: 400px;
            height: 300px;
            align-self: center;
        }

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
                img {
                    width: 250px;
                    height: 250px;
                }
        }
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        width: 100%;
        padding: 5em;

        display: flex;
        flex-direction: column;

        iframe {
            position: relative;
            width: 50%;
            height: 500px;
            align-self: center;
            border: none;
        }

        img {
            width: 400px;
            height: 300px;
            align-self: center;
        }

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
                img {
                    width: 250px;
                    height: 250px;
                }
        }
    `}
`

const GIconContainer = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 1.5em;

        img {
            width: 50px;
            height: 50px;
        }
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        width: 100%;
        height: 170px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        img {
            width: 100px;
            height: 100px;
        }
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        width: 100%;
        height: 170px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        img {
            width: 150px;
            height: 150px;
        }
    `}
`



export default Github
