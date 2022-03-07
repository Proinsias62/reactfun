<<<<<<< HEAD
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

=======
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

>>>>>>> 3e5b8575d824dfdd5938371e31f9311d92e0e157
export default Greet