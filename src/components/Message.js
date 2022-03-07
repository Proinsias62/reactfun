<<<<<<< HEAD
import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Welcome Visitor"
      }
    }

    handleClick(){
        console.log("CLICK")
        this.setState({
            message: "Thanks for subscribing"
        });
    }
    
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.handleClick()}>Subscribe</button>
      </div>
    )
  }
}

=======
import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Welcome Visitor"
      }
    }

    handleClick(){
        console.log("CLICK")
        this.setState({
            message: "Thanks for subscribing"
        });
    }
    
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.handleClick()}>Subscribe</button>
      </div>
    )
  }
}

>>>>>>> 3e5b8575d824dfdd5938371e31f9311d92e0e157
export default Message