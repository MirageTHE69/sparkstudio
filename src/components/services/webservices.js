import * as React from "react"

function WebServiceSection() {
  return (
    <div className=" bg-black  text-white">
      <div className="w-full bg-black p-10">
        <h1 className="w-full  ml-10 text-4xl capitalize bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#A168FF]">
          Services
        </h1>
      </div>

      <div>
        <span className=" p-10 ml-10 text-lg  font-medium">
          -- Web Development
        </span>
        <div class="grid w-full grid-cols-1 gap-6 p-10 md:grid-cols-2">
          <div class="rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"></div>

          <div class="rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
            <div class="p-10">
              <img
                class="h-[50%] rounded-md"
                src="https://via.placeholder.com/352x386"
                alt="Card Image 3"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className=" p-10 ml-10 text-lg  font-medium">
          -- Mobile Application Development
        </span>
        <div class="grid w-full grid-cols-1 gap-6 p-10 md:grid-cols-2">
          <div class="rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"></div>

          <div class="rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
            <div class="p-10">
              <img
                class="h-[50%] rounded-md"
                src="https://via.placeholder.com/352x386"
                alt="Card Image 3"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className=" p-10 ml-10 text-lg  font-medium">
          -- UI/UX Designing
        </span>
        <div class="grid w-full grid-cols-1 gap-6 p-10 md:grid-cols-2">
          <div class="rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl"></div>

          <div class="rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-950 backdrop-blur-2xl">
            <div class="p-10">
              <img
                class="h-[50%] rounded-md"
                src="https://via.placeholder.com/352x386"
                alt="Card Image 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebServiceSection
