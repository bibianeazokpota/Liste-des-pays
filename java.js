const bibi = document.querySelector(".Liste")
bibi
async function fetchSelectedCountries() {
    try {
        const countryCodes = "fr,de,us,ca,br,jp,gb,ru,cn,in,mx,au,it,es,za,ar,eg,ng,tr,kr"; 
        const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCodes}`);
        const data = await response.json();
        displayCountries(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des pays :", error);
    }
}


function displayCountries(countries) {
    const container = document.getElementById('countries');
    container.innerHTML = '';

    countries.forEach(country => {
        const { name, flags, capital, currencies } = country;
        const currencyName = currencies ? Object.values(currencies)[0].name : 'N/A';

        const countryElement = document.createElement('div');
        countryElement.classList.add('country');
        countryElement.innerHTML = `
            <h3>${name.common}</h3> 
                      
            <p><strong>Capitale:</strong> ${capital ? capital[0] : 'N/A'}</p>
            <p><strong>Devise:</strong> ${currencyName}</p>
        `;
        container.appendChild(countryElement);
    });
}

fetchCountries();
