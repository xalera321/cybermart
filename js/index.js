const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
    const cardItem = this.querySelector('.card_item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card_item');
    cardItem.style.transform = 'rotate(0)';
}





new Swiper('.swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true
    },

    loop: true,


    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true
    },

    speed: 500
});





















const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}








