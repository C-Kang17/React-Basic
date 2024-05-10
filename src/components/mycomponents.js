import React from "react";
// import React, { Component } from 'react'

class Mycomponents extends React.Component {
    
    state = {
        name: '',
        nickname: 'C-Kang17'
    }
    HandleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        console.log('hit a button')
        alert('clicked')
    }


  render() {
    return (
      <div>
        <div>
            <input value={this.state.name} type="text" onChange={(event) => this.HandleOnChange(event)}></input>
            My name is: {this.state.name}
        </div>
        <div>
            my nickname is {this.state.nickname}
        </div>
        <div>
            <button onClick={() => this.handleClickButton()}>Click Me</button>
        </div>
      </div>
    )
  }
}
export default Mycomponents;