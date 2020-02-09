import React, { Component } from 'react';
import {Header, Footer} from './index';
export default class Layout extends Component {
    render() {
        return (
            <div className="wrapper">

                <Header/>
                     <main>
                 
                    {this.props.children}
                    <Footer/>
                    </main>
            </div>
        )
    }
}
