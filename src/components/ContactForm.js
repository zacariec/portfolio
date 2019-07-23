import React from 'react'

import styled from 'styled-components'
import media from 'styled-media-query'

const Form = () => (


		<Container>
			<div>
				<h3>Get in touch.</h3>
            </div>

            	<GForm id="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
                	<input type="hidden" name="bot-field" />
                
                    	<NameLabel>
                        	Name
                        	<input type="text" name="name" id="name" placeholder="What's your name?"/>
                    	</NameLabel>

                	    <EmailLabel>
                    	    Email
                        	<input type="email" name="email" id="email" placeholder="Enter your email address." />
                    	</EmailLabel>

                    	<MessageArea>
                        	Message
                        	<textarea name="message" id="message" rows="5" placeholder="Let's chat..."/>
                    	</MessageArea>


                	<Button type="submit"><h6>Send</h6></Button>
            	</GForm>
		</Container>
)
const Container = styled.div`
	${media.lessThan("medium")`
		position: relative;
		margin-top: 2em;

		div {
			margin: 1em;
		}
		
	`}

	${media.between("medium", "large")`
		position: relative;
  		display: flex;
  		flex-direction: column;
  		width: 100%;
  		height: 100%;
  		padding: 5em;
	`}

	${media.greaterThan("large")`
		position: relative;
  		display: flex;
  		flex-direction: column;
  		width: 100%;
  		height: 100%;
  		padding: 5em;

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
    	position: relative;
  		display: grid;
  		width: 100%;
  		grid-template-columns: 1fr 1fr;
  		grid-template-rows: 1fr 1fr 1fr;
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	position: relative;
  		display: grid;
  		width: 100%;
  		grid-template-columns: 1fr 1fr;
  		grid-template-rows: 1fr 1fr 1fr;
    `}
`

const NameLabel = styled.label`

    /* Styles for small screens */
    ${media.lessThan("medium")`
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: 1em;
        margin-bottom: 1em;

        	input {
        		border: none;
        		border-bottom: solid 2px;
        	}

        	input:focus {
        		border-bottom: solid 2px #4bffa5;
        	}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    	display: flex;
    	flex-direction: column;
    	width: 60%;
    	margin: 5em 2em 0 2em;
		grid-row: 1 / 1;
		grid-column: 1 / 2;

        	input {
        		border: none;
        		border-bottom: solid 2px;
        	}

        	input:hover {
        		border-bottom: solid 2px #4bffa5;
        	}

        	input:focus {
        		border-bottom: solid 2px #4bffa5;
        	}
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	display: flex;
    	flex-direction: column;
    	width: 60%;
    	margin: 5em 2em 0 2em;
		grid-row: 1 / 1;
		grid-column: 1 / 2;

        	input {
        		border: none;
        		border-bottom: solid 2px;
        	}

        	input:hover {
        		border-bottom: solid 2px #4bffa5;
        	}

        	input:focus {
        		border-bottom: solid 2px #4bffa5;
        	}
    `}
`

const EmailLabel = styled.label`

    /* Styles for small screens */
    ${media.lessThan("medium")`
        display: flex;
        flex-direction: column;
        width: 65%;
        margin-left: 1em;
        margin-bottom: 1em;

        	input {
        		border: none;
        		border-bottom: solid 2px;
        	}

        	input:focus {
        		border-bottom: solid 2px #4bffa5;
        	}

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
    	display: flex;
    	flex-direction: column;
    	width: 60%;
    	margin: 5em 2em 0 2em;
        grid-row: 1 / 1;
        grid-column: 2 / 3;

        	input {
        		border: none;
        		border-bottom: solid 2px;
        	}

        	input:hover {
        		border-bottom: solid 2px #4bffa5;
        	}

        	}

        	input:focus {
        		border-bottom: solid 2px #4bffa5;
        	}
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
    	display: flex;
    	flex-direction: column;
    	width: 60%;
    	margin: 5em 2em 0 2em;
        grid-row: 1 / 1;
        grid-column: 2 / 3;

        	input {
        		border: none;
        		border-bottom: solid 2px;
        	}

        	input:hover {
        		border-bottom: solid 2px #4bffa5;
        	}

        	}

        	input:focus {
        		border-bottom: solid 2px #4bffa5;
        	}
    `}
`

const MessageArea = styled.label`

    /* Styles for small screens */
    ${media.lessThan("medium")`
        display: flex;
        flex-direction: column;
        width: 85%;
        margin-left: 1em;

        	textarea {
        		height: 100px;
				border: none;
				border-bottom: solid 2px;
				resize: none;
			}

			textarea:focus {
				border-bottom: solid 2px #4bffa5;
			}

    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
		display: flex;
		flex-direction: column;
		width: 85%;
		margin: .5em 2em 3em 2em;
		grid-row: 2 / 3;
		grid-column: 1 / 3;

			textarea {
				border: none;
				border-bottom: solid 2px;
				resize: none;
			}

        	textarea:hover {
        		border-bottom: solid 2px #4bffa5;
        	}

			textarea:focus {
				border-bottom: solid 2px #4bffa5;
			}
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
		display: flex;
		flex-direction: column;
		width: 85%;
		margin: .5em 2em 3em 2em;
		grid-row: 2 / 3;
		grid-column: 1 / 3;

			textarea {
				border: none;
				border-bottom: solid 2px;
				resize: none;
			}

        	textarea:hover {
        		border-bottom: solid 2px #4bffa5;
        	}

			textarea:focus {
				border-bottom: solid 2px #4bffa5;
			}
    `}
`

const Button = styled.button`

    /* Styles for small screens */
    ${media.lessThan("medium")`
    	display: flex
    	width: 100px;
    	height: 32px;
    	border: 2px;
    	margin-top: 1em;
    	margin-left: 1em;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		background-color: #4bffa5;
		border-radius: 16px;

		h6 {
			position: relative;
			top: 5px;
			align-self: center;
		}
    `}

    /* Styles for medium screens */
    ${media.between("medium", "large")`
		display: flex;
		width: 100px;
		height: 32px;
		border: 2px;
		margin: 0 2em 3em 2em;
		background-color: #4bffa5;
		border-radius: 16px;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		grid-row: 3 / 4;
		grid-column: 1 / 2;

		h6 {
			position: relative;
			top: 5px;
			align-self: center;
		}
    `}

    /* Styles for large screens */
    ${media.greaterThan("large")`
		display: flex;
		width: 100px;
		height: 32px;
		border: 2px;
		margin: 0 2em 3em 2em;
		background-color: #4bffa5;
		border-radius: 16px;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		grid-row: 3 / 4;
		grid-column: 1 / 2;

		h6 {
			position: relative;
			top: 5px;
			align-self: center;
		}

		:hover {
			transform: scale(1.1);
			cursor: pointer;
		}
    `}

`


export default Form
