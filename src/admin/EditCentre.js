import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import myStyle from '../assets/css/style.module.css'

class EditCentre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Centres: [],
      _id: '',
      name: '',
      description: '',
      address: '',
      cemail: '',
      ccontact: ''
    }
  }
  fetchData = (_id) => {
    axios.get(`https://dark-pink-quail-hose.cyclic.app/Centres/${_id}`)
      .then((res) => {
        //  console.log(res.data)
        this.setState({ Centres: res.data.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    let url = window.location.pathname;
    let _id = url.substring(url.lastIndexOf('/') + 1);
   // console.log(_id)
     axios.get(`https://dark-pink-quail-hose.cyclic.app/Centres/${_id}`)
      .then((res) => {
        //console.log(res.data)
        const { _id, name, description, address, cemail, ccontact } = res.data.data
        this.setState({ _id, name, description, address, cemail, ccontact })
      })
      .catch((err) => {
        console.log("Error:" + err)
      })
  
  }
  editCentre = (e) => {
    console.log("Put Request")
    const centreObj = {
      _id: this.state._id,
      name: this.state.name,
      description: this.state.description,
      address: this.state.address,
      cemail: this.state.cemail,
      ccontact: this.state.ccontact
    }
    axios.put(`https://dark-pink-quail-hose.cyclic.app/Centres/${this.state._id}`, centreObj)
      .then(() => {
        window.alert("Record of centre " + this.state.name +" updated sucessfully")
        window.location="/admin/centreslist"

      })
      .catch((err) => {
        console.log("Error:" + err)
      })
    e.preventDefault()
  }

  inputChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    //  const { name, description, address, cemail, ccontact } = this.state
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <h2>Edit Centre Details !!</h2>
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
                <div className="edit-doctor-form">
                  <form onSubmit={(e) => this.editCentre(e)}>

                    <div className="row">
                      <div className="col-md-5 m-2">
                        <label > Name :</label>
                        <input type="text" name="name" value={this.state.name} className="form-control" required
                          onChange={(e) => this.inputChangeHandler(e)}></input>

                      </div>
                      <div className="col-md-10 m-2">
                        <label >Description :</label>
                        <textarea name="description" value={this.state.description} className="form-control"  required onChange={(e) => this.inputChangeHandler(e)}>
                        </textarea>
                     

                      </div>

                      <div className="col-md-10 m-2">
                        <label >Address :</label>
                        <textarea name="address" value={this.state.address} className="form-control"  required onChange={(e) => this.inputChangeHandler(e)}>
                        </textarea>
                     
                      </div>

                      <div className="col-md-5 m-2">
                        <label > Email id :</label>
                        <input type="email" name="cemail" value={this.state.cemail} className="form-control"  required onChange={(e) => this.inputChangeHandler(e)}></input>
                       
                      </div >

                      <div className="col-md-5 m-2">
                        <label >Contact Number :</label>
                        <input type="text" name="ccontact" value={this.state.ccontact} className="form-control"  required onChange={(e) => this.inputChangeHandler(e)}></input>
                       


                      </div >

                      <div className="col-md-5 m-2">
                        <button className="btn btn-secondary" type="submit"> Update</button>
                      </div>


                    </div >
                  </form >
                </div >
              </div >
            </div >
          </div >
        </section >

      </div >
    )
  }
}

export default EditCentre