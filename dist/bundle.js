!function (t) {
    var n = {};

    function e(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {i: o, l: !1, exports: {}};
        return t[o].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }

    e.m = t, e.c = n, e.d = function (t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: o})
    }, e.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, e.t = function (t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (e.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var i in t) e.d(o, i, function (n) {
            return t[n]
        }.bind(null, i));
        return o
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, e.p = "", e(e.s = 0)
}([function (t, n, e) {
    "use strict";

    function o(t) {
        this.selector = t, this.sliderImages = document.querySelector(t), this.slider = this.sliderImages.querySelectorAll(".slider"), this.buttonLeft = this.sliderImages.querySelector(".left"), this.buttonRight = this.sliderImages.querySelector(".right"), this.currentSlide = 0, this.clickButtons()
    }

    e(1), e(6), o.prototype.prevSlide = function () {
        this.currentSlide--, this.currentSlide < 0 && (this.currentSlide = this.slider.length - 1), this.changeSlide(this.currentSlide)
    }, o.prototype.nextSlide = function () {
        this.currentSlide++, this.currentSlide > this.slider.length - 1 && (this.currentSlide = 0), this.changeSlide(this.currentSlide)
    }, o.prototype.changeSlide = function (t) {
        this.currentSlide = t;
        var n = !0, e = !1, o = void 0;
        try {
            for (var i, r = this.slider[Symbol.iterator](); !(n = (i = r.next()).done); n = !0) {
                i.value.classList.remove("active")
            }
        } catch (t) {
            e = !0, o = t
        } finally {
            try {
                !n && r.return && r.return()
            } finally {
                if (e) throw o
            }
        }
        this.slider[this.currentSlide].classList.add("active")
    }, o.prototype.clickButtons = function () {
        var t = this;
        this.buttonLeft.addEventListener("click", function () {
            t.prevSlide()
        }), this.buttonRight.addEventListener("click", function () {
            t.nextSlide()
        })
    }, document.addEventListener("DOMContentLoaded", function () {
        var t = document.querySelector(".dropdown-item"), n = document.querySelector(".dropdown");
        t.addEventListener("mouseenter", function (t) {
            n.classList.add("dropdown-show")
        }), t.addEventListener("mouseleave", function () {
            n.classList.remove("dropdown-show")
        });
        new o("#sit-on-our-chair");
        var e = document.querySelectorAll(".box:not(.text)"), i = !0, r = !1, a = void 0;
        try {
            for (var s, c = function () {
                var t = s.value;
                t.addEventListener("mouseenter", function () {
                    var n = t.querySelector(".hover-text");
                    n.style.opacity = "0", n.style.visibility = "hidden", n.style.bottom = "-20px"
                }), t.addEventListener("mouseleave", function () {
                    var n = t.querySelector(".hover-text");
                    n.style.opacity = "1", n.style.visibility = "visible", n.style.bottom = "20px"
                })
            }, l = e[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) c()
        } catch (t) {
            r = !0, a = t
        } finally {
            try {
                !i && l.return && l.return()
            } finally {
                if (r) throw a
            }
        }
        var d = document.querySelector("form"), p = document.querySelector('select[name="type"]'),
            u = document.querySelector('select[name="color"]'), f = document.querySelector('select[name="material"]'),
            b = document.querySelector('input[type="checkbox"]'), h = document.querySelector(".transport"),
            m = document.querySelector(".chair"), x = document.querySelector(".chair-product"),
            v = document.querySelector(".chair-transport"), g = document.querySelector(".sum"),
            y = document.querySelector(".image"), w = document.querySelector(".material"),
            S = document.querySelector(".chair-material"), k = document.querySelector(".button-form");
        k.disabled = !0, d.addEventListener("change", function () {
            var t = 0;
            if (p.options.selectedIndex > 0) {
                var n = p.options, e = n[n.selectedIndex];
                x.textContent = e.value, m.textContent = e.dataset.price, t += Number(e.dataset.price);
                var o = !0, i = !1, r = void 0;
                try {
                    for (var a, s = u[Symbol.iterator](); !(o = (a = s.next()).done); o = !0) {
                        a.value.hidden = !1
                    }
                } catch (t) {
                    i = !0, r = t
                } finally {
                    try {
                        !o && s.return && s.return()
                    } finally {
                        if (i) throw r
                    }
                }
                if (u.options.selectedIndex > 0) {
                    y.setAttribute("src", "images/" + u[u.selectedIndex].value + "_chair.png");
                    var c = !0, l = !1, d = void 0;
                    try {
                        for (var j, C = f[Symbol.iterator](); !(c = (j = C.next()).done); c = !0) {
                            j.value.hidden = !1
                        }
                    } catch (t) {
                        l = !0, d = t
                    } finally {
                        try {
                            !c && C.return && C.return()
                        } finally {
                            if (l) throw d
                        }
                    }
                }
                if (f.options.selectedIndex > 0) {
                    var z = f[f.selectedIndex];
                    w.textContent = z.dataset.price, S.textContent = z.value, t += Number(z.dataset.price)
                }
            }
            b.checked ? (t += Number(b.dataset.price), h.textContent = b.dataset.price, v.textContent = "Transport") : (h.textContent = "", v.textContent = ""), g.textContent = String(t), p.options.selectedIndex > 0 && u.options.selectedIndex > 0 && f.options.selectedIndex > 0 && (k.disabled = !1)
        })
    })
}, function (t, n, e) {
    var o = e(2);
    "string" == typeof o && (o = [[t.i, o, ""]]);
    var i = {hmr: !0, transform: void 0, insertInto: void 0};
    e(4)(o, i);
    o.locals && (t.exports = o.locals)
}, function (t, n, e) {
    (n = t.exports = e(3)(!1)).push([t.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700);", ""]), n.push([t.i, "@import url(https://fonts.googleapis.com/css?family=Merriweather:700);", ""]), n.push([t.i, "nav {\n  background-color: #000;\n  color: #fff;\n  text-transform: uppercase;\n  height: 50px; }\n  nav .container {\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  nav .logo {\n    font-size: 18px; }\n  nav .menu {\n    list-style: none;\n    display: flex;\n    width: 30%;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 999; }\n    nav .menu li {\n      position: relative; }\n      nav .menu li a {\n        color: #fff;\n        text-decoration: none; }\n    nav .menu .dropdown-item {\n      position: relative;\n      cursor: pointer; }\n      nav .menu .dropdown-item .dropdown {\n        position: absolute;\n        list-style: none;\n        top: 5px;\n        padding-top: 40px;\n        left: -30px;\n        visibility: hidden;\n        opacity: 0;\n        transition: .2s; }\n        nav .menu .dropdown-item .dropdown .triangle {\n          border: 10px solid transparent;\n          border-bottom-color: #000;\n          width: 0;\n          top: 20px;\n          left: 50%;\n          transform: translateX(-50%);\n          position: absolute; }\n        nav .menu .dropdown-item .dropdown.dropdown-show {\n          opacity: 1;\n          visibility: visible; }\n        nav .menu .dropdown-item .dropdown li {\n          background-color: #000;\n          padding: 10px 20px;\n          font-weight: lighter; }\n\n.button {\n  width: 300px;\n  height: 60px;\n  border: none;\n  font-size: 26px;\n  font-weight: 300;\n  background-color: #59cab1;\n  color: #fff;\n  text-transform: uppercase;\n  border-radius: 10px; }\n\n#sit-on-our-chair {\n  height: 500px;\n  background: #fefefe;\n  background: -moz-linear-gradient(top, #fefefe 0%, #e2e2e2 100%);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #fefefe), color-stop(100%, #e2e2e2));\n  background: -webkit-linear-gradient(top, #fefefe 0%, #e2e2e2 100%);\n  background: -o-linear-gradient(top, #fefefe 0%, #e2e2e2 100%);\n  background: -ms-linear-gradient(top, #fefefe 0%, #e2e2e2 100%);\n  background: linear-gradient(to bottom, #fefefe 0%, #e2e2e2 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fefefe', endColorstr='#e2e2e2', GradientType=0); }\n  #sit-on-our-chair .container {\n    position: relative;\n    height: 100%; }\n    #sit-on-our-chair .container .slider-button {\n      position: absolute;\n      border: none;\n      background-color: transparent;\n      font-size: 80px;\n      color: #59cab1;\n      top: 50%;\n      transform: translateY(-50%);\n      outline: 0;\n      z-index: 10; }\n      #sit-on-our-chair .container .slider-button:hover {\n        cursor: pointer; }\n      #sit-on-our-chair .container .slider-button.left {\n        left: 0; }\n        #sit-on-our-chair .container .slider-button.left:hover {\n          cursor: pointer; }\n      #sit-on-our-chair .container .slider-button.right {\n        right: 0; }\n    #sit-on-our-chair .container .slider {\n      position: absolute;\n      display: flex;\n      top: 0;\n      left: 0;\n      height: 100%;\n      align-items: center;\n      justify-content: center;\n      opacity: 0;\n      visibility: hidden;\n      transition: .5s; }\n      #sit-on-our-chair .container .slider.active {\n        opacity: 1;\n        visibility: visible;\n        z-index: 5; }\n      #sit-on-our-chair .container .slider img {\n        object-fit: contain;\n        padding-left: 50px;\n        width: 45%; }\n      #sit-on-our-chair .container .slider .slider-text {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding-right: 20px;\n        width: 45%;\n        text-align: center; }\n        #sit-on-our-chair .container .slider .slider-text h1 {\n          font-size: 40px;\n          text-transform: uppercase;\n          padding-bottom: 30px; }\n        #sit-on-our-chair .container .slider .slider-text .button {\n          margin-top: 30px;\n          transition: .5s; }\n          #sit-on-our-chair .container .slider .slider-text .button:hover {\n            background-color: #fff;\n            color: #59cab1;\n            cursor: pointer; }\n\n#chairs .container {\n  height: 100%;\n  display: flex;\n  justify-content: space-between; }\n  #chairs .container .box {\n    position: relative;\n    margin: 40px 0 60px 0;\n    border: 1px solid #d9d9d9;\n    width: 32%;\n    height: fit-content;\n    overflow: hidden; }\n    #chairs .container .box img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      vertical-align: bottom; }\n    #chairs .container .box .hover-text {\n      position: absolute;\n      bottom: 20px;\n      left: 0;\n      background-color: rgba(246, 246, 246, 0.46);\n      width: 100%;\n      height: 70px;\n      display: flex;\n      align-items: center;\n      opacity: 1;\n      visibility: visible;\n      transition: .5s ease-in-out; }\n      #chairs .container .box .hover-text h2 {\n        font-size: 18px;\n        font-weight: 600;\n        margin-left: 20px;\n        border-bottom: 8px solid #59cab1;\n        width: 170px; }\n  #chairs .container .text {\n    padding: 20px;\n    font-size: 14px;\n    color: #9a9a9a; }\n    #chairs .container .text h2 {\n      width: 150px;\n      font-size: 18px;\n      color: #000;\n      margin-bottom: 15px;\n      padding-bottom: 5px;\n      border-bottom: 8px solid #59cab1; }\n\n#price {\n  background-color: #f1f1f1; }\n  #price .container {\n    padding: 50px 0;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-content: space-between; }\n    #price .container .flex {\n      width: 100%;\n      display: flex;\n      justify-content: space-between; }\n  #price .price-box {\n    position: relative;\n    border: 2px solid #d9d9d9;\n    width: 32%;\n    height: 600px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    background-color: #f9f9f9; }\n    #price .price-box:before {\n      content: '';\n      position: absolute;\n      width: 50px;\n      height: 50px;\n      top: 0;\n      transform: translateY(-70%);\n      border-radius: 100%;\n      border: 2px solid #e4e4e4;\n      background-color: #fff; }\n    #price .price-box:after {\n      content: '';\n      position: absolute;\n      width: 25px;\n      height: 25px;\n      top: 0;\n      transform: translateY(-90%);\n      border-radius: 100%;\n      border: none;\n      background-color: #c2c2c2; }\n    #price .price-box.second-box {\n      background-color: #59cab1;\n      border: 2px solid #59cab1; }\n      #price .price-box.second-box:before {\n        content: '';\n        position: absolute;\n        width: 50px;\n        height: 50px;\n        top: 0;\n        transform: translateY(-70%);\n        border-radius: 100%;\n        border: 2px solid #59cab1;\n        background-color: #59cab1; }\n      #price .price-box.second-box:after {\n        content: '';\n        position: absolute;\n        width: 25px;\n        height: 25px;\n        top: 0;\n        transform: translateY(-90%);\n        border-radius: 100%;\n        border: none;\n        background-color: #fff; }\n    #price .price-box .h3 {\n      text-transform: uppercase;\n      color: #59cab1;\n      padding: 30px 0;\n      font-size: 28px;\n      font-weight: 400; }\n      #price .price-box .h3.second-h3 {\n        color: #fff; }\n    #price .price-box .box-price {\n      height: 150px;\n      width: 150px;\n      margin-bottom: 50px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      border-radius: 100%;\n      border: 2px solid #d9d9d9;\n      font-size: 18px;\n      font-family: \"Merriweather\", serif;\n      font-weight: bold;\n      color: #c1c1c1; }\n      #price .price-box .box-price.second-box-price {\n        color: #59cab1;\n        border: 2px solid #59cab1; }\n      #price .price-box .box-price .price {\n        font-size: 48px;\n        letter-spacing: -1px;\n        font-family: \"Merriweather\", serif; }\n        #price .price-box .box-price .price sup {\n          font-size: 26px;\n          font-family: \"Merriweather\", serif;\n          margin-left: -10px; }\n    #price .price-box .box-description {\n      width: 100%;\n      text-align: center; }\n      #price .price-box .box-description p {\n        padding: 8px 3px;\n        color: #8c8c8c;\n        font-size: 22px;\n        font-family: \"Open Sans\", sans-serif;\n        font-weight: 300; }\n      #price .price-box .box-description p:nth-child(2n + 1) {\n        background-color: #e4e4e4; }\n      #price .price-box .box-description p:nth-child(2n + 2) {\n        background-color: #f1f1f1; }\n      #price .price-box .box-description.second-box-description p:nth-child(2n + 1) {\n        background-color: #fff; }\n    #price .price-box .box-button {\n      position: absolute;\n      left: 50%;\n      bottom: 20px;\n      transform: translateX(-50%);\n      background-color: #59cab1;\n      padding: 10px 30px;\n      color: #fff;\n      border: none;\n      cursor: pointer;\n      text-transform: uppercase;\n      font-size: 18px;\n      font-weight: 300;\n      border-radius: 10px; }\n      #price .price-box .box-button.second-box-button {\n        color: #59cab1;\n        background-color: #fff; }\n\n#form {\n  height: 500px;\n  margin-top: 60px; }\n  #form .flex-header {\n    display: flex;\n    justify-content: space-between; }\n    #form .flex-header .h2:nth-child(2) {\n      text-align: right; }\n  #form form {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    flex-wrap: wrap; }\n  #form .form-box {\n    width: 32%;\n    display: flex;\n    justify-content: center; }\n    #form .form-box:first-child {\n      flex-direction: column;\n      justify-content: space-between; }\n      #form .form-box:first-child select {\n        background-color: #f9f9f9;\n        width: 100%;\n        border: 2px solid #59cab1;\n        margin: 10px 0;\n        color: #8c8c8c;\n        font-weight: 300;\n        font-size: 22px; }\n      #form .form-box:first-child label {\n        font-size: 22px; }\n    #form .form-box .image {\n      width: 100%;\n      max-height: 200px;\n      object-fit: contain; }\n    #form .form-box:last-of-type {\n      justify-content: space-between;\n      background-color: #f9f9f9;\n      flex-wrap: wrap;\n      padding: 10px; }\n      #form .form-box:last-of-type .chairs {\n        width: 70%;\n        height: 70%;\n        border-right: 2px solid #fff; }\n        #form .form-box:last-of-type .chairs > span {\n          display: block; }\n      #form .form-box:last-of-type .price-chairs {\n        width: 30%;\n        text-align: right;\n        height: 70%; }\n        #form .form-box:last-of-type .price-chairs > span {\n          display: block; }\n      #form .form-box:last-of-type .total-price {\n        padding-top: 10px;\n        border-top: 2px solid #fff;\n        display: flex;\n        justify-content: space-between;\n        width: 100%; }\n  #form .button-form {\n    width: 250px;\n    height: 50px;\n    position: absolute;\n    bottom: -80px;\n    right: 50px;\n    border: 0;\n    font-size: 26px;\n    font-weight: 300;\n    text-transform: uppercase;\n    background-color: #59cab1;\n    color: #fff;\n    border-radius: 10px;\n    transition: .5s; }\n    #form .button-form[disabled] {\n      color: #59cab1;\n      background-color: #fff;\n      border: 2px solid #59cab1; }\n\n.yeah {\n  color: red;\n  font-size: 20px; }\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Open Sans\", sans-serif;\n  box-sizing: border-box; }\n\n.container {\n  width: 1100px;\n  margin: 0 auto; }\n\n.logo-green {\n  font-weight: bold;\n  color: #59cab1; }\n\n.h2 {\n  width: 350px;\n  margin: 20px 0 80px 0;\n  border-bottom: 8px solid #59cab1;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 22px; }\n", ""])
}, function (t, n) {
    t.exports = function (t) {
        var n = [];
        return n.toString = function () {
            return this.map(function (n) {
                var e = function (t, n) {
                    var e = t[1] || "", o = t[3];
                    if (!o) return e;
                    if (n && "function" == typeof btoa) {
                        var i = function (t) {
                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                        }(o), r = o.sources.map(function (t) {
                            return "/*# sourceURL=" + o.sourceRoot + t + " */"
                        });
                        return [e].concat(r).concat([i]).join("\n")
                    }
                    return [e].join("\n")
                }(n, t);
                return n[2] ? "@media " + n[2] + "{" + e + "}" : e
            }).join("")
        }, n.i = function (t, e) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var o = {}, i = 0; i < this.length; i++) {
                var r = this[i][0];
                "number" == typeof r && (o[r] = !0)
            }
            for (i = 0; i < t.length; i++) {
                var a = t[i];
                "number" == typeof a[0] && o[a[0]] || (e && !a[2] ? a[2] = e : e && (a[2] = "(" + a[2] + ") and (" + e + ")"), n.push(a))
            }
        }, n
    }
}, function (t, n, e) {
    var o = {}, i = function (t) {
        var n;
        return function () {
            return void 0 === n && (n = t.apply(this, arguments)), n
        }
    }(function () {
        return window && document && document.all && !window.atob
    }), r = function (t) {
        var n = {};
        return function (t, e) {
            if ("function" == typeof t) return t();
            if (void 0 === n[t]) {
                var o = function (t, n) {
                    return n ? n.querySelector(t) : document.querySelector(t)
                }.call(this, t, e);
                if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
                    o = o.contentDocument.head
                } catch (t) {
                    o = null
                }
                n[t] = o
            }
            return n[t]
        }
    }(), a = null, s = 0, c = [], l = e(5);

    function d(t, n) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e], r = o[i.id];
            if (r) {
                r.refs++;
                for (var a = 0; a < r.parts.length; a++) r.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) r.parts.push(m(i.parts[a], n))
            } else {
                var s = [];
                for (a = 0; a < i.parts.length; a++) s.push(m(i.parts[a], n));
                o[i.id] = {id: i.id, refs: 1, parts: s}
            }
        }
    }

    function p(t, n) {
        for (var e = [], o = {}, i = 0; i < t.length; i++) {
            var r = t[i], a = n.base ? r[0] + n.base : r[0], s = {css: r[1], media: r[2], sourceMap: r[3]};
            o[a] ? o[a].parts.push(s) : e.push(o[a] = {id: a, parts: [s]})
        }
        return e
    }

    function u(t, n) {
        var e = r(t.insertInto);
        if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o = c[c.length - 1];
        if ("top" === t.insertAt) o ? o.nextSibling ? e.insertBefore(n, o.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild), c.push(n); else if ("bottom" === t.insertAt) e.appendChild(n); else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = r(t.insertAt.before, e);
            e.insertBefore(n, i)
        }
    }

    function f(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var n = c.indexOf(t);
        n >= 0 && c.splice(n, 1)
    }

    function b(t) {
        var n = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var o = function () {
                0;
                return e.nc
            }();
            o && (t.attrs.nonce = o)
        }
        return h(n, t.attrs), u(t, n), n
    }

    function h(t, n) {
        Object.keys(n).forEach(function (e) {
            t.setAttribute(e, n[e])
        })
    }

    function m(t, n) {
        var e, o, i, r;
        if (n.transform && t.css) {
            if (!(r = n.transform(t.css))) return function () {
            };
            t.css = r
        }
        if (n.singleton) {
            var c = s++;
            e = a || (a = b(n)), o = v.bind(null, e, c, !1), i = v.bind(null, e, c, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = function (t) {
            var n = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", h(n, t.attrs), u(t, n), n
        }(n), o = function (t, n, e) {
            var o = e.css, i = e.sourceMap, r = void 0 === n.convertToAbsoluteUrls && i;
            (n.convertToAbsoluteUrls || r) && (o = l(o));
            i && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([o], {type: "text/css"}), s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, e, n), i = function () {
            f(e), e.href && URL.revokeObjectURL(e.href)
        }) : (e = b(n), o = function (t, n) {
            var e = n.css, o = n.media;
            o && t.setAttribute("media", o);
            if (t.styleSheet) t.styleSheet.cssText = e; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(e))
            }
        }.bind(null, e), i = function () {
            f(e)
        });
        return o(t), function (n) {
            if (n) {
                if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                o(t = n)
            } else i()
        }
    }

    t.exports = function (t, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = i()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var e = p(t, n);
        return d(e, n), function (t) {
            for (var i = [], r = 0; r < e.length; r++) {
                var a = e[r];
                (s = o[a.id]).refs--, i.push(s)
            }
            t && d(p(t, n), n);
            for (r = 0; r < i.length; r++) {
                var s;
                if (0 === (s = i[r]).refs) {
                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                    delete o[s.id]
                }
            }
        }
    };
    var x = function () {
        var t = [];
        return function (n, e) {
            return t[n] = e, t.filter(Boolean).join("\n")
        }
    }();

    function v(t, n, e, o) {
        var i = e ? "" : o.css;
        if (t.styleSheet) t.styleSheet.cssText = x(n, i); else {
            var r = document.createTextNode(i), a = t.childNodes;
            a[n] && t.removeChild(a[n]), a.length ? t.insertBefore(r, a[n]) : t.appendChild(r)
        }
    }
}, function (t, n) {
    t.exports = function (t) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var e = n.protocol + "//" + n.host, o = e + n.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, n) {
            var i, r = n.trim().replace(/^"(.*)"$/, function (t, n) {
                return n
            }).replace(/^'(.*)'$/, function (t, n) {
                return n
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? e + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function (t, n) {
    t.exports = '<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<title>Sitting on chair</title>\n\t\t<script src="dist/bundle.js"><\/script>\n\t</head>\n\t<body>\n\t\t<header>\n\t\t\t<nav>\n\t\t\t\t<div class="container">\n\t\t\t\t\t<div class="logo">\n\t\t\t\t\t\tSit <span class="logo-green">on</span> chair\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class="menu">\n\t\t\t\t\t\t<li class="dropdown-item"><a href="#">O Firmie</a>\n\t\t\t\t\t\t\t<ul class="dropdown">\n\t\t\t\t\t\t\t\t<div class="triangle"></div>\n\t\t\t\t\t\t\t\t<li><a href="#">Aktualności</a></li>\n\t\t\t\t\t\t\t\t<li><a href="#">Nasz team</a></li>\n\t\t\t\t\t\t\t\t<li><a href="#">Historia</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li><a href="#">Galeria</a></li>\n\t\t\t\t\t\t<li><a href="#">Kontakt</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t\t<section id="sit-on-our-chair">\n\t\t\t\t<div class="container">\n\t\t\t\t\t<button class="slider-button left">&lt;</button>\n\t\t\t\t\t<button class="slider-button right">&gt;</button>\n\t\t\t\t\t\n\t\t\t\t\t<div class="slider active">\n\t\t\t\t\t\t<img src="images/black_chair.png" alt="">\n\t\t\t\t\t\t<div class="slider-text">\n\t\t\t\t\t\t\t<h1>Sit <span class="logo-green">on</span> our <span class="logo-green">Chair</span></h1>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus et ipsam rem\n\t\t\t\t\t\t\t\trepellendus vitae. Consectetur ex ipsa ipsum repellendus sed. Amet architecto beatae\n\t\t\t\t\t\t\t\tblanditiis cum dolor eum ex excepturi exercitationem.</p>\n\t\t\t\t\t\t\t<button class="button">Zobacz więcej</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="slider">\n\t\t\t\t\t\t<img src="images/orange_chair.png" alt="">\n\t\t\t\t\t\t<div class="slider-text">\n\t\t\t\t\t\t\t<h1>Sit <span class="logo-green">on</span> our <span class="logo-green">Orange Chair</span>\n\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus et ipsam rem\n\t\t\t\t\t\t\t\trepellendus vitae. Consectetur ex ipsa ipsum repellendus sed. Amet architecto beatae\n\t\t\t\t\t\t\t\tblanditiis cum dolor eum ex excepturi exercitationem.</p>\n\t\t\t\t\t\t\t<button class="button">Zobacz więcej</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="slider">\n\t\t\t\t\t\t<img src="images/red_chair.png" alt="">\n\t\t\t\t\t\t<div class="slider-text">\n\t\t\t\t\t\t\t<h1>Sit <span class="logo-green">on</span> our <span class="logo-green">Red Chair</span>\n\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus et ipsam rem\n\t\t\t\t\t\t\t\trepellendus vitae. Consectetur ex ipsa ipsum repellendus sed. Amet architecto beatae\n\t\t\t\t\t\t\t\tblanditiis cum dolor eum ex excepturi exercitationem.</p>\n\t\t\t\t\t\t\t<button class="button">Zobacz więcej</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</header>\n\t\t<main>\n\t\t\t<section id="chairs">\n\t\t\t\t<div class="container">\n\t\t\t\t\t<div class="box">\n\t\t\t\t\t\t<img src="images/box1_img.jpg" alt="">\n\t\t\t\t\t\t<div class="hover-text">\n\t\t\t\t\t\t\t<h2>Chair CLAIR</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="box">\n\t\t\t\t\t\t<img src="images/box2_img.jpg" alt="">\n\t\t\t\t\t\t<div class="hover-text">\n\t\t\t\t\t\t\t<h2>Chair MARGARITA</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="box text">\n\t\t\t\t\t\t<h2>Find all inputs</h2>\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto culpa dignissimos\n\t\t\t\t\t\tdolorem ducimus earum error est eveniet ipsa laboriosam magni mollitia nihil numquam obcaecati\n\t\t\t\t\t\todit perferendis placeat quas, quibusdam quis quisquam, quod rem repellat reprehenderit saepe\n\t\t\t\t\t\tsimilique sunt suscipit tempora temporibus totam vitae. Aliquam, consectetur cumque nulla\n\t\t\t\t\t\tpariatur quas saepe similique! Dicta, dolore molestias.\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</main>\n\t\t<section id="price">\n\t\t\t<div class="container">\n\t\t\t\t<h2 class="h2">Cennik</h2>\n\t\t\t\t<div class="flex">\n\t\t\t\t\t<div class="price-box">\n\t\t\t\t\t\t<h3 class="h3">Basic Plan</h3>\n\t\t\t\t\t\t<div class="box-price">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<span class="price">85 <sup>99</sup></span>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\tPLN / MSC\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="box-description">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tZakup towaru + dowóz\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p>Serwis</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class="box-button">Dołącz</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="price-box second-box">\n\t\t\t\t\t\t<h3 class="h3 second-h3">Standard Plan</h3>\n\t\t\t\t\t\t<div class="box-price second-box-price">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<span class="price">95 <sup>99</sup></span>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\tPLN / MSC\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="box-description second-box-description">\n\t\t\t\t\t\t\t<p>Zakup towaru + dowóz</p>\n\t\t\t\t\t\t\t<p>Serwis</p>\n\t\t\t\t\t\t\t<p>Gwarancja 5 lat</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class="box-button second-box-button">Dołącz</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="price-box">\n\t\t\t\t\t\t<h3 class="h3">Advanced Plan</h3>\n\t\t\t\t\t\t<div class="box-price">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<span class="price">211 <sup>00</sup></span>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\tPLN / MSC\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="box-description">\n\t\t\t\t\t\t\t<p>Zakup towaru + dowóz</p>\n\t\t\t\t\t\t\t<p>Serwis</p>\n\t\t\t\t\t\t\t<p>Gwarancja 6 lat</p>\n\t\t\t\t\t\t\t<p>Porady projektanta</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button class="box-button">Dołącz</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t\n\t\t<footer id="form">\n\t\t\t\n\t\t\t<div class="container">\n\t\t\t\t<div class="flex-header">\n\t\t\t\t\t<h2 class="h2">Skomponuj Swoje Krzesło</h2>\n\t\t\t\t\t<h2 class="h2">Podsumowanie</h2>\n\t\t\t\t</div>\n\t\t\t\t<form action="">\n\t\t\t\t\t<div class="form-box">\n\t\t\t\t\t\t<select name="type" id="type">\n\t\t\t\t\t\t\t<option value="" disabled selected>Wybierz rodzaj</option>\n\t\t\t\t\t\t\t<option value="Chair Clair" data-price="200">Chair Clair</option>\n\t\t\t\t\t\t\t<option value="Chair Margarita" data-price="300">Chair Margarita</option>\n\t\t\t\t\t\t\t<option value="Chair Selena" data-price="260">Chair Selena</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<select name="color" id="color">\n\t\t\t\t\t\t\t<option value="" disabled selected>Wybierz kolor</option>\n\t\t\t\t\t\t\t<option value="red" hidden>Czerwony</option>\n\t\t\t\t\t\t\t<option value="black" hidden>Czarny</option>\n\t\t\t\t\t\t\t<option value="orange" hidden>Pomarańczowy</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<select name="material" id="material">\n\t\t\t\t\t\t\t<option value="" disabled selected>Wybierz materiał</option>\n\t\t\t\t\t\t\t<option value="Tkanina" data-price="80" hidden>Tkanina</option>\n\t\t\t\t\t\t\t<option value="Skóra" data-price="160" hidden>Skóra</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\tTransport\n\t\t\t\t\t\t\t<input type="checkbox" data-price="80">\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-box">\n\t\t\t\t\t\t<img class="image" src="" alt="">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-box">\n\t\t\t\t\t\t<div class="chairs">\n\t\t\t\t\t\t\t<span class="chair-product"></span>\n\t\t\t\t\t\t\t<span class="chair-material"></span>\n\t\t\t\t\t\t\t<span class="chair-transport"></span>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="price-chairs">\n\t\t\t\t\t\t\t<span class="chair"></span>\n\t\t\t\t\t\t\t<span class="transport"></span>\n\t\t\t\t\t\t\t<span class="material"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="total-price">\n\t\t\t\t\t\t\t<div>Suma</div>\n\t\t\t\t\t\t\t<div><span class="sum">0</span> zł</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class="button-form" type="submit">\n\t\t\t\t\t\tZamawiam\n\t\t\t\t\t</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</footer>\n\t</body>\n</html>'
}]);