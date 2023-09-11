import * as React from "react"

function AboutUs() {
  return (
    <div className="   text-white">
      <div className="w-full  p-10">
        <h1 className="w-full  ml-11 text-4xl capitalize bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#A168FF]">
          About us
        </h1>
        <div className="w-full p-10  font-semibold text-xl ">
          Step into our dynamic digital realm, where code speaks and pixels
          dream. With more computer hours than family dinners, we wear our
          coding prowess with pride. Armed with algorithm mastery and pixel
          finesse, we're reshaping brands, not troubleshooting. Beyond
          caffeine-fueled marathons, a spark drives us. Crafting websites and
          tools is just the beginning, we are on a mission for global business
          transformation, one brand at a time. Strap in for brand liftoff. With
          keyboards as weapons, we engineer innovation and wield change. Welcome
          to a sassy tech future, where nerds rule. Code, create, conquer – the
          nerdy way.
        </div>
      </div>

      <div className="grid grid-cols-1 bg-black md:grid-cols-3 gap-6  p-10">
        <div className=" rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
          <div className="p-10">
            <img
              className=" rounded-md"
              src="https://via.placeholder.com/352x386"
              alt="Card Image 1"
            />
            <div className="flex flex-col mt-3">
              <span className="text-white-700 text-xl font-semibold">
                -- Mirage Thakore
              </span>
              <span className="text-gray-500">- Android Developer</span>
            </div>
          </div>
        </div>

        <div className=" rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
          <div className="p-10">
            <img
              className=" rounded-md"
              src="https://via.placeholder.com/352x386"
              alt="Card Image 2"
            />
            <div className="flex flex-col mt-3">
              <span className="text-white-700 text-xl font-semibold">
                -- Another Name
              </span>
              <span className="text-gray-500">- Web Developer</span>
            </div>
          </div>
        </div>

        <div className=" rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
          <div className="p-10">
            <img
              className=" rounded-md"
              src="https://via.placeholder.com/352x386"
              alt="Card Image 3"
            />
            <div className="flex flex-col mt-3">
              <span className="text-white-700 text-xl font-semibold">
                -- Third Name
              </span>
              <span className="text-gray-500">- Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
