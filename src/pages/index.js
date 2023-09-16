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
import Footer from "../components/footer"
import FooterBackgroundImage from "../images/footerBackground.png"
import TestimonialSection from "../components/testimonial"

const IndexPage = () => (
  <div
    className="min-h-min  bg-black my-custom-background custom-heading border-background z-50"
    style={{
      backgroundImage: `url(${Star})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
  >
    <Navbar />
    <div className="  ">
      <div className="bg-cover   p-4 md:p-10 lg:p-20  pt-28 lg:pt-32 text-white flex flex-col justify-center space-y-4 md:space-y-10 px-4 md:px-10 lg:px-20">
        <div className="space-y-2 md:space-y-4">
          <h1 className="w-full md:w-[50%] text-4xl md:text-7xl capitalize">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#A168FF] ">
              Charting the Future of Development and Design
            </span>
          </h1>
        </div>
        <p className="w-full md:w-[18%] text-sm md:text-base">
          Discover the Future of SaaS Innovation Build, Design, Scale.
        </p>

        <button className="w-full md:w-[10%] mt-2 md:mt-4 px-4 md:px-6 py-2 bg-gradient-to-r from-purple-400 text-black to-[#A168FF] hover:to-purple-400 font-semibold text-base md:text-xl rounded-lg transition duration-300 ease-in-out">
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

      <div className="  mt-64 relative">
        <AboutUs />
      </div>
      <div>
        <WebServiceSection />
      </div>

      <div>
        <GetInTouch />
      </div>
      <div className=" w-screen h-auto bg-black flex justify-center text-2xl pt-10 pb-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#A168FF]">
          Testimonial
        </span>
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div
        className=" bg-black getInTouchContainer"
        style={{
          backgroundImage: `url(${FooterBackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Footer />
      </div>
    </div>
  </div>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
