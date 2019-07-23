import React from 'react'

import styled from 'styled-components'
import media from 'styled-media-query'

import GIcon from '../images/gatsby-icon.png'
import RIcon from '../images/react-icon.png'
import SIcon from '../images/nails-icon.png'

const BuiltWith = () => (
    <BWContainer>
    	<TitleContainer>
			<h3>Peek behind the curtain</h3>
    	</TitleContainer>
        <p>
            I made this site using:
        </p>
    	<IconContainer>

    			<ColumnContainer>
    				<a href="https://styled-components.com">
						<BWIcon src={SIcon} alt=""/>
					</a>
					<h6>Styled<br/>Components</h6>
				</ColumnContainer>

    			<ColumnContainer>
    				<a href="https://gatsbyjs.org">
						<BWIcon src={GIcon} alt=""/>
					</a>
					<h6>Gatsby</h6>
				</ColumnContainer>

    			<ColumnContainer>
    				<a href="https://reactjs.org">
						<BWIcon src={RIcon} alt=""/>
					</a>
					<h6>React</h6>
				</ColumnContainer>
		</IconContainer>
    </BWContainer>
)

const BWContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        display: block;
        padding: .5em;
        width: 100%;
        height: 100%;
        background-color: white;

        h6 {
            color: #040f3d;
            text-transform: uppercase;
        }

        p {
            position: relative;
            bottom: .5em;
            text-align: center;
        }
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1em;
        
            p {
                position: relative;
                text-align: center;
                bottom: 1em;
            }

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1em;

            p {
                position: relative;
                text-align: center;
                bottom: 1em;
            }

    `}
`

const TitleContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        color: #040f3d;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: center;
    `}
`
const IconContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        width: 100%;
        display: grid;
        padding: 1em;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        width: 100%;
        display: grid;
        padding: 1em;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    `}
`

const ColumnContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        margin: 1em;
        display: flex;
        flex-direction: column;
        text-align: center;

        button {
            background: transparent;
            border: none;
        }
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        position: relative;
        display: flex;
        margin: 1em;
        flex-direction: column;
        text-align: center;

        button {
            background: transparent;
            cursor: pointer;
            border: none;
        }
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        display: flex;
        margin: 1em;
        flex-direction: column;
        text-align: center;

        button {
            background: transparent;
            border: none;
            cursor: pointer;
        }

        :hover {
            transform: scale(1.2);
            opacity: 0.8;
        }
    `}
`

const BWIcon = styled.img `
    /* Styles for small screens */
    ${media.lessThan("medium")`
        position: relative;
        width: 60px;
        height: 60px;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
        width: 100px;
        height: 100px;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
        position: relative;
        width: 150px;
        height: 150px;

    `}
`


export default BuiltWith
