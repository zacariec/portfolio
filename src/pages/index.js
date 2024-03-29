import React from "react"

import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Link } from 'gatsby'

import styled from 'styled-components' 
import media from 'styled-media-query'
import '../components/Global.css'

import Landing from '../components/Landing'
import Github from '../components/Github'
import BWith from '../components/BuiltWith'
import ContactForm from '../components/ContactForm'

import Resume from './resume'

const IndexPage = () => (
<div>
	<Contact>
		<ul>
			<li>
				<Link to="/resume"><h6>Resume</h6></Link>
			</li>
			<li>
				<AnchorLink href="#contact"><h6>Contact</h6></AnchorLink>
			</li>
		</ul>
	</Contact>
    <Landing />

    <BWith />

    <Github />
    <ContactForm />

</div>
)

const Contact = styled.div `
	position: fixed;
	display: flex;
	width: 100%;
	justify-content: flex-end;
	padding: 1em;
	z-index: 99;

	ul {
		display: flex;
		flex-direction: row;
	}

	li {
		padding-left: 1em;
	}

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



export default IndexPage
