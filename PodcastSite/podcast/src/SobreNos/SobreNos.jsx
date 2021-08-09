import React from 'react';

import Header from '../Header/head'
import Footer from '../Footer/footer'
import Foto from 'C:/PodcastSite/podcast/src/grupo1.jpg'
import './SobreNos.css'

export default class SobreNos extends React.Component{
    render(){
        return(
            <div className = "SobreNos">
                <Header></Header>
                <div className = "TextAboutUs">
                    <h1>Quem somos?
                        <h2>Um grupo de amigos perdidos na vida e seguindo sem rumo, futuros garotos de programa </h2>
                    </h1>
                    
                    <h1>Por que criamos um Podcast?
                        <h2>Um grupo de amigos perdidos na vida e seguindo sem rumo, futuros garotos de programa </h2>
                    </h1>

                    <img className = "FotoGrupo" src={Foto} alt="Geral"/>
                </div>


                <Footer></Footer>
            </div>
        )
    }
}