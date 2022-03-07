import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, anything} = this.props;
        return (
            <div><h1>Class Component Welcome {name}</h1></div>
        )
    }
}

/*STRUCTURED VERSION
class Welcome extends Component {
    render() {
        return (
            <div><h1>Class Component Welcome {this.props.name}</h1></div>
        )
    }
}
*/
export default Welcome