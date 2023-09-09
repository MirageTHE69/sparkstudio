import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Star from "../images/star.png"

function GetInTouch() {
  return (
    <div className=" w-full">
      <div class="w-full bg-black p-10 text-white">
        <span class="text-3xl"> Get In touch </span>
        <div class="flex gap-6">
          <div class="mt-5 w-[50%]">
            <span>
              {" "}
              -- Get in Touch Your Connection to Our Creative Universe{" "}
            </span>
            <p class="mt-8">
              Step into our digital universe where connections thrive and
              visions come alive. We're not just code and pixels; we're creators
              and collaborators. Whether it's ideas, partnerships, or a friendly
              hello, we are here, ears and keyboards at the ready.
            </p>
          </div>
          <div class="w-[50%] space-y-4">
            <input
              class=" w-full h-10 p-3 rounded-xl border border-neutral-800 bg-gradient-to-b  from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder="-- Enter your name "
            ></input>

            <input
              class="w-full h-10 rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder=" -- Enter your email"
            ></input>
            <input
              class=" w-full h-10 rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder=" -- Enter your phone number"
            ></input>

            <input
              class="w-full h-16 rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"
              placeholder=" -- Enter your message"
            ></input>

            <button class=" w-full h-14 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-600 rounded-2xl backdrop-blur-2xl">
              {" "}
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
