import React, { Component } from 'react'
export default class Notfound extends Component {
  render() {
    return (
     
        <div className="accountbg">
        <div className="wrapper-page">

            <div className="card">
                <div className="card-block">

                    <div className="ex-page-content text-center">
                        <h1 className="">404!</h1>
                        <h4 className="">Sorry, page not found</h4><br/>

                        <a className="btn btn-primary mb-5 waves-effect waves-light" href="/dashboard"> Back to Dashboard</a>
                    </div>

                </div>
            </div>

            <div className="m-t-40 text-center text-white-50">
                <p>© 2020 Portfolio. Crafted with by Azhardevs</p>
            </div>

        </div>
      </div>
    )
  }
}
