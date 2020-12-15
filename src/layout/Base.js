import React from 'react'
import Footer from './Footer'
import NavBarHeader from './NavBarHeader'
const Base = ({children}) => {
    return (
        <>
            <div className="title" id="title">NK Jewellers</div>
            <NavBarHeader />
            {children}
            <Footer />
        </>
    )
}

export default Base
