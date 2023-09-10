import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Star from "../images/star.png"
import HeroSection from "../components/heroSection"
import Navbar from "../components/navbar"
import InfoCard from "../components/infocard"

import InfoCard2 from "../components/infocard2"
import AboutUs from "../components/aboutus"
import WebServiceSection from "../components/services/webservices"
import GetInTouch from "../components/getInTouch"

const IndexPage = () => (
  <div className="min-h-min  bg-black">
    <Navbar />
    <div className="  ">
      <div
        className="bg-cover bg-black p-10  pb-20  pt-32 text-white flex flex-col justify-center space-y-10 px-10"
        style={{ backgroundImage: `url(${Star})` }}
      >
        <div className="space-y-4">
          <h1 className="w-[50%] text-7xl capitalize">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#A168FF] ">
              Charting the Future of Development and Design
            </span>
          </h1>
        </div>
        <p className="w-[18%]">
          Discover the Future of SaaS Innovation Build, Design, Scale.
        </p>

        <button className="w-[10%] mt-4 px-6 py-2 bg-gradient-to-r from-purple-400 text-black to-[#A168FF] hover:to-purple-400 font-semibold text-xl rounded-lg transition duration-300 ease-in-out">
          Book
        </button>
      </div>
      <div className=" h-full  mt-24 relative   bg-transparent ">
        <div className="absolute inset-0 flex items-center justify-center ">
          <InfoCard />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <InfoCard2 />
        </div>
      </div>

      <div>
        <AboutUs />
      </div>
      <div>
        <WebServiceSection />
      </div>

      <div>
        <GetInTouch />
      </div>
    </div>
    </div>
 
)
export const Head = () => <Seo title="Home" />

export default IndexPage
