import { createAllCards, createCard, iconChange } from './dom.js';
import { countries, getDataAsync, like } from './countries.js';

getDataAsync()
document.getElementById('alpha').addEventListener('click', () => {
    alphabetical();
})

document.getElementById('beta').addEventListener('click', () => {
    unalphabetical();
})

const alphabetical = () => {

    countries.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
    });
    cards.innerHTML = '';

    createAllCards();
    iconChange();


}
const unalphabetical = () => {
    countries.sort((a, b) => {
        return b.name.common.localeCompare(a.name.common);
    });
    cards.innerHTML = '';
    createAllCards();
    iconChange();

}




export { alphabetical, unalphabetical }