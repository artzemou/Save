import $ from 'jquery';
window.jQuery = window.$ = $;
export default function scrollToSection() {
    $('h2.title, h4.title, h3.title').on('click', function () {

      var index = 0;

        if ($(this).hasClass('fixed')) {
            var target = $(this).next();

            $('html, body').animate({
                scrollTop: $(target).offset().top - (50 + (60 * index))
            })


        } else {

            $('html, body').animate({
                scrollTop: $(this).offset().top - (50 + (60 * index))
            })
        }


    });
}
