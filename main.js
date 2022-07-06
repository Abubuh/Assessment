const countriesAPI = 'https://restcountries.com/v3.1/'



async function fetchCountries(){ 
const res = await fetch (countriesAPI + 'all')
    if (res.ok){
        const countries = await res.json()
        console.log(countries)
    }
}

fetchCountries()

