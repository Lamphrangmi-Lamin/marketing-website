import heroImage from "../../assets/prism.png"

function HeroSection() {
    return (
        <main
      className="bg-white min-h-screen rounded px-3 grid auto-rows-min grid-cols-4 gap-x-4 py-12 gap-y-12 content-center md:grid-cols-6 md:gap-x-8 md:gap-y-8 md:py-16 md:px-4 md:rounded-md lg:grid-cols-12 lg:p-24 lg:gap-x-8 lg:rounded-lg"
    >
      {/* <!-- Left Section Hero Message --> */}
      <section
        className="col-span-4 flex flex-col gap-8 md:gap-16 md:col-span-6 lg:col-span-5 lg:self-center"
      >
        <div className="flex flex-col gap-4 md:gap-6">
          <h2
            className="text-4xl font-semibold text-neutral-900 md:text-5xl lg:text-6xl"
          >
            Well crafted abstract images
          </h2>
          <p className="text-lg text-neutral-600 md:text-xl">
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>
        </div>

        <div
          className="font-medium grid grid-cols-2 md:grid-cols-6 gap-4 md:text-lg md:gap-8 lg:grid-cols-5"
        >
          <button
            className="text-neutral-900 bg-white py-3 rounded border border-neutral-200 shadow grow md:grow-0 md:py-4 md:px-6 md:col-span-2 lg:col-span-2 hover:bg-neutral-50 focus:outline focus:outline-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none disabled:cursor-not-allowed disabled:border-none"
          >
            Learn more
          </button>
          <button
            className="text-white bg-indigo-700 py-3 rounded shadow grow md:grow-0 md:py-4 md:px-6 md:col-span-2 lg:col-span-2 hover:bg-indigo-800 focus:outline focus:outline-indigo-200 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none disabled:cursor-not-allowed"
          >
            See pricing
          </button>
        </div>
      </section>

      {/* <!-- Right Section Hero Image --> */}
      <section className="col-span-4 md:col-span-6 lg:col-span-7">
        <div className="min-h-66 min-w-79.75 md:min-h-131.5 md:min-w-176 lg:min-h-131.5 lg:min-w-174">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
    )
}

export default HeroSection