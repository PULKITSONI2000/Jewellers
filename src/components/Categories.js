import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CategoryImage from './CategoryImage'

const Categories = () => {
    return (
        <>
        {/* /// TODO:  add Images in div*/}

        <div className="category-heading">We Manufacture</div>
            <Row className="container-fluid" style={{margin: 0}}>
                <Col xl={3} md={5}><CategoryImage image="https://lh3.googleusercontent.com/proxy/1qjFMxQYAdgkPoHelltpQv4i93kefwm6fcVQFWqscVHkrGoPdmhkP3So3b-veNXAYm04zN-dKCUrnWfqPhU0Z36eMwO0-goJrgLvQeBjerh-5zLGviDI2jIUB2Ol8yX2Sv2cjQ4SPyE" /></Col>
                <Col xl={5} md={7}><CategoryImage /></Col>
                <Col xl={4} md={7}><CategoryImage /></Col>
            
                <Col xl={5} md={5}><CategoryImage /></Col>
                <Col xl={4} md={5}><CategoryImage /></Col>
                <Col xl={3} md={7}><CategoryImage /></Col>

                <Col xl={4} md={7}><CategoryImage /></Col>
                <Col xl={3} md={5}><CategoryImage /></Col>
                <Col xl={5} md={5}><CategoryImage /></Col>
            </Row>
        </>
    )
}

export default Categories
