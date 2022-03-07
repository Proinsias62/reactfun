import React from 'react'

//Structured Version
/*
const Greet = props => {
  //props = property, it receives the name property
  //from the JSX Element Greet in App.js
  console.log(props);
  return (
    <div>
      <h1>Function Component Greetings</h1>
      <p>{props.name} {props.anything}</p>
      <p>{props.children}</p>
    </div>
  )
}
*/

//Alternative Destructered Version
/*
const Greet = props => {
  //props = property, it receives the name property
  //from the JSX Element Greet in App.js
  //console.log(props);
  const {name, anything} = props;
  return (
    <div>
      <h1>Function Component Greetings</h1>
      <p>{name} {anything}</p>
    </div>
  )
}
*/

//Destructured Version
const Greet = ({name, anything}) => {
  //props = property, it receives the name property
  //from the JSX Element Greet in App.js
  //console.log(props);
  return (
    <div>
      <h1>Function Component Greetings</h1>
      <p>{name} {anything}</p>
    </div>
  )
}

export default Greet