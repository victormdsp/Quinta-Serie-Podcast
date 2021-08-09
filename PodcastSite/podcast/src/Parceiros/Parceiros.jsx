import React from 'react';

import Header from '../Header/head'
import Footer from '../Footer/footer'

import "./Parceiros.css"

export default class Parceiros extends React.Component{
    render(){
        return(
            <div id = "Parceiros">
                <Header></Header>

                <h1 className = "textPartners"> Seja nosso Parceiro!</h1>

                <Footer></Footer>
            </div>
        )
    }
}