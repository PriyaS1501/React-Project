import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'

class AddCentre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      address: '',
      cemail: '',
      ccontact: ''
    }
  }
  inputChangeHandler = (e) => {
    const { name, cemail, ccontact } = this.state
    this.setState({ [e.target.name]: e.target.value })
    var regExName = "^[A-Za-z]{3,20}";
    var regExEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    var regExContact = '[0-9]{10}';

    /// fname error
    this.setState({ ferror: "" })
    if (name.match(regExName)) {
      this.setState({ fperror: "" })
    }
    if (!name.match(regExName)) {
      this.setState({ fperror: " Centre name must be More than 3 letters." })
      e.preventDefault();
      return false;
    }
    /// email id error
    this.setState({ mailerror: "" })
    if (cemail.match(regExEmail)) {
      this.setState({ eiderror: "" })
    }
    if (!cemail.match(regExEmail)) {
      this.setState({ eiderror: "   Email id must be valid" })
      e.preventDefault();
      return false;
    }
    /// contact number error
    this.setState({ conerror: "" })
    if (ccontact.match(regExContact)) {
      this.setState({ callerror: "" })
    }
    if (!ccontact.match(regExContact)) {
      this.setState({ callerror: "Mobile number must be 10 digit" })
      e.preventDefault();
      return false;
    }
  }
  addCentre = (e) => {

    const { name, description, address, cemail, ccontact } = this.state
    const centreObj = {

      name: name,
      description: description,
      address: address,
      cemail: cemail,
      ccontact: ccontact
    }
    if (name === "") {

      this.setState({ ferror: "Centre name is required" });
      e.preventDefault();
      return false;
    }
    if (description === "") {

      this.setState({ deserror: "Description is required" });
      e.preventDefault();
      return false;
    }
    if (address === "") {

      this.setState({ adrerror: "Address is required" });
      e.preventDefault();
      return false;
    }
    if (cemail === "") {

      this.setState({ mailerror: "Email id is required" });
      e.preventDefault();
      return false;
    }
    if (ccontact === "") {

      this.setState({ conerror: "Contact number is required" });
      e.preventDefault();
      return false;
    }
    axios.post("http://localhost:8484/Centres/", centreObj)
      .then(() => {
        window.alert("Centre Data added sucessfully")
        window.location.replace('/admin/centreslist');
      })
      .catch((e) => {
        console.log("Error:" + e)
      })
    e.preventDefault()
  }
  conditionalchange = () => {
    this.inputchangehandler()
  }
  render() {
    return (
      <div>

        <section>
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <h2>Add Centre</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="gray-bg p-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12">

                  <button className="btn btn-secondary btn-sm "> 
                  <Link to="/admin/centreslist"><i className="fa fa-plus"></i> View Centres List</Link>
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="add-centre-form">
                  <form onSubmit={(e) => this.addCentre(e)}>

                    <div className="row">
                      <div className="col-md-5 m-2">
                        <label > Centre Name/Location<sup>*</sup> :</label>
                        <input type="text" name="name" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..."
                        ></input>

                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.ferror} <br />
                            {this.state.fperror}</strong>
                        </div>

                      </div>
                      <div className="col-md-5 m-2">
                        <label > Email Id<sup>*</sup> :</label>
                        <input type="email" name="cemail" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="test111@test.com / test@test.com"
                        ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.mailerror}<br />
                            {this.state.eiderror}</strong>
                        </div>

                      </div>

                      <div className="col-md-5 m-2">
                        <label >Contact Number<sup>*</sup> :</label>
                        <input type="text" name="ccontact" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..."
                        ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.conerror}<br />
                            {this.state.callerror}</strong>
                        </div>

                      </div>
                      <div className="col-md-5 m-2">
                        <label > About Centre<sup>*</sup> :</label>
                        <textarea name="description" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..."
                        >
                        </textarea>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.deserror} </strong>
                        </div>
                      </div>


                      <div className="col-md-10 m-2">
                        <label > Address<sup>*</sup> :</label>
                        <textarea name="address" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..."
                        >
                        </textarea>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.adrerror}</strong>
                        </div>

                      </div>


                      <div className="col-md-5 m-2">
                        <button className="btn btn-secondary" type="submit"> Submit </button>
                      </div>


                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AddCentre