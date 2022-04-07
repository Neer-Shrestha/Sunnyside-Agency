jQuery(document).ready(function ($) {
    $('#nav-toggle').on('click', ()=> {
        $('.site-header').toggleClass('open')
    })
});