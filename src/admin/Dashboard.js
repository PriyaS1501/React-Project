import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="breadcrumb">
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="gray-bg p-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div >
                                        <h3> Welcome "" , You are successfully Signed In to your account,</h3>
                                        <h4> Now you can access your services.</h4>
                                        <hr />
                                        <button className="btn btn-primary m-2" ><Link to="/admin/doctorslist"> <i className="fa fa-user-md"></i> 
                                             Doctors</Link></button>
                                        <button className="btn btn-primary m-2"> <Link to="/admin/centreslist"> <i className="fa fa-hospital-o"></i>
                                             Centres</Link></button>
                                        <button className="btn btn-primary m-2" > <Link to="/admin/appointmentlist"> <i className="fa fa-file-text-o"></i>
                                             Appointments</Link></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Dashboard