
import './styles.css';
import '../node_modules/pnotify/src/PNotifyBrightTheme.css';


import fetchCountriesList from './js/services/fetchCountries.js';
import debounce from 'lodash.debounce';
import countryListItems from './js/templates/country-list.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';


const refs = {
  searchForm: document.querySelector('#country-search'),
  resultList: document.querySelector('.search-result'),
  countryList: document.querySelector('.country-list'),
  searchWindow: document.querySelector('.search-wrapper'),
}



refs.searchForm.addEventListener('input', debounce(searchQueryHandler, 500));

function searchQueryHandler(e) {
  e.preventDefault();
  clearSearch();

  const searchQuery = refs.searchForm.value;

  fetchCountriesList.fetchCountries(searchQuery).then(data => {
    if (data.length === 1) {
      const markup = buildCountryMarkup(data[0]);
      refs.resultList.insertAdjacentHTML("beforeend", markup)
      refs.resultList.classList.add('country-item')
    } else if (data.length <= 10) {
      showListCountries(data);
    } else {
      PNotify.error(
        'Too many matches found. Please enter a more specific query',
      );
    }
  })
}



function buildCountryMarkup(item) {
  return countryListItems(item)
}

function showListCountries(data) {
  data.forEach(generateListItems);
}

function generateListItems(country) {
  const li = document.createElement('li');
  li.insertAdjacentHTML('beforeend', country.name);
  refs.countryList.appendChild(li);
}

function clearSearch() {
  refs.countryList.innerHTML = '';
  refs.resultList.innerHTML = '';
}