import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
/* 
function DisplayCountries() {
  const [countries, sendCountries] = useState([]);
  console.log(countries)
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => sendCountries(data))
  }, []);
  return (
    <div>
      <h1>Hello World</h1>
      <h3>Countries Available: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} game={country.population}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h2>Population: {props.game}</h2>
    </div>
  )
} */
export default App;
