import React, { Component } from 'react';
import axios from 'axios';
import capsJson from'./../../data/caps.json';


function getRandomPicture(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}


class Caps extends Component{
    render(){
        let nb = getRandomPicture(0,5);
        let randomCaps = capsJson[nb];
        console.log(nb);
        return(
            <div>
              <p>{randomCaps.movie}</p>
              <img src={"screencaps/"+randomCaps.pathcaps} />
            </div>
        )
    }
}

export default class MoviesCaps extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //     picture: []
    //   }
    //   // this._fetchPitures();
    // }


    render () {

        return(
            <div>
              <h3 className="alert alert-success">Welcome to your home dude </h3>
              <Caps/>
            </div>
        );


    }

    // _fetchPitures() {
    //   let baseURL = 'https://gateway.marvel.com:443';
    //   let actionAPI = 'v1/public/characters';
    //   let apikey = 'afb1501a7636aa5f2ffd4cef5c3233d4';
    //
    //   axios.get(`${baseURL}/${actionAPI}?apikey=${apikey}`).then(response =>{
    //     this.setState({ picture: response.data.data.results })
    //   })
    // }
}
// const Marvel = () => (
//   <span>Characters</span>
// );
