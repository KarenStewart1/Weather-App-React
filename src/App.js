import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import SearchForm from "./SearchForm";
import TodayWeather from "./TodayWeather";
import FiveDayForecast from "./FiveDayForecast";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <div className="card">
            <div className="card-body">
              <Header />
              <TodayWeather />
              <SearchForm />
              <FiveDayForecast />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
