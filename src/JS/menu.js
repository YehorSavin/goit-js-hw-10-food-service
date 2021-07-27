import menuData from "../menu.json"
import makeMenuMarkup from "../templates/menu.hbs"

const insertRef = document.querySelector('.js-menu');
const markup = makeMenuMarkup(menuData);



insertRef.innerHTML = markup;