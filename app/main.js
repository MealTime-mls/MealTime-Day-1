import './css/style.css'
import { fetchCategories, fetchMealById, fetchMealsByCategory } from './js/fetch-handlers';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Meal Time!</h1>
  </div>
`

fetchCategories();
fetchMealsByCategory("Seafood");
fetchMealById("52772");
