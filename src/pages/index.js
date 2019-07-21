import React from "react"

import { Link } from 'gatsby'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import styled from 'styled-components' 
import media from 'styled-media-query'
import css from '../components/global.css'

import Landing from '../components/landing'
import Github from '../components/github'
import BWith from '../components/builtwith'
import SEO from "../components/seo"


const Contact = styled.div `
	position: fixed;
	display: flex;
	width: 100%;
	justify-content: flex-end;
	padding: 1em;
	z-index: 99;

	a {
		color: #040f3d;
	}

	h6:hover {
		opacity: 0.8;
	}

    /* Styles for small screens */
    ${media.lessThan("medium")`

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    `}

`


const IndexPage = () => (
<div>
	<Contact>
		<ul>
			<li>
				<AnchorLink href="#contact"><h6>Contact</h6></AnchorLink>
			</li>
		</ul>
	</Contact>
    <Landing />
    <BWith />
    <Github />

</div>
)

export default IndexPage
