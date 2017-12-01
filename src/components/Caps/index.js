import React, {Component} from 'react';
import axios from 'axios';
import capsJson from'./../../data/caps.json';

// function getRandomPicture() {
//
//   // return 6 * Math.floor(Math.random());
//   return Math.random() * 6;
//
// }

function getRandomPicture(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}


<<<<<<< Updated upstream
class Caps extends Component{
  render(){
    let nb = getRandomPicture(0,5);
    let randomCaps = capsJson[nb];
    console.log(nb);
    return(
      <div>

        <p>{randomCaps.movie}</p>
        <img src={randomCaps.pathcaps} />
      </div>
    )
  }
=======
class Caps extends Component {
    render() {
        return (
            <div>
                <img src={pictures}/>
            </div>
        )
    }
>>>>>>> Stashed changes
}

export default class MoviesCaps extends Component {
    constructor() {
        super();
        this.state = {
            picture: []
        }
        this._fetchPitures();
    }


    render() {
        const picturesComponent = this.state.characters.map(c => {
            let avatar = c.thumbnail.pathcaps;
            return <Caps avatar={avatar}/>;
        });
        return (
            <div>
                <h1>HomePage</h1>
                {picturesComponent}
            </div>
        );


    }
<<<<<<< Updated upstream
    // this._fetchPitures();
  }


  render () {

      return(
        <div>
          <h1>Welcome to your home dude </h1>
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
=======

    // _fetchPitures() {
    //   let baseURL = 'https://gateway.marvel.com:443';
    //   let actionAPI = 'v1/public/characters';
    //   let apikey = 'afb1501a7636aa5f2ffd4cef5c3233d4';
    //
    //   axios.get(`${baseURL}/${actionAPI}?apikey=${apikey}`).then(response =>{
    //     this.setState({ picture: response.data.data.results })
    //   })
    // }
>>>>>>> Stashed changes
}
// const Marvel = () => (
//   <span>Characters</span>
// );
