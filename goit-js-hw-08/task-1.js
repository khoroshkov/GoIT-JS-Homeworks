'use strict';

import galleryImages from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const gelleryLayout = generateGalleryLayout(galleryImages);

function generateGalleryLayout(galleryImages) {
  return galleryImages
    .map(image => `<li class="gallery__item">
    <a
    class="gallery__link"
    href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
    </li>`)
    .join("");
}

galleryContainer.insertAdjacentHTML('afterbegin', gelleryLayout);
galleryContainer.addEventListener("click", openFullSize);


const lightboxWindow = document.querySelector('.lightbox');
const largeImageWindow = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector(".lightbox__button");
const closeModalWindow = document.querySelector('.lightbox__content');

closeBtn.addEventListener("click", closeFullSizeWindow);
window.addEventListener("keydown", handleKeyPress);
closeModalWindow.addEventListener("click", backdropClick);


function openFullSize(event) {
  event.preventDefault();
  const target = event.target;
  const originalSize = target.getAttribute("data-source");

  lightboxWindow.classList.add("is-open");
  largeImageWindow.setAttribute("src", originalSize);
}

function closeFullSizeWindow() {
  lightboxWindow.classList.remove("is-open");
  largeImageWindow.removeAttribute("src");
}


function handleKeyPress(event) {
  if (event.code === "Escape") {
    closeFullSizeWindow();
  }
  return;
}

function backdropClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeFullSizeWindow();
}



//===============================Попытка написать навигацию========//

window.addEventListener("keydown", arrowNavigation);

const fullSizeImages = galleryImages.map(image => image.original); // - масив полноразмерных картинок

function arrowNavigation(event) {
  if (event.code === "ArrowRight") {

  }
  else if (event.code === "ArrowLeft") {

  }
}