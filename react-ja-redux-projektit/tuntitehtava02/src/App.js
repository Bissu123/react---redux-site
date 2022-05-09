import './App.css';

const user = {
  firstName: 'Mio',
  lastName: 'Julkunen'
}

const formatName = () => {
  return (
    user.firstName + " " + user.lastName
  )
}


const Element = () => {
  if (user.firstName === 'Maikki') {
    return (
      <section>
        <h1>Terve,  {formatName(user)}!</h1>
        <p></p>
      </section>
    )
  } else {
    return (
      <h1>Terve, muukalainen!</h1>
    )
  }
}

const App = () => {
  return (
    <div className="App">
      <Element />
    </div>
  );
}

export default App;