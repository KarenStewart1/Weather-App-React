import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./Footer";
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
