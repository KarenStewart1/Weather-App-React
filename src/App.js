import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import GetWeatherInfo from "./GetWeatherInfo";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="card">
          <div className="card-body">
            <GetWeatherInfo defaultCity="Amsterdam" />
          </div>
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
