const countriesAPI = 'https://restcountries.com/v3.1/'

const Country = (officialName, capital, region, language, population, flag) => {
    return `<tr>
        <td>${officialName}</td>
        <td>${capital}</td>
        <td>${region}</td>
        <td>${language}</td>
        <td>${population}</td>
        <td> <img src="${flag}" alt="Flag of ${officialName}"></td>
    </tr>`
} 

async function fetchCountries(){ 
const res = await fetch (countriesAPI + 'all')
    if (res.ok){
        const cont = document.getElementById('countries-container-body')
        const countries = await res.json()
        countries.map(function(country){
            const languagesObject = country.languages
            const languages = (Object.values(languagesObject).join(', '))
            let column = document.createElement('tr')
            column.innerHTML = Country(
                country.name.official,
                country.capital ? country.capital : "No capital",
                country.region,
                languages ? languages : "No language to display",
                country.population,
                country.flags.png
            )
            cont.append(column)
        })
    }
}

fetchCountries()

