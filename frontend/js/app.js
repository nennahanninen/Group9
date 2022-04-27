import HomePage from './HomePage.js';
import BookDetail from './bookdetail.js';
const routes = {
    '/': HomePage,
    '/book/:id': BookDetail
};
const router = () => {
    const main = document.getElementById('main-container');
    main.innerHTML = HomePage.render();
};
window.addEventListener('load', router);