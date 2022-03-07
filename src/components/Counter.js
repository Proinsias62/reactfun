<<<<<<< HEAD
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        //console.log("CLICK");
        //this.setState(parameter1, callback) method has 2 paramaters as shown below
        //the callback is shown for effect
        this.setState({count: this.state.count += 1}, ()=>{console.log("Inside:", this.state.count)})
        console.log("Outside: ", this.state.count)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
      <div>
          <div>Count - {this.state.count}</div>
          <button name="increment" onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

=======
import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        //console.log("CLICK");
        //this.setState(parameter1, callback) method has 2 paramaters as shown below
        //the callback is shown for effect
        this.setState({count: this.state.count += 1}, ()=>{console.log("Inside:", this.state.count)})
        console.log("Outside: ", this.state.count)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
      <div>
          <div>Count - {this.state.count}</div>
          <button name="increment" onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

>>>>>>> 3e5b8575d824dfdd5938371e31f9311d92e0e157
export default Counter