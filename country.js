const countryName = new URLSearchParams(location.search).get("name");
const flagImage = document.querySelector(".country-details img");
const countryNameH1 = document.querySelector(".country-details h1");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector(".border-countries");
const windspeed = document.querySelector(".windInfo");
const cloud = document.querySelector(".cloudInfo");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg;
    countryNameH1.innerText = country.name.common;
    population.innerText = country.population.toLocaleString("en-IN");
    region.innerText = country.region;
    topLevelDomain.innerText = country.tld.join(", ");

    if (country.capital) {
      capital.innerText = country.capital?.[0];
    }

    if (country.subregion) {
      subRegion.innerText = country.subregion;
    }

    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    } else {
      nativeName.innerText = country.name.common;
    }

    if (country.currencies) {
      currencies.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
    }

    if (country.languages) {
      languages.innerText = Object.values(country.languages).join(", ");
    }

  });
// Function to fetch weather data
const apiKey = "9f51efdbeb256b9b6666faa6a28c22cb"; // Replace with your actual API key

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=${apiKey}`
)
  .then((res) => res.json())
  .then((data) => {
    // Work with the weather data inside this block
    const weatherData = data;

    if (data) {
      windspeed.innerText = weatherData.wind.speed;
      cloud.innerText = weatherData.weather[0].description;
      temp.innerText = weatherData.main.temp;
      humidity.innerText = weatherData.main.humidity;
    }

    // You can perform any other operations with the weather data here
  })
  .catch((error) => console.error("Error fetching weather data:", error));
