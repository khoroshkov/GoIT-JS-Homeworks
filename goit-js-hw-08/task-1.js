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
const closeWindow = document.querySelector(".lightbox__overlay");

function openFullSize(event) {
  event.preventDefault();
  const target = event.target;
  const originalSize = target.getAttribute("data-source");


  lightboxWindow.classList.add("is-open");
  largeImageWindow.setAttribute("src", originalSize);


  closeBtn.addEventListener("click", closeFullSizeWindow);
  closeWindow.addEventListener("click", closeFullSizeWindow); //===== not working

}

function closeFullSizeWindow(event) {
  lightboxWindow.classList.remove("is-open");
  largeImageWindow.removeAttribute("src");
  closeBtn.removeEventListener("click", closeFullSizeWindow);
}

//===================================================== not working
window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  console.log(event.code);
  if (event.code === "escape") {
    closeFullSizeWindow();
  }
  return;
}