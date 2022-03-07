import React from 'react'

function Hello() {
    DONE WITH JSX
    return (
        <div id="hello" className="dummyClass" >Hello Francis</div>
        )
/*
    //DONE WITHOUT JSX - IE A PAIN IN THE ARSE
return React.createElement("div",
    {id: "hello", className:"dummyClass"},
    React.createElement("h1", null,
     "Hello Francis - Using React.createElement()"))
}
*/
export default Hello