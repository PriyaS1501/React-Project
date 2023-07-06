import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../assets/css/style.css'
import logo from '../assets/images/eyecare-logo.png'
import { Link } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'

class Nav extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="top-header">
                            <div className="row">
                                <div className="col-md-2" id="header-logo" >
                                  <Link to="/home">  <img src={logo} alt="Eyecare Logo"></img></Link>
                                    <h3>EyeCare</h3>
                                </div>
                                <div className="col-md-8">
                                    <div className="menubar">
                                        <nav className="navbar navbar-expand-lg">
                                            <div className="container-fluid">

                                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon"></span>
                                                </button>
                                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                        <li className="nav-item">
                                                            <Link to="" className="nav-link" aria-current="page"> Home</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/about" className="nav-link"> About us</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/centres" className="nav-link">  Our Centres</Link>
                                                        </li>

                                                        <li className="nav-item">
                                                            <Link to="/doctors" className="nav-link">  Our Doctors</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to="/bookanappointment" className="nav-link">  Book an
                                                                Appointment</Link>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-md-2 " >

                    <div className="sign-in" ><button className="btn btn-secondary m-2 btn-sm " >
                          <Link to="/login">  Admin <i className="fa fa-sign-out"></i> </Link></button>
                    </div>
                    {/* <div  className="sign-out">
                        <p> Welcome "<b></b>"</p><button className="btn btn-danger m-2 btn-sm">
                            SignOut <i className="fa fa-sign-out"></i></button>
                    </div> */}
                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Nav