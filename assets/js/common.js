$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

    function markSquareMedia(el, width, height) {
        if (!width || !height) return;
        var media = el.closest('.card-media');
        if (!media) return;
        if (Math.abs(width / height - 1) < 0.03) {
            media.classList.add('is-square');
        }
    }

    document.querySelectorAll('.card-media img').forEach(function (img) {
        var apply = function () { markSquareMedia(img, img.naturalWidth, img.naturalHeight); };
        if (img.complete) apply();
        else img.addEventListener('load', apply);
    });
});
