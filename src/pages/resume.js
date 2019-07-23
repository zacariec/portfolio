import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import media from 'styled-media-query'

import ProfileImg from '../images/profileimg.jpg'

const Nav = styled.div`
	position: fixed;
	display: flex;
	width: 100%;
	justify-content: flex-end;
	padding: 1em;
	z-index: 99;

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

const FlexContainer = styled.div`
    /* Styles for small screens */
    ${media.lessThan("medium")`
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		padding: 2em;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		padding: 2em;
    `}
`

const FlexColumnLeft = styled.div`

    /* Styles for small screens */
    ${media.lessThan("medium")`
    	display: flex;
    	width: 100%;
    	height: 100%;
    	padding: 1em;
    	flex-direction: column;

    	h1 {
    		text-align: center;
    	}

    	h3 {
    		text-align: center;
    	}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    	position: relative;
    	display: flex;
    	flex-direction: column;
    	border-right: solid 3px;
    	padding: 1em;
    	height: 2500px;
    	width: 30%;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
    	display: flex;
    	flex-direction: column;
    	border-right: solid 3px;
    	padding: 1em;
    	height: 2500px;
    	width: 30%;

    `}
`

const FlexColumnRight = styled.div`

    /* Styles for small screens */
    ${media.lessThan("medium")`
    	display: none;

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    	position: relative;
		display: flex;
		flex-direction: column;
		padding: 1em;
		height: 100%;
		width: 100%;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
		display: flex;
		flex-direction: column;
		padding: 1em;
		height: 100%;
		width: 100%;
    `}
`

const DisplayImg = styled.img`
    /* Styles for small screens */
    ${media.lessThan("medium")`
    	order: 0;
    	positon: relative;
    	width: 100px;
    	height: 100px;
    	align-self: center;
    	border-radius: 50%;

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    	position: relative;
		width: 200px;
		height: 200px;
		border: 1px solid;
		border-radius: 50%;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
		width: 200px;
		height: 200px;
		border: 1px solid;
		border-radius: 50%;
    `}
`

const AboutMe = styled.p`
    /* Styles for small screens */
    ${media.lessThan("medium")`
    	padding-top: 3em;
    	padding-bottom: 3em;
    	border-top: solid 3px;
    	border-bottom: solid 3px;
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    	border-top: solid 3px;
		border-bottom: solid 3px;
		padding: 3em 0 3em 0;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	border-top: solid 3px;
		border-bottom: solid 3px;
		padding: 3em 0 3em 0;
    `}
`

const ContactMe = styled.article`
    /* Styles for small screens */
    ${media.lessThan("medium")`
		position: relative;
		display: flex;
		text-align: center;
		z-index: 99;
		flex-direction: row;
		justify-content: center;
		width: 100%;

		h3 {
			display: none;
		}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    		h3 {
    			padding-bottom: 1em;
				border-bottom: 1px solid;		
    		}		
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    		
    		h3 {
    			padding-bottom: 1em;
				border-bottom: 1px solid;		
    		}		
    `}	
`

const MobDiv = styled.div`
    /* Styles for small screens */
    ${media.lessThan("medium")`
    	padding: 1em;

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
		display: none;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
		display: none;
    `}	
`

const Education = styled.article`
    /* Styles for small screens */
    ${media.lessThan("medium")`
		order: 5;
			
			h4 {
				position: relative;
				top: .5em;
				padding-bottom: .5em;
				border-bottom: 1px solid
			}

			p {
				position: relative;
				bottom: .5em;
			}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    		h3 {
    			padding-bottom: 1em;
				border-bottom: 1px solid;		
    		}
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    		h3 {
    			padding-bottom: 1em;
				border-bottom: 1px solid;		
    		}
    `}	
`

const References = styled.article`
    /* Styles for small screens */
    ${media.lessThan("medium")`
		order: 6;
			
			h4 {
				padding-bottom: .5em;
				border-bottom: 1px solid;
			}
			p {
				position: relative;
				bottom: 1em;
			}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`

    		h3 {
    			padding-bottom: 1em;
				border-bottom: 1px solid;		
    		}

    		h4 {

    		}

    		p {
    			position: relative;
    			bottom: 1em;
    		}
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`

    		h3 {
    			padding-bottom: 1em;
				border-bottom: 1px solid;		
    		}

    		h4 {

    		}

    		p {
    			position: relative;
    			bottom: 1em;
    		}
    `}	
`

const WorkExperience = styled.article`
    /* Styles for small screens */
    ${media.lessThan("medium")`
		position: relative;

		h4 {

		}

		h5 {
			position: relative;
			bottom: 1.5em;
			padding-bottom: .5em;
			border-bottom: solid 1px;
		}

		p {
			position: relative;
			bottom: 1em;
		}

		ul {
			position: relative;
			list-style: circle inside;
			right: 1em;
		}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    	position: relative;
		padding-left: 2em;
		width: 80%;

			h4 {
				position: relative;
				top: 1em;
			}

			h5 {
				position: relative;
				bottom: .5em;
				padding-bottom: .5em;
				border-bottom: 1px solid;
			}

			p {
				position: relative;
				font-style: italic;
				bottom .5em;
			}

			ul {
				list-style: circle inside;
			}

			li {

			}
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
		padding-left: 2em;
		width: 80%;

			h4 {
				position: relative;
				top: 1em;
			}

			h5 {
				position: relative;
				bottom: .5em;
				padding-bottom: .5em;
				border-bottom: 1px solid;
			}

			p {
				position: relative;
				font-style: italic;
				bottom .5em;
			}

			ul {
				list-style: circle inside;
			}

			li {

			}
    `}	
`

const Skills = styled.div`
    /* Styles for small screens */
    ${media.lessThan("medium")`
		position: relative;

			ul {
				list-style: circle inside;
			}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
		position: relative;
		padding-left: 2em;
		list-style: circle inside;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
		position: relative;
		padding-left: 2em;
		list-style: circle inside;
    `}
`

const Resume = () => (
<div>
	<Nav>
		<Link to="/"><h6>Home</h6></Link>
	</Nav>
	<FlexContainer>
		<FlexColumnLeft>
			<DisplayImg src={ProfileImg} alt=""/>
			<h1>Zacarie Carr</h1>
			<h3>Aspiring Web Developer</h3>
			<AboutMe>
				I describe myself as someone who 
				strives to be the best of my abilities.
				I keep going untill all expectations are met.
				<br></br>
				<br></br>
				A minimalist, less is more. At the same
				time I understand more can be less.
				I believe we all make our own path,
				and that anyone can do anything they
				put their mind to.
			</AboutMe>

			<ContactMe>
				<h3>Contact</h3>
				<p>
					0434113160<br></br>
					zacariealancarr@gmail.com
				</p>
			</ContactMe>

			<MobDiv>
			<h1>Work Experience</h1>
			<WorkExperience>
				<h4>Owner</h4>
				<h5>Dog House Clothing / 2017 - 2019</h5>
				<p>
					This is my own clothing line. I kickstarted it back in 2017 to show everyone that said I couldn't that I very well could.
				</p>
				<ul>
					<li>Setting up ABN & ABR.</li>
					<li>Designing and creating a website using WooCommerce (back-end & front-end).</li>
					<li>Making designs for different garments.</li>
					<li>Creating rapport with different key manufactures.</li>
					<li>Making sure the consumer was happy with their product.</li>
					<li>Managing social media ads for the brand.</li>
					<li>Planning out key marketing strategies.</li>
				</ul>
			</WorkExperience>

			<WorkExperience>
				<h4>Sales Assistant</h4>
				<h5>Snooze / 2017 - 2019</h5>
				<p>
					Working as a Sales Assistant between stores for a franchised bedding store.<br></br>
					Stores are situated at Geelong & Waurn Ponds.
				</p>
				<ul>
					<li>Opening and closing of the store.</li>
					<li>Driving sales.</li>
					<li>Meeting high performance KPI's on average $45k p/m</li>
					<li>Handling and banking large amounts of money.</li>
					<li>Organising deliveries and managing the delivery schedule.</li>
					<li>Handling complaints in person and over the phone.</li>
					<li>Dealing with customer service requests and generating reports.</li>
					<li>Self management up until the start of 2019 (no manager). </li>
					<li>Keeping the store and all items in a tidy and respectful manner.</li>
					<li>Using Pronto XI as a Point of Sale.</li>
				</ul>
			</WorkExperience>

			<WorkExperience>
				<h4>Sales Person</h4>
				<h5>Frontier Group Direct / 2017 - 2017</h5>
				<p>
					A non-for-profit group, that raise money for charities via door to door and business to business sales.
				</p>
				<ul>
					<li>Objection Handling</li>
					<li>Meeting KPI's</li>
					<li>Pureley commision based.</li>
					<li>Organising key strategies for selling.</li>
					<li>Self management and group management.</li>
				</ul>
			</WorkExperience>


			<Skills>
				<h1>Personal Skills</h1>
					<ul>
						<li>Excellent interpersonal skills.</li>
						<li>Headstrong, responsible and trusting.</li>
						<li>Excellent telephone etiquette.</li>
						<li>Can do attitude.</li>
						<li>Ability to think outside the box.</li>
						<li>Able to take critique and use it as constructive criticism.</li>
						<li>Great multitasker.</li>
						<li>Ability to use Microsoft Office Suite.</li>
						<li>Ability to use Adobe CC Suite.</li>
						<li>92 - 108 Words per minute typing.</li>
					</ul>
			</Skills>
			</MobDiv>


			<Education>
				<h3>Education</h3>
				<h4>06/16 - 12/16</h4>
				<p>
					Cert &#8544;&#8544;&#8544; - Information Technology
				</p>
				<h4>01/12 - 10/13</h4>
				<p>
					Victorian Certificate of Education.
				</p>
			</Education>

			<References>
				<h3>References</h3>
				<h4>Manager - Snooze</h4>
				<p>
					Manu Theron<br></br>
					0421 491 171
				</p>

			</References>
		</FlexColumnLeft>

		<FlexColumnRight>
			<h1>Work Experience</h1>
			<WorkExperience>
				<h4>Owner</h4>
				<h5>Dog House Clothing / 2017 - 2019</h5>
				<p>
					This is my own clothing line. I kickstarted it back in 2017 to show everyone that said I couldn't that I very well could.
				</p>
				<ul>
					<li>Setting up ABN & ABR.</li>
					<li>Designing and creating a website using WooCommerce (back-end & front-end).</li>
					<li>Making designs for different garments.</li>
					<li>Creating rapport with different key manufactures.</li>
					<li>Making sure the consumer was happy with their product.</li>
					<li>Managing social media ads for the brand.</li>
					<li>Planning out key marketing strategies.</li>
				</ul>
			</WorkExperience>

			<WorkExperience>
				<h4>Sales Assistant</h4>
				<h5>Snooze / 2017 - 2019</h5>
				<p>
					Working as a Sales Assistant between stores for a franchised bedding store.<br></br>
					Stores are situated at Geelong & Waurn Ponds.
				</p>
				<ul>
					<li>Opening and closing of the store.</li>
					<li>Driving sales.</li>
					<li>Meeting high performance KPI's on average $45k p/m</li>
					<li>Handling and banking large amounts of money.</li>
					<li>Organising deliveries and managing the delivery schedule.</li>
					<li>Handling complaints in person and over the phone.</li>
					<li>Dealing with customer service requests and generating reports.</li>
					<li>Self management up until the start of 2019 (no manager). </li>
					<li>Keeping the store and all items in a tidy and respectful manner.</li>
					<li>Using Pronto XI as a Point of Sale.</li>
				</ul>
			</WorkExperience>

			<WorkExperience>
				<h4>Sales Person</h4>
				<h5>Frontier Group Direct / 2017 - 2017</h5>
				<p>
					A non-for-profit group, that raise money for charities via door to door and business to business sales.
				</p>
				<ul>
					<li>Objection Handling</li>
					<li>Meeting KPI's</li>
					<li>Pureley commision based.</li>
					<li>Organising key strategies for selling.</li>
					<li>Self management and group management.</li>
				</ul>
			</WorkExperience>


			<Skills>
				<h1>Personal Skills</h1>
					<ul>
						<li>Excellent interpersonal skills.</li>
						<li>Headstrong, responsible and trusting.</li>
						<li>Excellent telephone etiquette.</li>
						<li>Can do attitude.</li>
						<li>Ability to think outside the box.</li>
						<li>Able to take critique and use it as constructive criticism.</li>
						<li>Great multitasker.</li>
						<li>Ability to use Microsoft Office Suite.</li>
						<li>Ability to use Adobe CC Suite.</li>
						<li>92 - 108 Words per minute typing.</li>
					</ul>
			</Skills>


		</FlexColumnRight>
	</FlexContainer>
</div>
	)

export default Resume
