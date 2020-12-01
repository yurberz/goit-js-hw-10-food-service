import menu from "../menu.json";
import items from "../templates/menu-items.hbs";

const galleryRef = document.querySelector(".js-menu");
const createMarkup = items(menu);

galleryRef.insertAdjacentHTML("beforeend", createMarkup);
