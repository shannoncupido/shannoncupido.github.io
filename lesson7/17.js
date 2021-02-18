const images = document.querySelectorAll("[data-src]")

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(src) {
        img.src = src;
        img.className='loaded_img';
    }
}

const imgOptions = {
    threshold: 0,
    rootMagin: "0px 0px 300px 0px"
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions)

images.forEach(image => {
    imgObserver.observe(image);
});