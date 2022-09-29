export function createImgMarkup(imgArr) {
  return imgArr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>;
</div>`;
    })
    .join('');
}
