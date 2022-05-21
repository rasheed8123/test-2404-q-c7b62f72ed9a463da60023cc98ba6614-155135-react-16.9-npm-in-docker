import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useState , useEffect} from "react"

function App() {
  const [data,setData]= useState([])
  
  useEffect(()=>{
    getdata()
  },[])

  const getdata = async ()=>{
      try {
        let res = await fetch("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json")
        let data = await res.json()
   
        setData(data.data)
      } catch (error) {
         console.log(error)
      }
  }
  console.log(data)
  return (
    <div className="App">
        {data.map((e)=>(
          <div className='flex'>
             <div><h1>{e.company}</h1></div>
             <div className='h3'>  
               <h3>{e.role}</h3>
               <h3>{e.technology}</h3>
               <h3>{e.ctc}LPA</h3>
             </div>
          </div>
        ))}
    </div>
  );
}

export default App;
