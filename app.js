const heroImages = [...document.querySelectorAll('.image')];
const containers = [... document.querySelectorAll('.container')];

heroImages.forEach((img, idx) => {
    img.style.backgroundImage = `url(./images/${idx + 1}.jpeg)`
})

function clickLink(px){
    window.scrollTo(0, px);
}


let options = {
    rootMargin: '0px',
    threshold: .2
}

let reveal = (entries, observer) => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
        
    })
}
  
let observer = new IntersectionObserver(reveal, options);

containers.forEach(container => {
    observer.observe(container);
})