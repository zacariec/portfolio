import React from 'react'

import styled from 'styled-components'
import media from 'styled-media-query'

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

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        width: 100%;
        padding: 5em;
        display: flex;
        flex-direction: column;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        width: 100%;
        padding: 5em;
        display: flex;
        flex-direction: column;
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



const Github = () => (

    <Content>
        <GithubContainer>

            <GContentContainer>
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
            </GContentContainer>

            <GIconContainer>
                <a href="https://github.com/GPudgima">
                    <img src={GIcon} alt=""/>
                </a>
            </GIconContainer>
        </GithubContainer>
    </Content>
)

export default Github
