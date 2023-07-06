import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

class OurDoctors extends Component {
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
      gender: '',

    }
    
  }

  fetchData = () => {
    axios.get("http://localhost:8484/Doctors")
      .then((res) => {
        console.log(res.data)
        this.setState({ Doctors: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.fetchData();
  }
  onClickButton = e => {
    e.preventDefault()
    this.setState({ openModal: true })
  }
  onCloseModal = () => {
    this.setState({ openModal: false })
  }
  render() {
    React.state = {
      openModal: false
    }
    return (

      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <h2>Our Doctors</h2>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="gray-bg p-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {
                    this.state.Doctors.map((data, index) => {
                      return <div className="col-md-4 doctors" key={data.id}>
                        <h3>Dr. {data.name}</h3>
                        <div className="education">
                          <p>{data.qualification}</p>
                          <p> {data.speciality}</p>
                        </div>
                        <h4>Clinical OPD</h4>
                        <h4>{data.OPDtimeAM}  to {data.OPDtimePM}</h4>
                        <ul>
                          <li><Link to="/bookanappointment">Get Appointment</Link></li>

                          <li><Link onClick={this.onClickButton} key={data.id}>View Profile</Link></li>


                          <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                             <div>
                              <div className="modal1-content">
                                <div className="modal1-header">
                                  <h3 className="modal1-title"><b>Dr. {data.name}</b></h3>

                                  {/* <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button> */}
                                </div>
                                <hr />
                                <div className="modal1-body">
                                  <h6>Email Id : {data.email}</h6>
                                  <h6>Contact No. : {data.contact}</h6>
                                  <hr />
                                  <h5>Qualification : {data.qualification}</h5>
                                  <h5>Speciality : {data.speciality}</h5>
                                  <h5>Experience : {data.experience} Years</h5>
                                  <p>{data.about}</p>
                                  <hr />
                                  <h6>Clinical OPD timings : {data.OPDtimeAM}  to {data.OPDtimePM} </h6>
                                  <h6>Clinical OPD Days : {data.OPDdays}</h6>
                                  <h6>Clinical OPD Centre : {data.centre}</h6>
                                </div>

                              </div>
                            </div> 
                          
                          </Modal>

                        </ul>
                      </div>
                    })

                  }
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}


export default OurDoctors