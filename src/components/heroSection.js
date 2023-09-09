import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Star from "../images/star.png"

const HeroSection = () => (
  <div className="relative">
    
    <img alt="star" src={Star} className="block mx-auto" />
    
  </div>
)

export default HeroSection
