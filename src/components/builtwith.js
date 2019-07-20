import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import media from 'styled-media-query'

import Fade from 'react-reveal/Fade'

import LIcon from '../images/love-icon.png'
import GIcon from '../images/gatsby-icon.png'
import RIcon from '../images/react-icon.png'
import SIcon from '../images/nails-icon.png'

const BWContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
    	margin-top: 2em;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

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

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`
const IconContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
		display: flex;
		justify-content: space-evenly;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`

const SCContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
    	position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		text-align: center;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`
const GContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
    	position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		text-align: center;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`

const RContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
    	position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		text-align: center;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`

const LContainer = styled.div `
    /* Styles for small screens */
    ${media.lessThan("medium")`
    	position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		text-align: center;

		h6 {
			position: relative;
			top: 7px;
		}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

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

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}
`



const BuiltWith = () => (
    <BWContainer>
    	<TitleContainer>
			<h3>Peek behind the curtain</h3>
    	</TitleContainer>

    	<IconContainer>
    		<Fade left delay={500}>
    			<SCContainer>
    				<a href="https://styled-components.com">
						<BWIcon src={SIcon} alt=""/>
					</a>
					<h6>Styled<br/>Components</h6>
				</SCContainer>
			</Fade>

    		<Fade left delay={700}>
    			<GContainer>
    				<a href="https://gatsbyjs.org">
						<BWIcon src={GIcon} alt=""/>
					</a>
					<h6>Gatsby</h6>
				</GContainer>
			</Fade>

    		<Fade left delay={900}>
    			<RContainer>
    				<a href="https://reactjs.org">
						<BWIcon src={RIcon} alt=""/>
					</a>
					<h6>React</h6>
				</RContainer>
			</Fade>

    		<Fade left delay={1100}>
    			<LContainer>
					<BWIcon src={LIcon} alt=""/>
					<h6>Love</h6>
				</LContainer>
			</Fade>
		</IconContainer>
    </BWContainer>

)

export default BuiltWith
