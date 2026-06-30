function BlogCard({ imageurl, title, badgeText, description }) {
    return (
        <article className="w-85 bg-white rounded-lg mx-auto mt-30 shadow">
            <header>
                <img src={imageurl} alt="interior image" className="rounded-t-lg h-72 w-full object-cover" />
            </header>

            <section className="py-6 px-4">
                <div className="rounded-full bg-green-50 w-[4.188rem] h-6 border border-solid border-green-200 text-center px-2 mb-2">
                 <span className="text-green-700 text-sm block">{badgeText}</span>
                </div>
                <h2 className="font-semibold text-lg text-neutral-900 mb-3">
                {title}
                </h2>
                <p className="text-neutral-600 font-medium text-base mb-6">{description}</p>

                <button className="flex items-center gap-[0.583rem] font-medium text-base text-indigo-700 cursor-pointer">Read more <i className="ri-arrow-right-line text-xl"></i>
                </button>
            </section>

        </article>
    )
}

export default BlogCard