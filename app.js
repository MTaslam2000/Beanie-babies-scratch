/* Imports */
import { getBeanieBabies, getAstrology } from './fetch-utils.js';

/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-babies');
const optionsEl = document.querySelector('.options');
const selectEl = document.querySelector('select');
const buttonEl = document.querySelector('button');


/* State */
let beanieBabiesData = [];
let astrologyData = []; 

const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Events */
window.addEventListener('load', async () => {
    const beanies = await getBeanieBabies();
    
    beanieBabiesData = beanies;

    const zodiacs = await getAstrology();

    displayBeanieBabies();

});

buttonEl.addEventListener('click', async () => {
    const clickedBeanies = await getBeanieBabies(selectEl.value);
    
    beanieBabiesData = clickedBeanies;


    displayBeanieBabies();
});

const zodiacs = await getAstrology();


for (let zodiac of zodiacs) {
    const optionsEl = document.createElement('option');
    

    optionsEl.value = zodiac.name;
    optionsEl.textContent = zodiac.name

    selectEl.append(optionsEl);

}


/* Display Functions */
function displayBeanieBabies() {
    beanieBabiesEl.textContent = '';
    for (let beanieBaby of beanieBabiesData) {
        const beanieBabyEl = document.createElement('div');
        

        beanieBabyEl.textContent = `${beanieBaby.title}sign is${beanieBaby.astroSign}`;
        beanieBabiesEl.append(beanieBabyEl);

    }
}


// (don't forget to call any display functions you want to run on page load!)
