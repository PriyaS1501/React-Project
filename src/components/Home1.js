import React, { Component } from 'react'
import banner1 from '../assets/images/eyecare-banner.jpg'
import banner2 from '../assets/images/eyecare-carousal.jpg'
import doctorIcon from '../assets/images/doctors.png'
import centresIcon from '../assets/images/centres.png'
import appointmentIcon from '../assets/images/book-appointment.png'
import '../assets/css/style.css'
import 'bootstrap/dist/js/bootstrap'
import { Link } from 'react-router-dom'



class home1 extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="p-0">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item ">
                                            <img src={banner1} className="d-block w-100" alt="..."></img>
                                        </div>
                                        <div className="carousel-item active">
                                            <img src={banner2} className="d-block w-100" alt="..."></img>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                        data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                        data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="m-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 p-0 banner-btm">

                                <div className="col-md-4 find-doctor">
                                    <img src={doctorIcon} alt="doctor"></img>
                                    <Link to="/doctors">
                                        <h3>Find a <br />Doctor</h3>
                                    </Link>
                                    <p>Search by name, specialty, and location</p>
                                </div>


                                <div className="col-md-4 centers">
                                    <img src={centresIcon} alt="centers"></img>
                                    <Link to="/centres">
                                        <h3>Our <br />Centres</h3>
                                    </Link>
                                    <p>Visit your nearest centre now</p>
                                </div>


                                <div className="col-md-4 book-appointment">
                                    <img src={appointmentIcon} alt="book appointment"></img>
                                    <Link to="/bookanappointment">
                                        <h3>Book an <br></br>appointment</h3>
                                    </Link>
                                    <p>Schedule your visit online</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default home1