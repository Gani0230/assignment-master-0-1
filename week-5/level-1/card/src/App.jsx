import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [company, setCompany] = useState("")
  const [description, setDescription] = useState("")
  const [Address, setAddress] = useState("")
  const [code, setCode] = useState(0)


  return (
    <div>
      <input  type="text" placeholder='company' onChange={(e)=>{
        setCompany(e.target.value)
      }}/> <br />
      <input  type="text" placeholder='description' onChange={(e)=>{
        setDescription(e.target.value)
      }}/> <br />
      <input  type="text" placeholder='address' onChange={(e)=>{
        setAddress(e.target.value)
      }}/> <br />
      <input  type="text" placeholder='pincode' onChange={(e)=>{
        setCode(e.target.value)
      }}/>
      
      <Maindiv company={company} description={description} Address={Address} code={code} />
      
    </div>

  )
}

function Maindiv({children, company, Address, code, description}){

  function Innertext({company, description, Address, code}){
    return(
      <>
        <h3 style={{
          margin: 0
        }}>{company}</h3>
        <p style={{
          margin: "20"
        }}>{description}</p>
        <p>Address: {Address}</p>
        <p>{code}</p>
        <p>Contact me on 7499999999</p>
      </>
    )
  }

  function FancyButtons({text}){
    return(
      <button style={{
        marginRight: 20,
        padding: 10,
        borderRadius: 10,
        background: "blue",
        color: "white",
        border: "none"
      }}>{text}</button>
    )
  }

  return(
  <div style={{
    height: 250,
    width: 250,
    border: "2px solid black",
    padding: 20,
    margin: 10,
  }}>
    <Innertext company={company} Address={Address} code={code} description={description}/>
    <FancyButtons text={"Instagram"}/>
    <FancyButtons text={"Facebook"}/>
  </div>
  )
}



export default App
