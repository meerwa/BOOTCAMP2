document.getElementById('loadCharacterBtn').addEventListener('click', fetchCharacter);

function fetchCharacter() {
    const loadingElem = document.getElementById('loading');
    const characterInfoElem = document.getElementById('characterInfo');
    const errorMessageElem = document.getElementById('errorMessage');

    // Clear previous data
    characterInfoElem.innerHTML = '';
    errorMessageElem.innerHTML = '';
    loadingElem.style.display = 'block';

    // Randomly select a character ID from 1 to 83
    const characterId = Math.floor(Math.random() * 83) + 1;

    fetch(`https://www.swapi.tech/api/people/${characterId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching character data');
            }
            return response.json();
        })
        .then(data => {
            const character = data.result.properties;
            characterInfoElem.innerHTML = `
                <h2>${character.name}</h2>
                <p>Height: ${character.height}</p>
                <p>Gender: ${character.gender}</p>
                <p>Birth Year: ${character.birth_year}</p>
                <p>Home World: ${character.homeworld}</p>
            `;
        })
        .catch(error => {
            errorMessageElem.innerHTML = 'Failed to load character data';
        })
        .finally(() => {
            loadingElem.style.display = 'none';
        });
}