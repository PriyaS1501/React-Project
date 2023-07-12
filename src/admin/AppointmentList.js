import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import myStyle from '../assets/css/style.module.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table';


class AppointmentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Appointments: [],
            id: '',
            fname: '',
            emailid: '',
            acontact: '',
            doa: '',
            city: '',
            gender: '',
            preferredcentre: '',
            contactway: '',
            comment: ''
        }
    }
    fetchData = () => {
        axios.get("https://dark-pink-quail-hose.cyclic.app/Appointments/")
            .then((res) => {
                // console.log(res.data)
                this.setState({ Appointments: res.data.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentDidMount() {
        this.fetchData();
    }
    getId = (id) => {
        //  console.log("Get data for id:" + id)
        axios.get(`https://dark-pink-quail-hose.cyclic.app/Appointments/${id}`)
            .then((res) => {
                // console.log(res.data)
                const { id, fname, emailid, acontact, doa, city, gender, preferredcentre, contactway, comment } = res.data.data
                this.setState({ id, fname, emailid, acontact, doa, city, gender, preferredcentre, contactway, comment })
            })
            .catch((err) => {
                console.log("Error:" + err)
            })

    }
    deleteRecord = (id) => {

        if (window.confirm('Are you sure you want to delete the record with Appointment id ' + id)) {
            axios.delete(`https://dark-pink-quail-hose.cyclic.app/Appointments/${id}`)
                .then(() => {
                    //   window.alert('Record of Appointment id ' + id + ' deleted sucessfully')
                    this.fetchData()
                })
                .catch((err) => {
                    window.alert('error occured')
                })
        }
    }
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="breadcrumb">
                                <h2>List of Appointments</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="gray-bg p-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">


                                    <span className={myStyle.fr}>
                                        <button className="btn btn-outline-success btn-sm">
                                            <Link to="/admin/dashboard" > <i className="fa fa-arrow-circle-left"></i> Back to Dashboard</Link></button>
                                    </span>


                                </div>

                            </div>
                            <hr />

                            <div className="row">
                                <div className="col-md-12 ">
                                    <input type="text" name="search" className="form-control search" placeholder="Search..."
                                    ></input>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className='table-responsive'>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Email d</th>
                                                    <th>Contact</th>
                                                    <th>Date of Appointment</th>
                                                    <th>City</th>
                                                    <th>Gender</th>
                                                    <th>Preferred Centre</th>
                                                    <th>Contact Way</th>
                                                    <th>Comment</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.Appointments.map((data, index) => {
                                                        return <tr key={data._id}>
                                                            <td>{(data._id.length > 5) ? (data._id.slice(21, 24)) : (data._id)}</td>
                                                            <td>{data.fname}</td>
                                                            <td>{data.emailid}</td>
                                                            <td>{data.acontact}</td>
                                                            <td>{data.doa}</td>
                                                            <td>{data.city}</td>
                                                            <td>{data.gender} </td>
                                                            <td>{data.preferredcentre}</td>
                                                            <td>{data.contactway}</td>
                                                           {/* <td>{(data.comment.length > 10) ? (data.comment.slice(0, 10)) + '...' : (data.comment)}</td> */}
                                                            <td>{data.comment}</td>
                                                            <td><button className="btn btn-outline-danger btn-sm" onClick={() => { this.deleteRecord(data._id) }}>
                                                                <i className="fa fa-trash-o"></i></button></td>
                                                        </tr>
                                                    })
                                                }

                                            </tbody>
                                        </Table>
                                    </div>

                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                {/* <pagination-controls (pageChange)="p = $event"></pagination-controls> */}
                            </div>
                        </div >
                    </div >
                </section >

            </div>
        )
    }
}

export default AppointmentList