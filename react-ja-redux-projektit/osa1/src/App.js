import React from "react";

const Tervehdys = (props) => {
  return (
      <p>Terve {props.nimi} {props.ammatti}!!!</p>
  )
}

const Pvm = () => {
  const pvm = new Date()
  return (
    <div>
      <p>Tänään on {pvm.toString()}</p>
    </div>
  )
}
const App = () => {
  // console.log('konsoliteksti')
  const a = 10
  const b = 15
  const pvm = new Date()
  return (
  <div>
    <h1 className="otsikko">Hei maailma!</h1>
    <br />
    <Tervehdys nimi ="BISU" ammatti ="Kirjastotäti"/>
    <Tervehdys nimi ="Vilppu"/>
    <Pvm/>
    <p>
      {a} + {b} = {a + b}
    </p>
  </div>
  )
}
export default App;