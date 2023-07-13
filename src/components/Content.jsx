
import { useState } from "react";
const Content = () => {
     const [text, setText]= useState('')
    const [displayText,setDisplayText]= useState('')
       const handleChange =(event)=>{
        setText(event.target.value)
    }
const displayBtn = ()=>{
          setDisplayText(text)
}
    return (
        <>
         <div className="text-center bg-light">
             
             
              <textarea value={text} onChange={handleChange} cols="100"  rows="6" placeholder="Please write any message" /> <br/>  
              <button className="btn btn-primary" onClick={displayBtn}>display</button>
              <div>
             {
                displayText && <p> {displayText}</p>
              }

              </div>
             
              

        </div>
             
        </>
    );
};

export default Content;