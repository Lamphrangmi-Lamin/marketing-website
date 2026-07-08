import Button from "../../design-system/Button/Button"

export default function HeroFeatureBullets({imageUrl}) {
    const featureList = [
    "Minimum 5K image resolution",
    "Various format variants available",
    "Retina display support"
  ]

    return (
        <>
        <div
        className="bg-white absolute inset-4 py-15.5 px-4 grid grid-cols-4 gap-x-4 gap-y-12 auto-rows-min md:grid-cols-6 md:gap-y-8 md:py[72px] lg:grid-cols-12 lg:gap-x-8 lg:p-24 overflow-auto"
        >
        {/* <!-- Left section --> */}
        <section
        className="col-span-4 flex flex-col gap-8 md:col-span-6 md:gap-16 lg:col-span-5 self-center"
        >
        <h1
          className="text-4xl text-neutral-900 font-semibold md:text-5xl"
        >
          Premium abstract images
        </h1>
        {/* <!-- Feature bullets --> */}
        <ul
          role="list"
          aria-label="Features list"
          className="text-lg text-neutral-600 flex flex-col gap-5"
        >
            {featureList.map((item, index) => (
                <li key={index} className="">
                    <i className="ri-check-fill text-indigo-500 bg-indigo-50 rounded-full mr-3"></i>
                    {item}
                </li>
            ))}
        </ul>
        {/* <!-- Action buttons --> */}
        <div className="flex gap-4 md:max-w-md">
          <button
            className="bg-indigo-700 text-white text-base font-medium py-3 md:py-4 grow rounded shadow-sm hover:bg-indigo-800 focus:ring-4 focus:ring-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-400"
          >
            See pricing
          </button>
          <button
            className="bg-white text-neutral-900 text-base font-medium py-3 md:py-4 grow rounded border-[0.5px] border-neutral-200 shadow-sm disabled:bg-neutral-100 disabled:text-neutral-400 hover:text-neutral-950 hover:bg-neutral-50 focus:ring-4 focus:ring-neutral-200"
          >
            Learn more
          </button>
        </div>
      </section>
      {/* <!-- Right section --> */}
      <section className="col-span-4 md:col-span-6 lg:col-span-7">
        <div className="">
          <img
            src={imageUrl}
            alt="hero image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>
        </div>
        </>
    )
}