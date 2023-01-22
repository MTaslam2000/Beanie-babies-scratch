
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function getBeanieBabies(zodiacTheUserSelected) {
    if (zodiacTheUserSelected) {
        let { data, error } = await client
            .from('beanie_babies').select('*').limit(100).eq('astroSign', zodiacTheUserSelected);

        return data;
    }


    let { data, error } = await client
        .from('beanie_babies').select('*').limit(100);

    return data;
}

export async function getAstrology() {
    let { data, error } = await client
        .from('beanie_baby_astro_signs').select('*');
    
    return data;
}