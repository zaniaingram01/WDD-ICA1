const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const headline = document.getElementById('headline');
const button = document.getElementById('products-button');

hamburger.onclick = function () {
    
    this.classList.toggle('open');
    nav.classList.toggle('show');
    
    if (window.getComputedStyle(headline).opacity == 1) { 
        headline.style.opacity = 0;
        button.style.opacity = 0;
    } else {
        headline.style.opacity = 1;
        button.style.opacity = 1;
    }
      
};

const items = document.querySelectorAll('#grid > div');

for (const item of items.values()) {
    
    new Waypoint.Inview({
        element: item,
        enter(direction) {
            if (direction == 'down') {
                item.classList.add('move-up');
            }
        },
        exited(direction) {
            if (direction == 'up') {
                item.classList.remove('move-up');
            }
        }
    });
    
}









