import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import myStyle from '../assets/css/style.module.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table';


class CentresList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Centres: [],
            id: '',
            name: '',
            description: '',
            address: '',
            cemail: '',
            ccontact: ''
        }
    }
//fetch data
    fetchData = () => {
        axios.get("https://dark-pink-quail-hose.cyclic.app/Centres")
            .then((res) => {
                //  console.log(res.data)
                this.setState({ Centres: res.data.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentDidMount() {
        this.fetchData();
    }
    getId = (id) => {
        console.log("Get data for id:" + id)
        axios.get(`https://dark-pink-quail-hose.cyclic.app/Centres/${id}`)
            .then((res) => {
                // console.log(res.data)
                const { id, name, description, address, cemail, ccontact } = res.data.data
                this.setState({ id, name, description, address, cemail, ccontact })
            })
            .catch((err) => {
                console.log("Error:" + err)
            })

    }
// delete record
    deleteRecord = (id) => {

        if (window.confirm('Are you sure you want to delete the record with Centre id ' + id)) {
            axios.delete(`https://dark-pink-quail-hose.cyclic.app/Centres/${id}`)
                .then(() => {
                    // window.alert('Record of Centre id ' + id + ' deleted sucessfully')
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
                                <h2>List of Centres</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="gray-bg p-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <button className="btn btn-secondary btn-sm "> <Link to="/admin/addcentre"><i className="fa fa-plus"></i> Add
                                        Centre</Link></button>
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
                                                    <th>Description</th>
                                                    <th>Address</th>
                                                    <th>Email Id</th>
                                                    <th>Contact</th>
                                                    <th colSpan={2}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.Centres.map((data) => {
                                                        return <tr key={data._id}>
                                                            <td>{(data._id.length>5) ? (data._id.slice(21,24))  :(data._id)}</td>
                                                            <td>{data.name}</td>
                                                            <td>{(data.description.length > 15) ? (data.description.slice(0, 15)) + '...' : (data.description)}</td>
                                                            <td>{data.address}</td>
                                                            <td>{data.cemail}</td>
                                                            <td>{data.ccontact} </td>
                                                            <td><button className="btn btn-outline-success btn-sm" >
                                                                <Link to={`/admin/editcentre/${data._id}`}>  <i className="fa fa-pencil-square-o"></i></Link></button></td>
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

export default CentresList