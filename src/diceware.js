import React, { Component } from 'react';
import './App.css';

const file = require('./diceware.wordlist.json');

class Diceware extends Component {

    constructor(props) {
        super(props);
        this.state = {passphrase:''};
    }

    componentWillMount(){
        this.getPassphrase()
    }

    getword(){

        return Math.floor((Math.random() * 6) + 1)*10000 + Math.floor((Math.random() * 6) + 1)*1000 + Math.floor((Math.random() * 6) + 1)*100+Math.floor((Math.random() * 6) + 1)*10+ Math.floor((Math.random() * 6) + 1);
    }

    getPassphrase(){
        var words='';
        for(var i=0;i<5;i++)
        {
             words = words + ' ' + file[this.getword()];

        }
            
        this.setState({ passphrase:  words})
        
    }



  render() {
    return (
      <div >
          <h1>La PassPhrase:</h1>
        <h1>{this.state.passphrase}</h1>

      </div>
    );
  }
}

export default Diceware;
