import React, { Component } from 'react';
import './App.less';
import Header from './component/Header/index';
import Footer from './component/Footer/index';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        hello world
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
