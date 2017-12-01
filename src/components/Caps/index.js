// <Caps />
// < id={} picture={} film_id={}  />

import React, { Component } from 'react';
import axios from 'axios';
import pictures from'./caps-001-unbreakable.jpg';


class Caps extends Component{
  render(){
    return(
      <div>
        <img src={pictures} />
      </div>
    )
  }
}

export default class MoviesCaps extends Component {
  constructor() {
      super();
      this.state = {
      picture: []
    }
    this._fetchPitures();
  }


  render () {
      const picturesComponent = this.state.characters.map(c => {
        let avatar = c.thumbnail.pathcaps;
        return <Caps avatar={avatar}  />;
      });
      return(
        <div>
          <h1>HomePage</h1>
          {picturesComponent}
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
