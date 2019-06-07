import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
// import Sushi from './components/Sushi.js'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state ={
    sushis: []
  }


  renderSushis = () =>{
      fetch(API)
      .then(res => res.json())
      .then(data=> {
          this.setState({sushis: data})
        })  //end of fetch
  }


  render() {
    
    return (
      <div className="app">
        <SushiContainer renderSushis={this.renderSushis()} />
        <Table />
      </div>
    );
  }
}

export default App;
