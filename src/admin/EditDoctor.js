import React, { Component } from 'react'
import axios from 'axios'
import '../assets/css/style.css'
import { Link } from 'react-router-dom'
import myStyle from '../assets/css/style.module.css'

export class EditDoctor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Doctors: [],
      id: '',
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
  fetchData = (id) => {
    axios.get(`http://localhost:8484/Doctors/${id}`)
      .then((res) => {
        //  console.log(res.data)
        this.setState({ Centres: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    // console.log(id)
    axios.get(`http://localhost:8484/Doctors/${id}`)
      .then((res) => {
        //console.log(res.data)
        const { id, name, qualification, speciality, experience, about, email, contact, centre, OPDtimeAM, OPDtimePM, OPDdays, gender } = res.data
        this.setState({ id, name, qualification, speciality, experience, about, email, contact, centre, OPDtimeAM, OPDtimePM, OPDdays, gender })
      })
      .catch((err) => {
        console.log("Error:" + err)
      })

  }
  editDoctor = (e) => {
    console.log("Put Request")
    const doctorObj = {
      id: this.state.id,
      name: this.state.name,
      qualification: this.state.qualification,
      speciality: this.state.speciality,
      experience: this.state.experience,
      about: this.state.about,
      email: this.state.email,
      contact: this.state.contact,
      centre: this.state.centre,
      OPDtimeAM: this.state.OPDtimeAM,
      OPDtimePM: this.state.OPDtimePM,
      OPDdays: this.state.OPDdays,
      gender: this.state.gender
    }
    axios.put(`http://localhost:8484/Doctors/${this.state.id}`, doctorObj)
      .then(() => {
        window.alert("Record of id " + this.state.id + " updated sucessfully")
        window.location = "/admin/doctorslist"

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
    return (
      <div>

        <section>
          <div class="container">
            <div class="row">
              <div class="breadcrumb">
                <h2>Edit Doctors Details !!</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="gray-bg p-5">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                <span className={myStyle.fr}>
                    <button className="btn btn-outline-success btn-sm">
                      <Link to="/admin/dashboard" > <i className="fa fa-arrow-circle-left"></i> Back to Dashboard</Link></button>
                  </span>

                </div>
              </div>
              <hr />
              <div class="row">
                <div class="edit-doctor-form">
                  <form  onSubmit={(e) => this.editDoctor(e)}>

                    <div class="row">
                      <div class="col-md-5 m-2">
                        <label for=""> Name :</label>
                        <input type="text" name="name" value={this.state.name} class="form-control" required onChange={(e) => this.inputChangeHandler(e)}></input>

                      

                      </div>

                      <div class="col-md-5 m-2">
                        <label for=""> Qualification :</label>
                        <input type="text" name="qualification" value={this.state.qualification} class="form-control" required onChange={(e) => this.inputChangeHandler(e)}></input>

                       


                      </div>

                      <div class="col-md-5 m-2">
                        <label for=""> Speciality :</label>
                        <input type="text" name="speciality" value={this.state.speciality} class="form-control" required onChange={(e) => this.inputChangeHandler(e)}></input>

                    
                      </div>

                      <div class="col-md-5 m-2">
                        <label for="">Experience (Years):</label>
                        <input type="text" name="experience" value={this.state.experience} class="form-control" required onChange={(e) => this.inputChangeHandler(e)}></input>
                     

                      </div>




                      <div class="col-md-5 m-2">
                        <label for=""> Email Id :</label>
                        <input type="email" name="email" value={this.state.email} class="form-control" required onChange={(e) => this.inputChangeHandler(e)}></input>
                      

                      </div>

                      <div class="col-md-5 m-2">
                        <label for="">Contact Number :</label>
                        <input type="text" name="contact" value={this.state.contact} class="form-control" required onChange={(e) => this.inputChangeHandler(e)}></input>
                      

                      </div>

                      <div class="col-md-5 m-2">
                        <label for="">Centre :</label>
                        <select name="centre" class="form-control" required onChange={(e) => this.inputChangeHandler(e)} value={this.state.centre}>
                          <option>-Select Center-</option>
                          <option > Thane</option>
                        </select>


                      </div>

                      <div class="col-md-5 m-2">
                        <label for="">OPD Time :</label><br />
                        <input type="text" name="OPDtimeAM" value={this.state.OPDtimeAM} class="form-control num"  required onChange={(e) => this.inputChangeHandler(e)}
                        ></input>
                        <input type="text" name="OPDtimePM" value={this.state.OPDtimePM} class="form-control num"  required onChange={(e) => this.inputChangeHandler(e)}
                        ></input>
                      

                      </div>

                      <div class="col-md-5 m-2">
                        <label for="">OPD Days :</label>
                        <input type="text" name="OPDdays" class="form-control" value={this.state.OPDdays} required onChange={(e) => this.inputChangeHandler(e)}></input>
                      

                      </div>



                      <div class="col-md-5 m-2">
                        <label for="">Gender :</label><br />
                        <input type="radio" name="gender"  value={this.state.gender} onChange={(e) => this.inputChangeHandler(e)}></input> Male
                        <input type="radio" name="gender"  value={this.state.gender} onChange={(e) => this.inputChangeHandler(e)}></input>
                        Female

                      </div>

                      <div class="col-md-10 m-2">
                        <label for=""> About Doctor :</label>
                        <textarea name="about" class="form-control" required value={this.state.about} onChange={(e) => this.inputChangeHandler(e)}>
                        </textarea>
                      </div>


                      <div class="col-md-5 m-2">
                        <button class="btn btn-secondary" type="submit"> Submit</button>
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

export default EditDoctor