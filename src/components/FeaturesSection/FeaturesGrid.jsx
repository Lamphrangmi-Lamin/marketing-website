import { features } from "./featuresData"

export default function FeaturesGrid() {
    return (
        <main className="bg-white m-4 min-h-screen rounded py-12 px-3 grid grid-cols-4 auto-rows-min gap-y-12 gap-x-4
    md:grid-cols-6 md:gap-x-8 md:rounded-md md:px-4 md:py-16 md:gap-y-16
    lg:grid-cols-12 lg:p-24">
      <header className="flex flex-col gap-5 text-center col-span-4
      md:col-span-6 lg:col-span-8 lg:self-center lg:col-start-3">
        <div className="">
          <div className="text-indigo-700 font-semibold mb-3">Premium abstract images</div>
          <h1 className="text-3xl font-semibold text-neutral-900
          md:text-5xl">Easy access to top quality images</h1>
        </div>
        <p className="text-neutral-600 text-lg
        md:text-xl">
          In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.
        </p>
      </header>
      
      {/* <!-- Features grid --> */}
      <section className="col-span-4 md:col-span-6 lg:col-span-12">
        <ul className="grid gap-y-8
        md:grid-cols-2 md:gap-8
        lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {/* Rendering feature cards using map() */}
          {features.map((feature, index) => (
            <li key={index} className="flex flex-col gap-5">
            <div className="flex justify-center">
                <i className={`${feature.icon} text-2xl h-12 w-12 text-indigo-700 shadow rounded-full flex justify-center items-center`}></i>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-600">
                {feature.description}
              </p>
            </div>
          </li>
          ))}
        </ul>
      </section>
    </main>
    )
}