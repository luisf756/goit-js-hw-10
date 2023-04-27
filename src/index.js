import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix'

const DEBOUNCE_DELAY = 500;


const fetchCountryLi = document.querySelector('.country');
const countryList = document.getElementById("search-box");

// countryList.addEventListener("input",debounce(() => {
//     const searchCountry = value.trim();
//     // console.log(countryList.target.value.trim())
//     fetchCountryes(searchCountry)
//     .then((countrys) => renderCountryList(countrys))
//     .catch((error) => console.log(error));
//     // console.log(fetchCountryes())
// }), DEBOUNCE_DELAY);

// function fetchCountryes(countryName){
//   return fetch(
//     // `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
//     // `https://restcountries.com/v3.1/all?fields=name,capital,currencies`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
console.log(`hola desde nicecuando`)

// function renderCountryList(countrys) {
//   const markup = countrys
//     .map((country) => {
        
//       return `
//           <li>
//             <p><b>Name</b>: ${country.name}</p>
//             <p><b>Capital</b>: ${country.name}</p>
//             <p><b>Flags</b>: ${country.name}</p>
//             <p><b>Languages</b>: ${country.name}</p>
//           </li>
//       `;
//     })
//     .join("");
//     fetchCountryLi.insertAdjacentHTML('beforeend', markup);
// }