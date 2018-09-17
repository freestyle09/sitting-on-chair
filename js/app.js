function Slider(selector) {
    this.selector = selector;
    this.sliderImages = document.querySelector(selector);
    this.slider = this.sliderImages.querySelectorAll('.slider');
    this.buttonLeft = this.sliderImages.querySelector('.left');
    this.buttonRight = this.sliderImages.querySelector('.right');
    this.currentSlide = 0;

    this.clickButtons();
}

Slider.prototype.prevSlide = function () {
    this.currentSlide--;
    if (this.currentSlide < 0) {
        this.currentSlide = this.slider.length - 1;
    }
    this.changeSlide(this.currentSlide);
}
Slider.prototype.nextSlide = function () {
    this.currentSlide++;
    if (this.currentSlide > this.slider.length - 1) {
        this.currentSlide = 0;
    }
    this.changeSlide(this.currentSlide);
}

Slider.prototype.changeSlide = function (nr) {
    this.currentSlide = nr;
    for (let el of this.slider) {
        el.classList.remove('active');
    }
    this.slider[this.currentSlide].classList.add('active');
}

Slider.prototype.clickButtons = function () {
    this.buttonLeft.addEventListener('click', () => {
        this.prevSlide();
    })
    this.buttonRight.addEventListener('click', () => {
        this.nextSlide();
    })
}

document.addEventListener('DOMContentLoaded', function () {

    //menu dropdown
    var dropdownItem = document.querySelector('.dropdown-item');
    var dropdown = document.querySelector('.dropdown');

    dropdownItem.addEventListener('mouseenter', function (e) {
        // e.stopImmediatePropagation();
        dropdown.classList.add('dropdown-show');
    });
    dropdownItem.addEventListener('mouseleave', function () {
        dropdown.classList.remove('dropdown-show');
    })

    // slider
    let sliderImages = new Slider('#sit-on-our-chair');

    // hover item

    const box = document.querySelectorAll('.box:not(.text)');
    // const textHover = document.querySelector('.hover-text');

    for (let el of box) {
        el.addEventListener('mouseenter', function () {
            const textHover = el.querySelector('.hover-text');
            textHover.style.opacity = '0';
            textHover.style.visibility = 'hidden';
            textHover.style.bottom = '-20px';
        });
        el.addEventListener('mouseleave', function () {
            const textHover = el.querySelector('.hover-text');
            textHover.style.opacity = '1';
            textHover.style.visibility = 'visible';
            textHover.style.bottom = '20px';
        })
    }


})
