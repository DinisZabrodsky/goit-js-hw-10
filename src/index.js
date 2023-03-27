import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(serachCounrty, DEBOUNCE_DELAY));

function serachCounrty(event) {
    event.preventDefault();
    const value = refs.input.value;
    fetchCountries(value);
};



