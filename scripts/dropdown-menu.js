window.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.style-menu__btn').forEach(function(el) {
       el.addEventListener('click', function(event) {
           console.log(el.nextElementSibling.classList.contains('submenu_is-active'))
           if (el.nextElementSibling.classList.contains('submenu_is-active')) {
               el.nextElementSibling.classList.remove('submenu_is-active')
               el.classList.remove('style-menu__btn_active')
               el.classList.add('style-menu__btn_no-active')
           } else {
                document.querySelectorAll('.submenu').forEach(function(el) {
                    el.classList.remove('submenu_is-active')
                })

                document.querySelectorAll('.style-menu__btn').forEach(function(el) {
                    el.classList.remove('style-menu__btn_active')
                    el.classList.add('style-menu__btn_no-active')
                })

               el.nextElementSibling.classList.add('submenu_is-active')
               el.classList.add('style-menu__btn_active')
               el.classList.remove('style-menu__btn_no-active')
           }
       })
   })
})