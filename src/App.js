import React, { Component } from 'react';
import SayHello from './components/SayHello';
import Border from './components/Border';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Wannaporn Manowanna",
      age: 21
    }
  }
  incrementAge(){
    this.setState({age: this.state.age + 1});
  }
  decrementAge(){
    this.setState({age: this.state.age - 1});
  }

  render() {
    return (
      <div className="App">
      <SayHello name = {this.state.name} 
      age = {this.state.age}
      />

        
        <div
         style={{
           width: this.state.age,
           border: 2,
           borderStyle: "solid",
           color: "#deab53"
         }}
       />
       <Border>
        <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>
        <button onClick={() => this.decrementAge()}>ลดอายุ</button>
        </Border>
      </div>
    );
  }
 
}

export default App;
