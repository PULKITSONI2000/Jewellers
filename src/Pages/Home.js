import React from 'react'
import CarouselHome from '../components/CarouselHome'
import Categories from '../components/Categories'
import Base from '../layout/Base'

const Home = () => {
    return (
        <Base>
            <CarouselHome />
            <Categories />
        </Base>
    )
}

export default Home
