import React from 'react'

export default function NewsItem({ title, description, image, readMore }) {
    return (
        <>
            <div className="card my-3 mx-5" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={readMore} className="btn btn-dark">Read More</a>
                </div>
            </div>
        </>
    )
}
