import React from 'react'
import { useState } from 'react';

const Textarea = () => {
    const [input, setInput] = useState("")

    function copyFun() {
        navigator.clipboard.writeText(input)
        let copiedDAta = document.getElementById("writingPad");
        copiedDAta.select()
    }
    const pasteFun = () => {
        navigator.clipboard.readText().then((e) => { setInput(input + e) })
    }

    return (
        <>
            <center>
                <textarea name="" value={input} onChange={(e) => { setInput(e.target.value); }} id="writingPad" placeholder='Enter your lines' rows={20} cols={100} autoFocus></textarea>
                <div className='btnSec'>
                    <button className='btnType' id="uCaseBtn" onClick={() => setInput(input.toUpperCase())}>Upper Case</button>
                    <button className='btnType' id="lCaseBtn" onClick={() => setInput(input.toLowerCase())}>Lower Case</button>
                    <button className='btnType' id="copyBtn" onClick={copyFun}>Copy</button>
                    <button className='btnType' id="clearBtn" onClick={() => setInput("")}>Clear</button>
                    <button className='btnType' id="copyBtn" onClick={pasteFun}>Paste</button>
                    <button className='btnType' id="duplBtn" onClick={() => setInput(input + "\n" + input)}>Duplicate</button>
                    <button className='btnType' id="rWSBtn" onClick={() => setInput(input.replace(/\s+/g, " "))}>Remove Space</button>
                </div>
                <button id='changeMode'>Change Mode</button>
                <div className="infoSec">
                    <h5 className='infoType'>Word Count : <span id='totalWords'>{input.split(/\s+/).filter((e) => { return e !== "" }).length}</span></h5>
                    <h5 className='infoType'>Alphabet Count : <span id='totalAlphabets'>{input.length}</span></h5>
                    <h5 className='infoType'>Reading Time : <span id='readingTime'>{input.length * 0.008} /ms</span></h5>
                </div>
            </center>
        </>
    )
}

export default Textarea
