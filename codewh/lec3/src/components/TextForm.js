import React, { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState("");
    const [word, countword] = useState(0);
    const [letter, countletter] = useState(0);


    const handelOnChange = (event) => {
        console.log("handelOnChange was clicked");
        setText(event.target.value);

        let sp = 0;
        let lt = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ') {
                lt++;
            }
            else {
                sp++;
            }
        }
        console.log(lt);
        countword(sp + 1);
        countletter(lt);
    }
    const handelUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");
    }
    const handelLoClick = () => {
        const newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","Success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myText" value={text} onChange={handelOnChange} rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#4d4040' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                <button className="btn btn-primary my-3 mx-3" id="up" disabled={text.length===0} onClick={handelUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary" id="lo" disabled={text.length===0} onClick={handelLoClick}>Convert To LowerCase</button>


            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{word} words and {letter} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
