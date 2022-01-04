import React from "react";
import Row from "./Netflix/Row";
import requests from "./Netflix/request";
import "../src/App.css";
import Banner from "./Netflix/Banner";
import Navbar from "./Netflix/Navbar";


function App (){
  
  return(<div className="App">
    <Navbar/>
       <Banner/>
  
  <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
  <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
  <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
  <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
  <Row title="Comedy Movies" fetchUrl={requests.fetchcomdeyMovies}/>
  <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
  <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
  <Row title="Documentaries" fetchUrl={requests.fetchDocumentraries}/>
  
  </div> ) 

}
export default App