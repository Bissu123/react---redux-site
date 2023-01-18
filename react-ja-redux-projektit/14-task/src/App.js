import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
 
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Koti</Link>
          </li>
          <li>
            <Link to="/tietoja">Tietoja</Link>
          </li>
          <li>
            <Link to="/kayttajat">Käyttäjät</Link>
          </li>
        </ul>
      </nav>
 
      <Routes>
        <Route path="/" element={<Koti />} />
        <Route path="tietoja/*" element={<Tietoja />} />
        <Route path="kayttajat/*" element={<Kayttajat />} />
      </Routes>
      
    </BrowserRouter>
  );
}
 
const Koti = () => <h2>Kotisivu</h2>;
 
const Tietoja = () => <h2>Tietoja</h2>;
 
// sisäkkäinen linkitys, huomaa miten komponentin path perii emokomponentin url:in
const Kayttajat = () => {
  return (
    <div>
      <nav>
        <Link to="oma">Oma profiili</Link>
      </nav>
 
      <Routes>
        <Route path="oma" element={<OmaProfiili />} />
      </Routes>
    </div>
  );
}
 
const OmaProfiili = () => <p>Oma profiili tiedot</p>;
 
export default App;