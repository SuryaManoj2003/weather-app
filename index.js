// var x = document.querySelector(".weather").querySelector("img");

// function click1() {
//   //x.setAttribute("src", "./images/sun-1-removebg-preview.png");
//   x.src = "./images/sun-1-removebg-preview.png";
//   console.log("hii");
// }

//API

//WEBSITE = open weather map

//API-LINK= https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//API-KEY = 789001a27aeb08a561b67f1118b6faa8

async function getWeather() {
  var city = document
    .querySelector(".search-container")
    .querySelector("input").value;
  var data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=789001a27aeb08a561b67f1118b6faa8&units=metric`
  );
  var subData = await data.json();

  document.querySelector(".temperature").innerHTML =
    Math.round(subData.main.temp) + "°C";

  document.querySelector(".city").innerHTML = subData.name;

  document.querySelector(".humidity").innerHTML = subData.main.humidity + "%";

  document.querySelector(".wind").innerHTML = subData.wind.speed + " km/h";

  var climate = subData.weather[0].main;

  //console.log(climate);

  if (climate == "Clouds") {
    document.querySelector(".weather").querySelector("img").src =
      "./images/clouds.png";
    document.querySelector(".climate").innerHTML = climate;
  } else if (climate == "Rain") {
    document.querySelector(".weather").querySelector("img").src =
      "./images/rain-1.png";
    document.querySelector(".climate").innerHTML = climate;
  } else if (climate == "Clear") {
    document.querySelector(".weather").querySelector("img").src =
      "./images/sun.png";
    document.querySelector(".climate").innerHTML = climate;
  } else if (climate == "Drizzle") {
    document.querySelector(".weather").querySelector("img").src =
      "./images/drizzle.png";
    document.querySelector(".climate").innerHTML = climate;
  } else if (climate == "Mist") {
    document.querySelector(".weather").querySelector("img").src =
      "./images/mist.png";
    document.querySelector(".climate").innerHTML = climate;
  } else if (climate == "Haze") {
    document.querySelector(".weather").querySelector("img").src =
      "./images/mist.png";
    document.querySelector(".climate").innerHTML = climate;
  }

  //console.log(subData.weather[0].main);

  // console.log(temperature);

  //console.log(subData);

  // console.log(subData.main.humidity);
}

// var a = document.querySelector("body");
// a.onkeypress = function (event) {
//   console.log(event);
// };

var enterKey = document.querySelector("body");

enterKey.onkeydown = async function getWeather(event) {
  if (event.key == "Enter") {
    var city = document
      .querySelector(".search-container")
      .querySelector("input").value;
    var data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=789001a27aeb08a561b67f1118b6faa8&units=metric`
    );
    var subData = await data.json();

    document.querySelector(".temperature").innerHTML =
      Math.round(subData.main.temp) + "°C";

    document.querySelector(".city").innerHTML = subData.name;

    document.querySelector(".humidity").innerHTML = subData.main.humidity + "%";

    document.querySelector(".wind").innerHTML = subData.wind.speed + " km/h";

    var climate = subData.weather[0].main;

    //console.log(climate);

    if (climate == "Clouds") {
      document.querySelector(".weather").querySelector("img").src =
        "./images/clouds.png";
      document.querySelector(".climate").innerHTML = climate;
    } else if (climate == "Rain") {
      document.querySelector(".weather").querySelector("img").src =
        "./images/rain-1.png";
      document.querySelector(".climate").innerHTML = climate;
    } else if (climate == "Clear") {
      document.querySelector(".weather").querySelector("img").src =
        "./images/sun.png";
      document.querySelector(".climate").innerHTML = climate;
    } else if (climate == "Drizzle") {
      document.querySelector(".weather").querySelector("img").src =
        "./images/drizzle.png";
      document.querySelector(".climate").innerHTML = climate;
    } else if (climate == "Mist") {
      document.querySelector(".weather").querySelector("img").src =
        "./images/mist.png";
      document.querySelector(".climate").innerHTML = climate;
    } else if (climate == "Haze") {
      document.querySelector(".weather").querySelector("img").src =
        "./images/mist.png";
      document.querySelector(".climate").innerHTML = climate;
    }

    //console.log(subData.weather[0].main);

    // console.log(temperature);

    //console.log(subData);

    // console.log(subData.main.humidity);
  }
};
