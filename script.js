let weather = {
  key: "3cd4de9ba2484654710c7103e2edc85e",
  getWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.key)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    console.log(data);
    console.log(data.name);
    const name = data.name;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const { temp } = data.main;
    console.log(name, icon, description, temp);
    document.querySelector(".city").innerText = name;
    document.querySelector(".desc").innerText = description;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = temp + "°F";
  },
  search: function () {
    this.getWeather(document.querySelector(".searchBar").value);
  },
};

document.querySelector(".submit").addEventListener("click", function () {
  weather.search();
});
