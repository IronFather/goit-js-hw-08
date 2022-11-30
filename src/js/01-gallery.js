// Задание 1 - библиотека SimpleLightbox
// 1. Добавь библиотеку SimpleLightbox как зависимость проекта 
// используя npm (ссылка на CDN из твоей прошлой работы больше не нужна).
// 2. Используй свой JavaScript код из предыдущей домашней работы, 
// но выполни рефакторинг с учетом того, что библиотека была 
// установлена через npm (синтаксис import/export).
// 3. Для того чтобы подключить CSS код библиотеки в проект, необходимо 
// добавить еще один импорт, кроме того который описан в документации.

// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

function createMarkupGallery (arr) {
    return arr
    .map(({preview, original, description}) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
    .join("");
}; 

const marcupGalleryItems = createMarkupGallery(galleryItems);
galleryEl.innerHTML = marcupGalleryItems;

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

// Change code below this line

console.log(galleryItems);
