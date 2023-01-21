/* Imports */
import { getBeanieBabies, getAstrology } from './fetch-utils.js';

/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-babies');
const optionsEl = document.querySelector('.options')


/* State */
let beanieBabiesData = [];
let astrologyData = []; 

const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Events */
window.addEventListener('load', async () => {
    const beanies = await getBeanieBabies();


    for (let beanieBaby of beanies) {
        const beanieBabyEl = document.createElement('div');
        

        beanieBabyEl.textContent = `${beanieBaby.title}sign is${beanieBaby.astroSign}`;
        beanieBabiesEl.append(beanieBabyEl);
    }
});

const zodiacs = await getAstrology();

for (let zodiac of zodiacs) {
    const optionsEl = document.createElement('option');
    console.log(optionsEl);
}

/* Display Functions */


// (don't forget to call any display functions you want to run on page load!)
