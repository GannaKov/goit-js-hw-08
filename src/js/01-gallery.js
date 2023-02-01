// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
import { createImgMarkup } from './customFunction/functionRender';
const galleryDiv = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);
galleryDiv.insertAdjacentHTML('beforeend', imgMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
////test
