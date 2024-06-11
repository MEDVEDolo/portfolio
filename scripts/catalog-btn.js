window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion__btn').forEach(function(el) {
        el.addEventListener('click', function(event) {
            var parent = el.parentNode;

            for (var i = 0; i < 4; i++) {
                parent = parent.parentNode;
            }

            var artistClass = el.classList[2];

            if (!el.classList.contains('accordion__btn_active')) {
                parent.querySelectorAll('.catalog__accordion-content').forEach(function(el) {
                    el.classList.add('catalog__accordion-content_non-active');
                })
            }

            if (el.classList.contains('accordion__btn_active')) {
                el.nextElementSibling.classList.remove('accordion__btn_active')
            } else {
                 document.querySelectorAll('.accordion__btn').forEach(function(el) {
                     el.classList.remove('accordion__btn_active')
                 })
 
                el.classList.add('accordion__btn_active')
            }
            
            if (artistClass == 'accordion__btn_empty') {
                parent.querySelector('.catalog__accordion-content_empty').classList.remove('catalog__accordion-content_non-active');
            } else {
                document.querySelector(`.catalog__accordion-content_${artistClass}`).classList.remove('catalog__accordion-content_non-active');
            }
        })
    })
 })