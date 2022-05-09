import './App.css';
import Person from './person/person.js';

const personel = [
  { name: "Mio", age: 17},
  { name: "Jaska", age: 18},
  { name: "Jorma", age: 19}
]


const App = () => {
  return (
    <div className="App">
      <Person name={personel[0].name} age={personel[0].age} />
      <Person name={personel[1].name} age={personel[1].age} />
      <Person name={personel[2].name} age={personel[2].age} />
    </div>
  );
}

export default App;
