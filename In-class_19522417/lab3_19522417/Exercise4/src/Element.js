import React from 'react'
import {Button} from 'antd'
// import "antd/dist/antd.css"
function Element() {
  const smartPeople = [
    { name: 'Johann Goethe', age: 82, IQ: 210},
    { name: 'Albert Einstein', age: 76, IQ: 205},
    { name: 'Leonardo da Vinci', age: 67, IQ: 180},
    { name: 'Isaac Newton', age: 84, IQ: 190},
    { name: 'James Maxwell', age: 48, IQ: 190},
    { name: 'Rudolf Clausius', age: 66, IQ: 190},
    { name: 'Nicolaus Copernicus', age: 70, IQ: 160},
    { name: 'Gottfried Leibniz', age: 70, IQ: 182},
    { name: 'William Sidis', age: 46, IQ: 200},

  ]
  return (
    <>
      <div>Green is the prime color of the world</div>
      <Button style={{ margin: "10px 10px" }} type="primary" onClick={() => alert('Alert')}>Click me</Button>
      <ul>
        {smartPeople.map((element, index) => (
          <li key={index}>Name :{element.name}<br />Age: {element.age} <br/>IQ: {element.IQ}</li>
        ))}
      </ul>
    </>
  )
}

export default Element