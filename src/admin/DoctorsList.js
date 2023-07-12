import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import myStyle from '../assets/css/style.module.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
//import ReactPaginate from 'react-paginate';
class DoctorsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Doctors: [],
            _id: '',
            name: '',
            qualification: '',
            speciality: '',
            experience: '',
            about: '',
            email: '',
            contact: '',
            centre: '',
            OPDtimeAM: '',
            OPDtimePM: '',
            OPDdays: '',
            gender: ''
        }
    }
    fetchData = () => {
        axios.get("https://dark-pink-quail-hose.cyclic.app/Doctors")
            .then((res) => {
                console.log(res.data)
                this.setState({ Doctors: res.data.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    get_id = (_id) => {
       //  console.log("Get data for _id:" + _id)
        axios.get(`https://dark-pink-quail-hose.cyclic.app/Doctors/${_id}`)
            .then((res) => {
                // console.log(res.data)

                const { _id, name, qualification, speciality, experience, about, email, contact, centre, OPDtimeAM, OPDtimePM, OPDdays, gender } = res.data.data
                this.setState({ _id, name, qualification, speciality, experience, about, email, contact, centre, OPDtimeAM, OPDtimePM, OPDdays, gender })
            })
            .catch((err) => {
                console.log("Error:" + err)
            })

    }
    componentDidMount() {
        this.fetchData();
    }
    deleteRecord = (_id) => {

        if (window.confirm('Are you sure you want to delete the record of Doctor  ' + _id)) {
            axios.delete(`https://dark-pink-quail-hose.cyclic.app/Doctors/${_id}`)
                .then(() => {
                    // window.alert('Record of Doctor _id ' + _id + ' deleted sucessfully')
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
                                <h2>List of Doctors</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="gray-bg p-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <button className="btn btn-secondary btn-sm "> <Link to="/admin/adddoctor"><i className="fa fa-plus"></i> Add
                                        Doctor</Link></button>
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
                                                    <th>id</th>
                                                    <th>Name</th>
                                                    <th>Qualification</th>
                                                    <th>Speciality</th>
                                                    <th>Experience(Yrs)</th>
                                                    <th>About</th>
                                                    <th>Email</th>
                                                    <th>Contact</th>
                                                    <th>Centre</th>
                                                    <th>OPDTime</th>
                                                    <th>OPDDays</th>
                                                    <th>Gender</th>
                                                    <th colSpan={2}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.Doctors.map((data) => {
                                                        return <tr key={data._id}>
                                                            <td>{(data._id.length>5) ? (data._id.slice(21,24)) : (data._id)}</td>
                                                            <td>{data.name}</td>
                                                            <td>{data.qualification}</td>
                                                            <td>{data.speciality}</td>
                                                            <td>{data.experience}</td>
                                                            <td>{(data.about.length > 40) ? (data.about.slice(0, 40)) + '...' : (data.about)} </td>
                                                            <td>{data.email}</td>
                                                            <td>{data.contact}</td>
                                                            <td>{data.centre}</td>
                                                            <td>{data.OPDtimeAM} to {data.OPDtimePM} </td>
                                                            <td>{data.OPDdays}</td>
                                                            <td>{data.gender}</td>
                                                            <td><button className="btn btn-outline-success btn-sm" >
                                                                <Link to={`/admin/editdoctor/${data._id}`}>  <i className="fa fa-pencil-square-o"></i></Link></button></td>
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
                            <div className="row pagination_btn">
                                {/* <pagination-controls (pageChange)="p = $event"></pagination-controls> */}
                                {/* <button onClick={() => getPrevPage()}>Prev</button>
                                <p>{page} of {nbPages}</p>
                                <button onClick={() => getNextPage()}>Next</button> */}
                            </div>
                        </div >
                    </div >
                </section >

            </div >
        )
    }
}

export default DoctorsList