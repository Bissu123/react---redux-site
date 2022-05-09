import './App.css';
import React from 'react';

function App() {
  const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
  ];

  // console.log(animals)

  // let dogs = []
  // for (let i = 0; i < animals.length; i++) {
  //   if (animals[i].species === 'dog') {
  //     dogs.push(animals[i])
  //   }
  // }

  // console.log(dogs)


  // const result = animals.filter(animal => {
  //   return animal.species === 'dog'
  // });

  // console.log(result)

  const otherAnimals = animals.filter(animal => {
    return animal.species !== 'dog'
  });

  console.log(otherAnimals)



  return (
    <div className="App">

    </div>
  );
}

export default App;
