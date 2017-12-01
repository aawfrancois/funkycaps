import React from 'react';
import {Component} from 'react';

class Caps extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <img src={this.props.picture} alt=""/>
            </div>
        );
    }
}

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            caps: []
        }
    }

    componentDidMount() {
        this._fetchCaps();
    }

    render() {
        let id = 0;
        const arrayCaps = this.state.caps.map(c => {
            let picture = "screencaps/" + c.pathcaps;
            return <Caps picture={picture} name={c.movie} key={id++}/>;
        });

        return (
            <div>
                <h1>Page de la Gallerie</h1>
                {arrayCaps}
            </div>
        );
    }

    _fetchCaps() {
        let data = require("./../../data/caps.json");
        console.log(data);
        this.setState({caps: data});
    }

}