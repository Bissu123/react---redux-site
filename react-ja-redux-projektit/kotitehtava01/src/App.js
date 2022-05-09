import React from "react";
import './index.css';

const Laatikko = (props) => {
  return (
    <div className="laatikko">
      <h3>{props.name}</h3>
      <h4>Title: {props.title}</h4>
      <h4>Age: {props.age}</h4>
    </div>
  )
}

const App = () => {
  return (
    // <div className="vierekkain">
    //   <Laatikko name="Maria" title="CEO" age="29" />
    //   <Laatikko name="Kati" title="Developer" age="25" />
    //   <Laatikko name="Karin" title="Designer" age="45F" />
    // </div>

    <section className="App staff">
      <dl className="person">
        <dt>Maria</dt>
        <dd>Title: CEO</dd>
        <dd>Age: 29</dd>
      </dl>

      <dl className="person">
        <dt>Kati</dt>
        <dd>Title: Developer</dd>
        <dd>Age: 25</dd>
      </dl>
      <dl className="person">
        <dt>Maria</dt>
        <dd>Title: Designer</dd>
        <dd>Age: 45</dd>
      </dl>
      
    </section>
  );
}
export default App;