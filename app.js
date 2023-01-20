/* Imports */

/* Get DOM Elements */
const beanieBabiesEl = document.querySelector('.beanie-babies');


/* State */
let beanieBabiesData = [];
let astrologyData = []; 

const SUPABASE_URL = "https://gxwgjhfyrlwiqakdeamc.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Events */
window.addEventListener('load', async () => {
    let { data, error } = await client
        .from('beanie_babies').select('*');
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
