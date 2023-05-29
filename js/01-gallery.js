import { galleryItems } from './gallery-items.js';

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

gallery.addEventListener('click', showBigImg);

function showBigImg(event) {
    event.preventDefault();

    const {target} = event;

    if(!target.classList.contains('gallery__image')){
        return
    }

    const imgData = target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${imgData}" width="800" height="600">`
    )
    
    instance.show()

    if(instance.visible()){
        window.addEventListener('keydown', onEscapeClose)
    }
    
    function onEscapeClose(event){
       if(event.code === 'Escape'){
        instance.close()
       }
    }
  
}
