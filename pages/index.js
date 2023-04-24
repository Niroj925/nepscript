import React, { useState } from 'react';
import nepaliscript from 'nepscript'
import Link from 'next/link';
function App() {

  const [iv,setIv]=useState('');
  const[ convertedText,setConvertedText]=useState('')
  const handleChange=(event)=>{
    const value=event.target.value
    setIv(value);
  }

  const converToNepali=()=>{
  const res=nepaliscript(iv);
   setConvertedText(res);
  setIv('');
  }
  
  return (
    <>
      <h2>Convert romanized text to corrosponding Nepali script </h2>
      <hr/>
      <input
  type='text'
  onChange={handleChange}
  value={iv}
  style={{ 
    fontSize: '20px', 
    padding: '10px', 
    borderRadius: '5px', 
    border: '2px solid #ccc' 
  }}
  onKeyDown={(event) => {
    if (event.key === 'Enter') {
      converToNepali();
      event.preventDefault();
    }
  }}
/>

<button 
  onClick={converToNepali}
  style={{
    fontSize: '20px', 
    padding: '10px', 
    marginLeft:'10px',
    borderRadius: '5px', 
    backgroundColor: '#4CAF50', 
    color: 'white', 
    border: 'none', 
    cursor:'pointer'
  }}
>
  To Nepali
</button>

      {convertedText && (
  <div style={{
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0'
  }}>
    <h3>{convertedText}</h3>
  </div>
)}
      <hr/>
   <Link href='/helptowrite'>
   Need help to type romanized text ?
   </Link>
       <p>Note:<i>Input text are <b>case sensitive</b></i></p>
</>
  );
}

export default App;
