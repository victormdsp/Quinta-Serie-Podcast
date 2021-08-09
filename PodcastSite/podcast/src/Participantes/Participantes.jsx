import React from 'react';

import Header from '../Header/head'
import Footer from '../Footer/footer'

import Caio from 'C:/PodcastSite/podcast/src/caio.JPG'
import Leite from 'C:/PodcastSite/podcast/src/leite.JPG'
import Cadu from 'C:/PodcastSite/podcast/src/cadu.JPG'
import Amorin from 'C:/PodcastSite/podcast/src/gamorin.JPG'
import Iago from 'C:/PodcastSite/podcast/src/iago.JPG'
import Vitinho from 'C:/PodcastSite/podcast/src/vitinho.JPG'

import "./Participantes.css"

export default class Participantes extends React.Component{
    render(){
        return(
            <div className = "Participantes">
                <Header></Header>
                <div className = "Part">

                    <h1 className = "player"> Gabriel Leite
                        <img src = {Leite} alt ="Leite" />
                        <h2> Descrição </h2>
                    </h1>

                    <h1 className = "player"> Carlos Eduardo
                        <img src = {Cadu} alt = "Cadu"/>
                        <h2> Descrição </h2>
                    </h1>
                    
                    <h1 className = "player"> Victor Martini
                        <img src = {Vitinho} alt = "Vitinho" />
                        <h2> O melhor participante , esse aqui é fera dms </h2>
                    </h1>

                    <h1 className = "player"> Caio Filardi
                        <img src = {Caio} alt = "Caio" />
                        <h2> Descrição </h2>
                    </h1>

                    <h1 className = "player"> Iago Salomon
                        <img src = {Iago} alt = "Iago" />
                        <h2> Descrição </h2>
                    </h1>

                    <h1 className = "player"> Gabriel Amorin
                        <img src = {Amorin} alt = "Amorin"/>
                        <h2> Descrição </h2>
                    </h1>

                </div>

                <Footer></Footer>
            </div>
        )
    }
}