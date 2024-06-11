window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__btn').forEach(function(el) {
        el.addEventListener('click', function(event) {
            if (el.classList.contains('catalog__btn__is-active')) {
                el.nextElementSibling.classList.remove('catalog__btn__is-active')
            } else {
                 document.querySelectorAll('.catalog__btn').forEach(function(el) {
                     el.classList.remove('catalog__btn__is-active')
                 })
 
                el.classList.add('catalog__btn__is-active')
            }

            document.querySelectorAll('.catalog__content').forEach(function(el) {
                el.classList.add('catalog__content_non-active');
            })

            var countryClass = el.classList[2];
            var countryName = countryClass.substr(4);

            document.querySelector(`.catalog__content_${countryName}`).classList.remove('catalog__content_non-active');
        })
    })
 })