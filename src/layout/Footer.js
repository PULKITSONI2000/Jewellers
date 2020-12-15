import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        // <!-- Footer -->
        <footer className="page-footer font-small stylish-color-dark pt-4">

        {/* <!-- Footer Links --> */}
        <div className="container text-center text-md-left">

            {/* <!-- Grid row --> */}
            <div className="row">

            {/* <!-- Grid column --> */}
            <div className="col-md-4 mx-auto">

                {/* <!-- Content --> */}
                <h5 className="font-weight-bold mt-3 mb-4 footer-title">NK Jewellers</h5>
                <p className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia vero deserunt id omnis dolorum assumenda necessitatibus maiores? Provident, laudantium.</p>

            </div>
            {/* <!-- Grid column --> */}

            <hr className="clearfix w-100 d-md-none" />

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mx-auto">

                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Contact US</h5>

                <ul className="list-unstyled">
            
                <li>
                    <a href="#!">Link 2</a>
                </li>
                <li>
                    <a href="#!">Link 3</a>
                </li>
                <li>
                    <a href="#!">Link 4</a>
                </li>
                </ul>

            </div>
            {/* <!-- Grid column --> */}

            <hr className="clearfix w-100 d-md-none " />

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mx-auto">

                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Follow Us</h5>

                <ul className="list-unstyled">
                <li>
                    <a href="#!"><FaFacebook size="1.5rem" /> Facebook</a>
                </li>
                <li>
                    <a href="#!"><FaInstagram size="1.5rem" /> Instagram</a>
                </li>
                <li>
                    <a href="#!"><FaTwitter size="1.5rem" /> Twitter</a>
                </li>
                </ul>

            </div>
            {/* <!-- Grid column --> */}


        </div>
            {/* <!-- Grid row --> */}

        </div>
        {/* <!-- Footer Links --> */}
        <hr className="clearfix w-100 " />

 
        {/* <!-- Copyright --> */}
        <div className="footer-copyright text-center py-3">&copy; 2020 Copyright:
            <a href="#!"> NKJwellers.com</a>
        </div>
        {/* <!-- Copyright --> */}

        </ footer>
    )
}

export default Footer
