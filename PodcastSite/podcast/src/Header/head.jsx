import React from 'react';
import { Link } from 'react-router-dom'

import Image from "C:/PodcastSite/podcast/src/ImageLogo.jpg"
import Insta from "C:/PodcastSite/podcast/src/Instagram-logo-transparent-PNG.png"
import Youtube from "C:/PodcastSite/podcast/src/Youtube-logo-with--new-style-on-transparent-background-PNG.png"
import Spotify from "C:/PodcastSite/podcast/src/pngwing.com.png"
import Lupa from "C:/PodcastSite/podcast/src/Group 3.png"

import "./head.css"

export default class Head extends React.Component{

    async getContent(){
        
        try{
            const response = await fetch('http://localhost:3000/usuarios')
            
            const data = await response.json();
            console.log(data);
        }

        catch (error) {
            console.log("Deu errado")
        }
    }

    Login(){
        <Link to = '/registro'></Link>
    }

    render(){

        return(
            <div className = 'head'>

                    <Link to = '/'>
                        <img className = "logo" src={Image} alt="Logo"/>
                    </Link>
                    <h1 className = "hour"> Todos os domingo as 10H </h1>

                    <Link className = "linkPage" to = '/sobreNos'>
                        <h1>Sobre Nós</h1>
                    </Link>

                    <Link className = "linkPage" to = "/participantes">
                        <h1> Participantes</h1>
                    </Link>
                    
                    <Link className = "linkPage" to = "/temas">
                        <h1 > Temas</h1>
                    </Link>

                    <Link className = "linkPage" to = "/parceiros">
                        <h1> Parceiros</h1>
                    </Link>
                
                    <div className = "Buscar">

                        <a className = "linkRedes" href = "https://www.instagram.com/5a.serie/">
                            <img className = "RedesSociais" src = {Insta} alt = "Insta"/>
                        </a>
                        <a className = "linkRedes" href = "https://www.youtube.com/channel/UCiIIUT5EdwqWj7xyFoJ8DPQ">
                            <img className = "RedesSociais" src = {Youtube} alt = "Insta"/>
                        </a>
                        <a className = "linkRedes" href = "https://open.spotify.com/show/4CQyMm76xqS4i1nkXaDQjw?si=sAfJK1kfSDSQPrxZ0S1pcA&nd=1">
                            <img className = "RedesSociais" src = {Spotify} alt = "Insta"/>
                        </a>

                        <button id = "Login" onClick = {() => this.Login()}> Login/Registro </button>
                    </div>

            </div>
        )

    }
}