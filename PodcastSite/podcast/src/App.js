import './App.css';

import Head from "./Header/head"
import Footer from "./Footer/footer"
import React from 'react';

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <Head></Head>
  
        <div className = "Body">
          <h1> PodCastes mais Recentes!</h1>
                    <div className = "videos">
                        <div className = "videoRecente">
                            <iframe width="500" height="250" src="https://www.youtube.com/embed/wYDpCsa-Iqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h2> Anime é coisa de criança?</h2>
                        </div>
                        <div className = "videoRecente">
                            <iframe width="500" height="250" src="https://www.youtube.com/embed/4w4TzSrbE_k?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h2> Futebol se joga assim!</h2>
                        </div>
                        <div className = "videoRecente">
                            <iframe width="500" height="250" src="https://www.youtube.com/embed/fRsPiOpuMkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h2> Quinta Série Origins</h2>
                        </div>
                    </div>
        </div>
  
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
