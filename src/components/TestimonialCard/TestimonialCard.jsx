import './/TestimonialCard.css'

function TestimonialCard({imageurl, username, userhandle, testimonial}) {
    return (
        <>
        <div className="card-container">
          <div className="avatar-container">
            <img className="profile-image" src={imageurl} alt="profile photo" />
            <p className="username">
                {username}
                <span className="user-handle">@{userhandle}</span>
            </p>
          </div>
         <div className="testimonial">
            <p>{testimonial}</p>
        </div>
        </div>
        </>
    )
}

export default TestimonialCard