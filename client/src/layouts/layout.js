import React, { Component } from 'react'
import {Header, Footer} from './index';
export default class Layout extends Component {
    render() {
        return (
            <div className="wrapper">
                     <main>
                    <Header/>
                    {this.props.children}
                    <Footer/>
                    </main>
            </div>
        )
    }
}
