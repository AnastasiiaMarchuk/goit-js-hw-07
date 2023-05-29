import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const item = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href = ${original}>
<img class="gallery__image" 
src = ${preview} 
data-source = ${original} 
alt = ${description}/>
</a>
</li>`
)

gallery.insertAdjacentHTML("beforeend", item.join(''));


const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});



