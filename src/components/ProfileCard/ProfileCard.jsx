function ProfileCard({imageurl}) {
    return (
    <div className="w-85 bg-white mx-auto mt-50 rounded-lg flex flex-col items-center gap-6 px-4 py-6">
        {/* <!-- Avatar image --> */}
        <div className="w-16">
            <img src={imageurl} alt="avatar image" />
        </div>

        {/* <!-- Name and title --> */}
        <div className="text-center">
            <h2 className="text-xl text-neutral-900 font-medium mb-1">Sarah Dole</h2>
            <h3 className="text-sm text-neutral-600">Front End Engineer @ Microsoft</h3>
        </div>

        {/* <!-- Bio --> */}
        <div>
            <p className=" text-center text-base text-neutral-600">I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.</p>
            {/* <!-- Contact Button --> */}
            <button
            type="button"
            className="bg-indigo-700 block w-full text-center rounded py-2.5 mt-10 
             hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 transition-shadow text-base font-medium text-white">
            Contact me
            </button>

        </div>

        {/* <!-- Social media links --> */}
        <div className="flex justify-center items-center gap-4 text-indigo-700">
            <a href="#" className="flex justify-center items-center rounded w-9 h-9 hover:bg-gray-300
            focus:ring-4 focus:ring-indigo-200 transition-shadow">
            <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="#" className="flex justify-center items-center rounded w-9 h-9 hover:bg-gray-300
            focus:ring-4 focus:ring-indigo-200 transition-shadow">
            <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
            <a href="#" className="flex justify-center items-center rounded w-9 h-9 hover:bg-gray-300
            focus:ring-4 focus:ring-indigo-200 transition-shadow">
            <i className="ri-instagram-fill text-xl"></i>
            </a>
            <a href="#" className="flex justify-center items-center rounded w-9 h-9 hover:bg-gray-300
            focus:ring-4 focus:ring-indigo-200 transition-shadow">
            <i className="ri-twitter-x-fill text-xl"></i>
            </a>
        </div>

    </div>
    )
}

export default ProfileCard