export default function StatisticsCard({label, value}) {
    return (
        <>
        <div className="text-center border border-neutral-200 rounded-lg py-6 shadow">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4
            md:text-5xl">{value.toLocaleString("en-US")}</h2>
            <p className="text-neutral-600 text-xl">{label}</p>
        </div>
        </>
    )
}