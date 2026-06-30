function PricingSection() {
    return (
        <div
      className="bg-white m-4 grid grid-cols-4 auto-rows-min gap-x-4 py-12 px-4 gap-y-8 overflow-auto
      md:py-16 md:grid-cols-6 md:gap-x-8 md:gap-y-12
      min-h-screen
      max-w-360
      xl:grid-cols-12 xl:p-24"
    >
      {/* <!-- Header section --> */}
      <header className="col-span-4 pb-8
      md:col-span-6 md:pb-4
      xl:col-span-12">
        <span className="font-semibold text-indigo-700 text-center block mb-3"
          >One time purchase</span
        >
        <h1 className="font-semibold text-3xl text-neutral-900 mb-5 text-center
        md:text-5xl">
          Pay as you need
        </h1>
        <p className="text-lg text-neutral-600 text-center
        md:text-xl md:max-w-160 md:mx-auto
        xl:min-w-200">
          We offer one-time purchases with credits, for you to use as needed.
          Always active.
        </p>
      </header>

      {/* <!-- Features sections --> */}
      <section className="col-span-4
      md:col-span-6
      xl:col-span-7 xl:my-10">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-8
        md:text-4xl md:mb-16">
          Unlock creativity once, enjoy forever
        </h2>
        <ul className="text-neutral-600 text-lg space-y-5
        xl:ml-4">
          <div className="flex items-center gap-3">
            <span><i className="ri-check-fill text-indigo-500 text-2xl bg-indigo-50 rounded-full"></i></span>
            <li>128 available credits for all images</li>
          </div>
          <div className="flex items-center gap-3">
            <span><i className="ri-check-fill text-indigo-500 text-2xl bg-indigo-50 rounded-full"></i></span>
            <li>Up to 3 users</li>
          </div>
          <div className="flex items-center gap-3">
            <span><i className="ri-check-fill text-indigo-500 text-2xl bg-indigo-50 rounded-full"></i></span>
            <li>24 hour response time</li>
          </div>
          <div className="flex items-center gap-3">
            <span><i className="ri-check-fill text-indigo-500 text-2xl bg-indigo-50 rounded-full"></i></span>
            <li>Advanced analytics</li>
          </div>
        </ul>
      </section>

      {/* <!-- Price detail card --> */}
      <section className="col-span-4 border border-solid border-neutral-200 p-8 shadow-lg rounded-lg
      md:col-span-6
      xl:col-span-5">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-green-700 text-sm bg-green-50 border border-solid border-green-200 px-2.5 py-1 rounded-full">Popular</span>
            <span className="text-5xl font-semibold text-neutral-900
            md:text-6xl">$699</span>
            <span className="text-sm text-neutral-600">Prices in USD</span>
          </div>
          <p className="text-xl text-center text-neutral-900 px-8
          md:max-w-72 md:mx-auto">
            Pay once, use it forever. No strings attached.
          </p>
          <button className="bg-indigo-700 font-medium text-white py-2.5 rounded-sm
          hover:bg-indigo-800 shadow-sm focus:ring focus:ring-indigo-200
          disabled:text-neutral-400 disabled:bg-neutral-100 disabled:cursor-not-allowed">Buy now</button>
        </div>
      </section>
    </div>
    )
}

export default PricingSection