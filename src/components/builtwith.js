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
    	position: relative;
    	display: block;
    	padding: .5em;
    	width: 100%;
    	height: 100%;
    	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		background-color: white;

    	h6 {
    		color: #040f3d;
    		text-transform: uppercase;
    	}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
    	padding: 1em;

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
		grid-template-rows: 1fr 1fr;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
    	width: 100%;
  		display: grid;
  		padding: 1em;
  		grid-template-columns: 1fr 1fr 1fr;
  		grid-template-rows: 1fr 1fr;
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
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
    	display: flex;
    	margin: 1em;
    	flex-direction: column;
    	text-align: center;

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

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
    	width: 150px;
    	height: 1t50px;

    `}
`



const BuiltWith = () => (
    <BWContainer>
    	<TitleContainer>
			<h3>Peek behind the curtain</h3>
    	</TitleContainer>

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


    			<ColumnContainer className="grid-fix">
    				<a href="#">
					<BWIcon src={LIcon} alt=""/>
					<h6>Love</h6>
					</a>
				</ColumnContainer>

		</IconContainer>
    </BWContainer>

)

export default BuiltWith
