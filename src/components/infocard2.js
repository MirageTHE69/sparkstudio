import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Star from "../images/star.png"

function InfoCard2() {
  return (
    <div className="   text-white text-base md:text-2xl font-semibold bg-[#33005B] w-full  md:p-8 p-3    -rotate-3  ">
      <div className=" animate-animationtrain flex flex-row justify-between  ">
        <span>App Development</span>

        <span> ▢ Web Development</span>

        <span> ▢ UI UX Design </span>

        <span> ▢ SEO</span>

        <span> ▢ SSM</span>
      </div>
    </div>
  )
}

export default InfoCard2
