import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`weather in new york is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=b278ff04a20f686b021e62fb800cae6e`;

  axios.get(url).then(handleResponse);
}
