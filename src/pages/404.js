import React from "react"
import { Link } from 'gatsby'

const NotFoundPage = () => (
<div>
    <h1>404</h1>
    <h1>NOT FOUND</h1>
    <p>They're taking the hobbits to Isengard!</p>
    <p>Turn <Link to="/index">back</Link> now!</p>
</div>
)

export default NotFoundPage
