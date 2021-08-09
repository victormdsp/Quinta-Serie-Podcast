import React from 'react';

import Header from '../Header/head'
import Footer from '../Footer/footer'

import "./Temas.css"

export default class Temas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usuario: ' ',
            senha: ' '
        };
        
        this.changeSenha = this.changeSenha.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    changeUser(event){
        this.setState({usuario: event.target.value})
        console.log(this.state.usuario)
    }

    changeSenha(event){
        this.setState({senha: event.target.value})
        console.log(this.state.senha)
    }

    submitForm(){
        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.usuario,
                senha: this.state.senha
            })
        });
    }

    render(){
        return(
            <div id = "Temas">
                <Header></Header>

                <form action = '#' onSubmit = {() => this.submitForm()}>
                    <input type = 'text' value = {this.state.usuario} onChange = {this.changeUser}/>
                    <input type = 'text' value = {this.state.senha} onChange = {this.changeSenha}></input>
                    <input type = 'submit'></input>
                </form>

                <Footer></Footer>
            </div>
        )
    }
}