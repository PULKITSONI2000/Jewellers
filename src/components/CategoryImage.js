import React from 'react'

const CategoryImage = ({image, title = "title", description = "desc", bg}) => {
    return (
        <div className="category-box">
            <div className="category-title">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className="category-image">
                <img src={image} alt="jewellery" height="150px"/>
            </div>
        </div>
    )
}

export default CategoryImage
