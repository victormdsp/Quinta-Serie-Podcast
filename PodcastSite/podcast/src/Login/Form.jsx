import React from 'react';

export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formulario: props.clique
        }
    }

    render(){
        let clique = this.state.formulario
        if(clique === true){
            let forms = document.getElementById('formulario')
            forms.setAttribute("display", "none")
        }
        
        return(
            <div id = "formulario" display = "block">
                <h1> Teste display</h1>
            </div>
        )
    }
}