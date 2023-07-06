import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'

class Footer1 extends Component {
    render() {
        return (
            <div>
                <footer className="p-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>About us</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam
                            </p>


                        </div>
                        <div className="col-md-4">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link to="/"> Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/ourcentres">Our Centres</Link></li>
                                <li><Link to="/ourdoctors">Our Doctors</Link></li>
                                <li><Link to="/bookanappointment">Book An Appointment</Link></li>
                            </ul>


                        </div>
                        <div className="col-md-4">
                            <h3>Contact Us</h3>
                            <ul className="social">
                                <li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="/"><i className="fa fa-youtube"></i></Link></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="copyright">
                        <Link to="/">Designed & Developed by Priyanka Babar</Link>
                        </div>
                    </div>
                </div>
                
                </div>
        )
    }
}

export default Footer1