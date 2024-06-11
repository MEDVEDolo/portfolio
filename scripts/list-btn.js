// jQuery(document).ready(function($) {
//     if ($('.developments__list').find('.developments__item').length > 3) {
//         $('.developments__btn').click(function() {
//             $('.developments__item:nth-child(n+4)').slideToggle('');

//             $(this).toggleClass('opnd_g');

//             if ($(this).hasClass('opnd_g')) {
//                 $(this).html('Скрыть');
//             } else {
//                 $(this).html('Все события');
//             }
//         });
//     } else {
//         $('.developments__btn').hide();
//     }
// });

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.developments__btn').addEventListener('click', function(event) {
        console.log(document.querySelector('.developments__btn').textContent);

        if (document.querySelector('.developments__btn').textContent == "Все события") {
            document.querySelectorAll('.developments__item').forEach(function(el) {
                el.classList.remove('developments__item_is-close');

                document.querySelector('.developments__btn').textContent = "Скрыть";
            })
        } else {
            document.querySelectorAll('.developments__item').forEach(function(el) {
                el.classList.add('developments__item_is-close');

                document.querySelector('.developments__btn').textContent = "Все события";
            })
        }

    })
 })