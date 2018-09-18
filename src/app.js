require('../scss/main.scss');
require('../index.html');

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

    // Order

    const form = document.querySelector('form');
    const chairs = document.querySelector('select[name="type"]');
    const colors = document.querySelector('select[name="color"]');
    const material = document.querySelector('select[name="material"]');
    const transport = document.querySelector('input[type="checkbox"]');
    const priceTransport = document.querySelector('.transport');
    const priceChairs = document.querySelector('.chair');
    const chairProduct = document.querySelector('.chair-product');
    const chairTransport = document.querySelector('.chair-transport');
    const totalSum = document.querySelector('.sum');
    const image = document.querySelector('.image');
    const chairMaterialPrice = document.querySelector('.material');
    const chairMaterial = document.querySelector('.chair-material');
    const button = document.querySelector('.button-form');

    button.disabled = true;

    form.addEventListener('change', function () {
        let sum = 0;

        // Chair
        if (chairs.options.selectedIndex > 0) {

            // Select chair
            let chair = chairs.options;
            let chairSelected = chair[chair.selectedIndex];

            chairProduct.textContent = chairSelected.value;
            priceChairs.textContent = chairSelected.dataset.price;
            sum += Number(chairSelected.dataset.price);

            // Turn on colors
            for (let el of colors) {
                el.hidden = false
            }

            // Colors
            if (colors.options.selectedIndex > 0) {
                image.setAttribute('src', 'images/' + colors[colors.selectedIndex].value + '_chair.png')

                // Turn on material
                for (let el of material) {
                    el.hidden = false;
                }
            }
            // Price material
            if (material.options.selectedIndex > 0) {
                let materials = material[material.selectedIndex];
                chairMaterialPrice.textContent = materials.dataset.price;
                chairMaterial.textContent = materials.value;
                sum += Number(materials.dataset.price)
            }
        }


        // Price transport
        if (transport.checked) {
            sum += Number(transport.dataset.price);
            priceTransport.textContent = transport.dataset.price;
            chairTransport.textContent = 'Transport';
        } else {
            priceTransport.textContent = '';
            chairTransport.textContent = '';
        }

        totalSum.textContent = String(sum);

        if (chairs.options.selectedIndex > 0 && colors.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
            button.disabled = false;
        }
    })

});
