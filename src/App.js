
import './App.css';
import CountrySelector from './Components/country/CountrySelector';
import CountryGraph from './Components/country/CountryGraph';
import ReportGraph from './Components/report/ReportGraph';

function App() {
  return (
    <div className="App d-flex flex-row">
      <div className="w-50">
      <CountrySelector/>
      <ReportGraph/>
      </div>
      <div className="w-50">
        <CountryGraph/>
      </div>
    </div>
  );
}

export default App;
