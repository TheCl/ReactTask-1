import React, { Component } from 'react';
import './App.css';
import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";

class App extends Component {

  state = {

    person : [
      {
        nameOne: "Игорь",
        nameTwo: "Николаев",
        age: "50",
        gender: "male"
      }
    ]
  }

  switchNameInput = (event) => {




   this.setState({

      person : [
        {
          nameOne: event.target.value,
          nameTwo: "Николаев",
          age: "50",
          gender: "male"
        }
      ]

    })

  }


  render() {

    const appStyle = {
      fontSize: 22,
      backgroundColor: "#ff9090"
   }


    return (
      <div className="App" style={appStyle}>
        <UserOutput nameOne={this.state.person[0].nameOne} 
                    nameTwo={this.state.person[0].nameTwo}
                    age={this.state.person[0].age}
                    gender={this.state.person[0].gender}>
            Промежуточный абзац <br/>
        </UserOutput>
        <UserInput change={this.switchNameInput}  nameOne={this.state.person[0].nameOne}/>
      </div>
    );
  }
}

export default App;
