import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SearchForm from "./SearchForm";
import TodayWeather from "./TodayWeather";
import FiveDayForecast from "./FiveDayForecast";
function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="card">
          <TodayWeather defaultCity="New York" />
          <SearchForm />
          <FiveDayForecast />
        </div>
        <small>
          <a
            href="https://github.com/KarenStewart1/Weather-App-React"
            target="_blank"
            title="Github"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Karen Stewart
        </small>
      </div>
    </div>
  );
}

export default App;
