!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e){this.selector=e,this.sliderImages=document.querySelector(e),this.slider=this.sliderImages.querySelectorAll(".slider"),this.buttonLeft=this.sliderImages.querySelector(".left"),this.buttonRight=this.sliderImages.querySelector(".right"),this.currentSlide=0,this.clickButtons()}n.prototype.prevSlide=function(){this.currentSlide--,this.currentSlide<0&&(this.currentSlide=this.slider.length-1),this.changeSlide(this.currentSlide)},n.prototype.nextSlide=function(){this.currentSlide++,this.currentSlide>this.slider.length-1&&(this.currentSlide=0),this.changeSlide(this.currentSlide)},n.prototype.changeSlide=function(e){this.currentSlide=e;for(let e of this.slider)e.classList.remove("active");this.slider[this.currentSlide].classList.add("active")},n.prototype.clickButtons=function(){this.buttonLeft.addEventListener("click",()=>{this.prevSlide()}),this.buttonRight.addEventListener("click",()=>{this.nextSlide()})},document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".dropdown-item"),t=document.querySelector(".dropdown");e.addEventListener("mouseenter",function(e){t.classList.add("dropdown-show")}),e.addEventListener("mouseleave",function(){t.classList.remove("dropdown-show")});new n("#sit-on-our-chair");const r=document.querySelectorAll(".box:not(.text)");for(let e of r)e.addEventListener("mouseenter",function(){const t=e.querySelector(".hover-text");t.style.opacity="0",t.style.visibility="hidden",t.style.bottom="-20px"}),e.addEventListener("mouseleave",function(){const t=e.querySelector(".hover-text");t.style.opacity="1",t.style.visibility="visible",t.style.bottom="20px"});const o=document.querySelector("form"),i=document.querySelector('select[name="type"]'),c=document.querySelector('select[name="color"]'),s=document.querySelector('select[name="material"]'),l=document.querySelector('input[type="checkbox"]'),d=document.querySelector(".transport"),u=document.querySelector(".chair"),a=document.querySelector(".chair-product"),h=document.querySelector(".chair-transport"),p=document.querySelector(".sum"),f=document.querySelector(".image"),m=document.querySelector(".material"),y=document.querySelector(".chair-material"),S=document.querySelector(".button-form");S.disabled=!0,o.addEventListener("change",function(){let e=0;if(i.options.selectedIndex>0){let t=i.options,n=t[t.selectedIndex];a.textContent=n.value,u.textContent=n.dataset.price,e+=Number(n.dataset.price);for(let e of c)e.hidden=!1;if(c.options.selectedIndex>0){f.setAttribute("src","images/"+c[c.selectedIndex].value+"_chair.png");for(let e of s)e.hidden=!1}if(s.options.selectedIndex>0){let t=s[s.selectedIndex];m.textContent=t.dataset.price,y.textContent=t.value,e+=Number(t.dataset.price)}}l.checked?(e+=Number(l.dataset.price),d.textContent=l.dataset.price,h.textContent="Transport"):(d.textContent="",h.textContent=""),p.textContent=String(e),i.options.selectedIndex>0&&c.options.selectedIndex>0&&s.options.selectedIndex>0&&(S.disabled=!1)})})}]);