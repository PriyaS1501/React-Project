import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'

class AddDoctor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      contact: '',
      qualification: '',
      speciality: '',
      experience: '',
      centre: '',
      OPDtimeAM: '',
      OPDtimePM: '',
      OPDdays: '',
      gender: '',
      about: '',
    }
  }

  inputChangeHandler = (e) => {
    const { name, email, contact, experience } = this.state
    // const { value, name } = e.target;
    // this.setState({ [name]: value })
    this.setState({ [e.target.name]: e.target.value })
    var regExName = "^[A-Za-z]{3,20}";
    var regExEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    var regExContact = '[0-9]{10}';
    var regExExperience = "[0-9]{2}";
    /// fname error
    this.setState({ ferror: "" })
    if (name.match(regExName)) {
      this.setState({ fperror: "" })
    }
    if (!name.match(regExName)) {
      this.setState({ fperror: " Full name must be More than 3 letters." })
      e.preventDefault();
      return false;
    }
    /// email id error
    this.setState({ emailerror: "" })
    if (email.match(regExEmail)) {
      this.setState({ eiderror: "" })
    }
    if (!email.match(regExEmail)) {
      this.setState({ eiderror: "   Email id must be valid" })
      e.preventDefault();
      return false;
    }
    /// contact number error
    this.setState({ conerror: "" })
    if (contact.match(regExContact)) {
      this.setState({ callerror: "" })
    }
    if (!contact.match(regExContact)) {
      this.setState({ callerror: "   Mobile number must be 10 digit" })
      e.preventDefault();
      return false;
    }
    /// experience error
    this.setState({ experror: "" })
    if (experience.match(regExExperience)) {
      this.setState({ exerror: "" })
    }
    if (!experience.match(regExExperience)) {
      this.setState({ exerror: "Experience must be in 2 digits" })
      e.preventDefault();
      return false;
    }
  }
  addDoctor = (e) => {
    //console.log("add data")
    const { name, email, contact, qualification, speciality, experience, centre, OPDtimeAM, OPDtimePM, OPDdays, gender, about } = this.state
    const doctorObj = {

      name: name,
      email: email,
      contact: contact,
      qualification: qualification,
      speciality: speciality,
      experience: experience,
      centre: centre,
      OPDtimeAM: OPDtimeAM,
      OPDtimePM: OPDtimePM,
      OPDdays: OPDdays,
      gender: gender,
      about: about
    }
    if (name === "") {

      this.setState({ ferror: "Full name is required" });
      e.preventDefault();
      return false;
    }
    if (qualification === "") {

      this.setState({ qerror: "Qualification is required" });
      e.preventDefault();
      return false;
    }
    if (speciality === "") {

      this.setState({ serror: "Please enter Speciality" });
      e.preventDefault();
      return false;
    }
    if (experience === "") {

      this.setState({ exerror: "Please enter your experience" });
      e.preventDefault();
      return false;
    }
    if (about === "") {

      this.setState({ abterror: "Please tell us about yourself" });
      e.preventDefault();
      return false;
    }

    if (email === "") {
      this.setState({ emailerror: "Email id is required" });
      e.preventDefault();
      return false;
    }

    if (contact === "") {
      this.setState({ conerror: "Contact number is required" });
      e.preventDefault();
      return false;
    }

    if (centre === "") {
      this.setState({ centreerror: "Select centre " });
      e.preventDefault();
      return false;
    }

    if (OPDtimeAM === "") {
      this.setState({ opdfromerror: "Enter OPD time from" });
      e.preventDefault();
      return false;
    }
    if (OPDtimePM === "") {
      this.setState({ opdtoerror: "Enter OPD time to" });
      e.preventDefault();
      return false;
    }

    if (OPDdays === "") {
      this.setState({ dayserror: "Enter OPD days " });
      e.preventDefault();
      return false;
    }
    if (gender === "") {
      this.setState({ gendererror: "Select Gender" });
      e.preventDefault();
      return false;
    }


    axios.post("https://dark-pink-quail-hose.cyclic.app/Doctors/", doctorObj)
      .then(() => {
        window.alert("New Doctor added sucessfully")
        window.location.replace('/admin/doctorslist');
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
                <h2>Add Doctors</h2>
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
                    <Link to="/admin/doctorslist"><i className="fa fa-plus"></i> View Doctor List</Link></button>

                </div>
              </div>
              <hr />
              <div className="row">
                <div className="add-doctor-form">
                  <form onSubmit={(e) => this.addDoctor(e)}>

                    <div className="row">
                      <div className="col-md-5 m-2">
                        <label > Name<sup>*</sup> :</label>
                        <input type="text" name="name" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..." ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.ferror} <br />
                            {this.state.fperror}</strong>
                        </div>

                      </div>
                      <div className="col-md-5 m-2">
                        <label> Email Id<sup>*</sup> :</label>
                        <input type="email" name="email" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="test111@test.com / test@test.com" ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.emailerror}<br />
                            {this.state.eiderror}</strong>
                        </div>

                      </div>
                      <div className="col-md-5 m-2">
                        <label>Contact Number<small>(10 Digits)</small><sup>*</sup> :</label>
                        <input type="text" name="contact" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..."  ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.conerror}<br />
                            {this.state.callerror}</strong>
                        </div>

                      </div>
                      <div className="col-md-5 m-2">
                        <label> Qualification<small>(Seperate by comma)</small><sup>*</sup> : </label>
                        <input type="text" name="qualification" className="form-control" onChange={(e) => this.inputChangeHandler(e)} placeholder="Enter..."  ></input>

                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.qerror}
                          </strong>
                        </div>


                      </div>

                      <div className="col-md-5 m-2">
                        <label > Speciality<small>(Seperate by comma)</small><sup>*</sup> :</label>
                        <input type="text" name="speciality" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..." ></input>

                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.serror}
                          </strong>
                        </div>


                      </div>

                      <div className="col-md-5 m-2">
                        <label >Experience in yrs<small>(2 digits)</small><sup>*</sup>:</label>
                        <input type="text" name="experience" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..." ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.exprror} <br />
                            {this.state.exerror}</strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label>Centre<sup>*</sup> :</label>
                        <select name="centre" onChange={(e) => this.inputChangeHandler(e)} className="form-control" >
                          {/* {
                            this.Centres?.map((data) => {
                              return <option key={data.name}></option>
                            })
                          } */}
                          <option>--Select centre--</option>
                          <option>Thane</option>
                          <option>Mumbai</option>
                        </select>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.centreerror}
                          </strong>
                        </div>

                      </div>

                      <div className="col-md-5 m-2">
                        <label >OPD Time<sup>*</sup>:</label><br />
                        <input type="text" name="OPDtimeAM" className="form-control num"
                          onChange={(e) => this.inputChangeHandler(e)} placeholder="From"  ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.opdfromerror}
                          </strong>
                        </div>
                        <input type="text" name="OPDtimePM" className="form-control num"
                          onChange={(e) => this.inputChangeHandler(e)} placeholder="To"  ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.opdtoerror}
                          </strong>
                        </div>
                      </div>

                      <div className="col-md-5 m-2">
                        <label>OPD Days <small>(eg.Mon) Seperate by comma</small><sup>*</sup>:</label>
                        <input type="text" name="OPDdays" className="form-control" onChange={(e) => this.inputChangeHandler(e)}
                          placeholder="Enter..."  ></input>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.dayserror}
                          </strong>
                        </div>
                      </div>



                      <div className="col-md-5 m-2">
                        <label>Gender<sup>*</sup> :</label><br />
                        <input type="radio" name="gender" onChange={(e) => this.inputChangeHandler(e)} value="Male" ></input> Male
                        <input type="radio" name="gender" onChange={(e) => this.inputChangeHandler(e)} value="Female"></input> Female

                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.gendererror}
                          </strong>
                        </div>
                      </div>

                      <div className="col-md-10 m-2">
                        <label > About Doctor<sup>*</sup> :</label>
                        <textarea name="about" className="form-control" onChange={(e) => this.inputChangeHandler(e)} placeholder="Enter...">
                        </textarea>
                        <div onChange={() => this.conditionalchange()}>
                          <strong style={{ color: "red" }}>
                            {this.state.abterror}
                          </strong>
                        </div>
                      </div>


                      <div className="col-md-5 m-2">
                        <button className="btn btn-secondary" type="submit"> Submit</button>
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

export default AddDoctor