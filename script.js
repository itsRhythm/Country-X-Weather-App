const countriesContainer = document.querySelector(".countries-container");
const searchInput = document.querySelector(".search-container input");

function getInput() {
  let inpt = document.getElementById("inputBox");
  countryName = inpt.value;
  console.log(countryName);
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
      renderCountries(data);
      console.log(data);
    });

}

// function renderCountries(data) {
//   let country = data.name;
//   for (let i = 0; i < country.length; i++) {
//     const countryCard = document.createElement("a");
//     countryCard.classList.add("country-card");
//     countryCard.href = `/country.html?name=${country.name.common}`;
//     countryCard.innerHTML = `
//               <img src="${country.flags.svg}" alt="${
//       country.name.common
//     } flag" />
//               <div class="card-text">
//                   <h3 class="card-title">${country.name.common}</h3>
//                   <p><b>Population: </b>${country.population.toLocaleString(
//                     "en-IN"
//                   )}</p>
//                   <p><b>Region: </b>${country.region}</p>
//                   <p><b>Capital: </b>${country.capital?.[0]}</p>
//               </div>`;
//     countriesContainer.append(countryCard);
//   }
// }

function renderCountries(data) {
    const country = data[0];
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/country.html?name=${country.name.common}`;
    countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common} flag" />
            <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital?.[0]}</p>
            </div>`;
    countriesContainer.append(countryCard);
}


// function renderCountries(data) {
//   for (let i = 0; i < data.length; i++) {
//     const country = data[i];
//     const countryCard = document.createElement("a");
//     countryCard.classList.add("country-card");
//     countryCard.href = `/country.html?name=${country.name.common}`;
//     countryCard.innerHTML = `
//             <img src="${country.flags.svg}" alt="${country.name.common} flag" />
//             <div class="card-text">
//                 <h3 class="card-title">${country.name.common}</h3>
//                 <p><b>Population: </b>${country.population.toLocaleString(
//                   "en-IN"
//                 )}</p>
//                 <p><b>Region: </b>${country.region}</p>
//                 <p><b>Capital: </b>${country.capital?.[0]}</p>
//             </div>`;
//     countriesContainer.append(countryCard);
//   }
// }

// function renderCountries(data) {
//   countriesContainer.innerHTML = ''
//   data.forEach((country) => {
//     const countryCard = document.createElement('a')
//     countryCard.classList.add('country-card')
//     countryCard.href = `/country.html?name=${country.name.common}`
//     countryCard.innerHTML = `
//           <img src="${country.flags.svg}" alt="${country.name.common} flag" />
//           <div class="card-text">
//               <h3 class="card-title">${country.name.common}</h3>
//               <p><b>Population: </b>${country.population.toLocaleString(
//                 'en-IN'
//               )}</p>
//               <p><b>Region: </b>${country.region}</p>
//               <p><b>Capital: </b>${country.capital?.[0]}</p>
//           </div>
//   `
//     countriesContainer.append(countryCard)
//   })
// }

// searchInput.addEventListener('input',  (e) => {
//   const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
//   renderCountries(filteredCountries)
// })

// function process (){
//   let inputCountry = document.getElementById("inputBox").value
//     const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(inputCountry.target.value.toLowerCase()))
//   renderCountries(filteredCountries)
// }
