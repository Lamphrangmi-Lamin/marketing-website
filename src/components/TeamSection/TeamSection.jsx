import { team } from "./TeamSection"

export default function TeamSection() {
    return (
        <section className="bg-white m-4 grid grid-cols-4 gap-x-4 px-4 py-12 auto-rows-min gap-y-12
            max-w-360
            min-h-screen
            md:py-16 md:gap-x-8 md:gap-y-16
            xl:py-24 xl:px-16">
            <header className="col-span-4">
                <div className="mb-5">
                <span className=" text-center block col-span-4 text-indigo-700 font-semibold mb-3">
                    Team
                </span>
                <h2 className="text-3xl font-semibold text-neutral-900 text-center
                md:text-5xl">Meet our team</h2>
                </div>
                <p className="text-xl text-neutral-600 text-center">
                From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table.
                </p>
            </header>

            {/* <!-- Rendering list of team members --> */}
            <ul className="col-span-4
                grid grid-cols-4 gap-y-12
                md:gap-x-8">
                {team.map((member, index) => (
                    <li key={index} className="col-span-4 md:col-span-2 xl:col-span-1">
                <article>
                    <img className="h-74 w-full object-cover mb-6" src={member.img} alt={`${member.name}, ${member.role}`} />
                    <h3 className="text-neutral-900 text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-indigo-700 text-lg font-medium mb-4">{member.role}</p>
                    <p className="text-neutral-600">
                    {member.supportingText}
                    </p>
                </article>
                </li>
                ))}
            </ul>
     </section>
    )
}