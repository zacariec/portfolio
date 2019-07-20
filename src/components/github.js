import React from 'react'

import styled from 'styled-components'
import media from 'styled-media-query'

import Slide  from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Flash from 'react-reveal/Flash'

import GIcon from '../images/git-icon.png'


const Content = styled.div `

    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

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

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`

const GForm = styled.form`

    /* Styles for small screens */
    ${media.lessThan("medium")`
        display: flex;
        flex-direction: column;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`

const Github = () => (

    <Content>
        <GithubContainer>
            <GTitleContainer>
                <h3>Lets get to know me</h3>
            </GTitleContainer>
            <p>
                Currently located in City Victoria, Australia. Looking to land my first Junior Web Development job. <br></br><br></br>
            </p>

            <GTitleContainer>
                <h3>Github</h3>
            </GTitleContainer>

            <p>
                You can check out the code for this website and all my other projects at my <a href="https://github.com/GPudgima">Github</a>.
            </p>
            <GIconContainer>
                <a href="https://github.com/GPudgima">
                    <img src={GIcon} alt=""/>
                </a>
            </GIconContainer>
            
            <GTitleContainer>
                <h3>Get in touch</h3>
            </GTitleContainer>
            <p>
                Think I'm the man for the job?<br></br>
                Got any constructive criticism?<br></br>
                Fill out the form below, lets get a coffee☕

            </p>

            <GForm method="post" netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <label>
                    Name
                    <input type="text" name="name" id="name" placeholder="What's your name?"/>
                </label>
                
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>

                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>

                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
            </GForm>
        </GithubContainer>
    </Content>
)

export default Github
