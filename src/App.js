
import './App.css';
import CountrySelector from './Components/country/CountrySelector';
import CountryGraph from './Components/country/CountryGraph';
import ReportGraph from './Components/report/ReportGraph';

function App() {
  return (
    <div className="App">
      <div className="">
      <CountrySelector/>
      <ReportGraph/>
      </div>
      <div>
        <CountryGraph/>
      </div>
    </div>
  );
}

export default App;
