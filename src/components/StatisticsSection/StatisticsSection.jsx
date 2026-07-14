import bannerImg from "../../assets/white-blocks.png"
import { useState, useEffect } from "react"
import { fetchStatistics } from "./statistics"
import StatisticsCard from "./StatisticsCard"

function StatisticsSection() {
    const [statistics, setStatistics] = useState([])
    const [loading, setLoading] = useState(true)

    const metricLabels = {
      downloads: "Downloads",
      paid_users: "Paid Users",
      library_images: "Images in Library",
};
    
    useEffect(() => {
      async function fetchData() {
        const data = await fetchStatistics()
        setStatistics(data)
        setLoading(false)
    }
    try {
      fetchData()
    } catch (error) {
      throw error
    } 
    }, [])

    return (
        <>
        <main className="bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB] p-4 grid grid-cols-4 gap-x-4">
      <section className="col-span-4 bg-white py-12 px-4 rounded flex flex-col gap-12
      md:gap-16 md:rounded-md
      xl:p-24">
        <header className="flex flex-col gap-3">
          {/* <!-- Overline text --> */}
          <div className="font-semibold text-indigo-700 text-center">Statistics</div>
          {/* <!-- Stats header --> */}
           <div className="flex flex-col gap-5">
            <h2 className="text-neutral-900 text-3xl font-semibold text-center
            md:text-5xl">More than premium abstract imagery</h2>
            <p className="text-xl text-neutral-600 text-center">Our platform is more than just as a service to us – it is a catalyst for enriching lives through premium abstract imagery.</p>
           </div>
        </header>

        {/* <!-- Stats container --> */}
         <div className="flex flex-col gap-12
         md:gap-16
         xl:flex-row xl:gap-8">
          {/* <!-- Stats banner --> */}
          <img className="h-77.5 md:h-164 xl:h-136" src={bannerImg} alt="Statistics section banner" />
          <div className="flex flex-col gap-6 md:gap-8 xl:w-full">

            <div className="">
              <p className="text-neutral-600 text-lg">Our mission, in numbers</p>
            </div>
            {/* <!-- Stats number cards --> */}

            {loading && <div>Loading...</div>}
            {statistics.map((item, index) => (
              <StatisticsCard key={index} label={metricLabels[item.metric]} value={item.value} />
            ))}

          </div>
         </div>
        </section>
        </main>
        </>
    )
}

export default StatisticsSection