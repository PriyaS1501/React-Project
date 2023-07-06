import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import axios from 'axios'


class OurCentres extends Component {

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

  fetchData = () => {
    axios.get("http://localhost:8484/Centres")
      .then((res) => {
        console.log(res.data)
        this.setState({ Centres: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.fetchData();
  }


  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="breadcrumb">
                <h2>Our Centres</h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="gray-bg p-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Accordion >
                    {
                      this.state.Centres.map((data, index) => {
                        return <Accordion.Item eventKey={data.id} >
                          <Accordion.Header>{data.name}</Accordion.Header>
                          <Accordion.Body>
                            <div className="location">
                              <p>{data.description}</p>
                              <ul className="loc1">
                                <li><i className="fa fa-map-marker"></i> {data.address}</li>
                                <li><i className="fa fa-envelope-o"></i> {data.cemail}</li>
                                <li><i className="fa fa-phone"></i>{data.ccontact} </li>
                              </ul>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      })
                    }



                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default OurCentres