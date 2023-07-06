import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class PageNotFound extends Component {
    render() {
        return (
            <div>

                <section>
                    <div className="container-fluid gray-bg p-5">
                        <div className="row">
                            <div className="page-not-found">
                                <h2>404 - Page Not Found</h2>
                                <h3> Sorry the page you are looking for is not available!! </h3>
                                <h4><Link to="/home"><button className="btn btn-success" >Go To Home</button></Link></h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PageNotFound