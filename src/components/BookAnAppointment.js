import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/style.css'


class BoonAnAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      emailid: '',
      acontact: '',
      doa: '',
      city: '',
      gender: '',
      contactway: '',
      preferredcentre: '',
      comment: ''
    }
  }
  inputChangeHandler = (e) => {
    const { fname, emailid, acontact } = this.state
    const { value, name } = e.target;
    this.setState({ [name]: value })
    var regExName = "^[A-Za-z]{3,20}";
    var regExEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    var regExContact = '[0-9]{10}';
    /// fname error
    this.setState({ ferror: "" })
    if (fname.match(regExName)) {
      this.setState({ fperror: "" })
    }
    if (!fname.match(regExName)) {
      this.setState({ fperror: " Full name must be More than 3 letters." })
      e.preventDefault();
      return false;
    }
    /// email id error
    this.setState({ emailerror: "" })
    if (emailid.match(regExEmail)) {
      this.setState({ eiderror: "" })
    }
    if (!emailid.match(regExEmail)) {
      this.setState({ eiderror: "   Email id must be valid" })
      e.preventDefault();
      return false;
    }
    /// contact number error
    this.setState({ conerror: "" })
    if (acontact.match(regExContact)) {
      this.setState({ callerror: "" })
    }
    if (!acontact.match(regExContact)) {
      this.setState({ callerror: "   Mobile number must be 10 digit" })
      e.preventDefault();
      return false;
    }

  }
  addAppointment = (e) => {
    const { fname, emailid, acontact, doa, city, gender, contactway, preferredcentre, comment } = this.state
    const appointmentObj = {
      fname:fname,
      emailid:emailid,
      acontact:acontact,
      doa:doa,
      city:city,
      gender:gender,
      contactway:contactway,
      preferredcentre:preferredcentre,
      comment:comment
      }
    if (fname === "") {
      //  alert ("First name is required")    
      this.setState({ ferror: "First name is required" });
      e.preventDefault();
      return false;
    }

    if (emailid === "") {
      this.setState({ emailerror: "Email id is required" });
      e.preventDefault();
      return false;
    }

    if (acontact === "") {
      this.setState({ conerror: "Contact number is required" });
      e.preventDefault();
      return false;
    }

    if (doa === "") {
      this.setState({ apterror: "Date of appointment is required" });
      e.preventDefault();
      return false;
    }

    if (city === "") {
      this.setState({ cityerror: "Please enter your city" });
      e.preventDefault();
      return false;
    }
    if (gender === "") {
      this.setState({ gendererror: "Please select gender" });
      e.preventDefault();
      return false;
    }

    if (contactway === "") {
      this.setState({ wayerror: "Please select one of the way to contact with you" });
      e.preventDefault();
      return false;
    }
    if (preferredcentre === "") {
      this.setState({ centreerror: "Please select preferred centre" });
      e.preventDefault();
      return false;
    }
    if (comment === "") {
      this.setState({ commenterror: "Tell me about your requirement or reason of appointment" });
      e.preventDefault();
      return false;
    }

    axios.post("http://localhost:8484/Appointments/", appointmentObj)
      .then(() => {
        window.alert("Data added sucessfully")
        window.location.replace('/home');
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
                <h2>Book An Appointment</h2>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="gray-bg p-5">
            <div className="container">
              <div className="row">
                <div className="apointment-form">

                  <form onSubmit={(e) => this.addAppointment(e)}>
                    <div className="row">
                      <div className="col-md-5 m-2">
                        <label > Full Name<sup>*</sup> :</label>
                        <input type="text" name="fname" className="form-control"
                          placeholder="John Smith" onChange={(e) => this.inputChangeHandler(e)}></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.ferror} <br />
                            {this.state.fperror}</strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label > Email Id<sup>*</sup> :</label>
                        <input type="email" name="emailid" className="form-control"
                          placeholder="test111@test.com / test@test.com" onChange={(e) => this.inputChangeHandler(e)}></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.emailerror}<br />
                            {this.state.eiderror}</strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label >Contact Number<small>(10 Digits)</small><sup>*</sup>  :</label>
                        <input type="text" name="acontact" className="form-control"
                          placeholder="Enter..." onChange={(e) => this.inputChangeHandler(e)}></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.conerror}<br />
                            {this.state.callerror}</strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label >Date of Appointment<sup>*</sup> :</label>
                        <input type="date" name="doa" className="form-control" onChange={(e) => this.inputChangeHandler(e)}></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.apterror}<br />
                          </strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label >City<sup>*</sup> :</label>
                        <input type="text" name="city" className="form-control"
                          placeholder="Enter..." onChange={(e) => this.inputChangeHandler(e)}></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.cityerror}<br />
                          </strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label >Gender<sup>*</sup> :</label><br />
                        <input type="radio" name="gender" value="male" onChange={(e) => this.inputChangeHandler(e)}></input>
                        Male
                        <input type="radio" name="gender" value="female" onChange={(e) => this.inputChangeHandler(e)}></input>
                        Female

                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.gendererror}<br />
                          </strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label>Preferred way of contacting<sup>*</sup></label><br />
                        <input type="radio" name="contactway" value="Call" onChange={(e) => this.inputChangeHandler(e)}></input>
                        Call
                        <input type="radio" name="contactway" value="Email" onChange={(e) => this.inputChangeHandler(e)}></input>
                        Email
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.wayerror}<br />
                          </strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label>Select Preferred Centre<sup>*</sup> :</label>


                        <select name="preferredcentre" className="form-control" onChange={(e) => this.inputChangeHandler(e)}>
                          <option>--Select centre--</option>
                          <option>Thane</option>
                          <option>Mumbai</option>
                        </select>

                        {/* <select name="preferredcentre" className="form-control" onChange={(e) => this.inputChangeHandler(e)}>
                          {
                            this.state1.Centres.map((data, index) => {
                              return <option key={data.id}>{data.name}</option>
                            })
                          }

                        </select> */}
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.centreerror}<br />
                          </strong>
                        </div>

                      </div>

                      <div className="col-md-10 m-2">
                        <label > Comment<sup>*</sup> :</label>
                        <textarea name="comment" className="form-control"
                          placeholder="Enter..." onChange={(e) => this.inputChangeHandler(e)}>
                        </textarea>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.commenterror}<br />
                          </strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <button className="btn btn-secondary" type="submit" >
                          Submit</button>
                      </div>


                    </div >
                  </form>

                </div>
              </div>
            </div >
          </div >
        </section >
      </div >
    )
  }
}
//}

export default BoonAnAppointment