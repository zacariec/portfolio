import React from "react"

import { Link } from 'gatsby'

import css from '../components/global.css'

import Landing from '../components/landing'
import Github from '../components/github'
import BWith from '../components/builtwith'
import SEO from "../components/seo"



const IndexPage = () => (
<div>
    <Landing />
    <BWith />
    <Github />

</div>
)

export default IndexPage
