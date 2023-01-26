import PropTypes from 'prop-types'
import Spacebar from './Spacebar'


import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {


    const onChangeWork = (event) => {
        // console.log("Onchange called");
        setText(event.target.value)
    }
    const clearText = (event) => {
        // console.log("Onchange called");
        setText("")
    }


    const toUpperCase = () => {
        let textt = text.toUpperCase();
        console.log(textt);
        setText(textt);
        console.log(textt);
    }

    const toLowerCase = () => {
        let textt = text.toLowerCase();
        setText(textt)
    }


    const [text, setText] = useState('Enter the text');


    return (
        <div className="container my-3">

            <center><h1>{props.title}</h1></center>
            <Spacebar />
            <div className="form-floating">
                <textarea className="form-control" id="myBox" value={text} placeholder='s' onChange={onChangeWork} style={{ height: "200px" }} ></textarea>
                <label for="floatingTextarea">Enter the text here</label>
            </div>
            <Spacebar />

            <button className="btn btn-primary" onClick={toUpperCase} style={{ width: "100%"}}>
                Convert To Uppercase
            </button>
            <Spacebar />
            <button className="btn btn-warning" onClick={toLowerCase} style={{ width: "100%"}} >
                Convert To Lowercase
            </button>
            <Spacebar />
            <button className="btn btn-danger" onClick={clearText} style={{ width: "100%"}}>
                Clear The Text
            </button>
            <Spacebar />
            <center><h1>Your Text Summary</h1></center>
            <p>
                Total Words = {text.split(" ").length - 1}
            </p>

            <p>
                Text Length = {text.length}
            </p>
            
            <center><h1>Preview</h1></center>
            <p>
                {text}
            </p>
        </div>
    )
}
// style={{ width: "40%", margin: "10px"}}