// On scroll navbar becomes white
$(document).scroll(function() {
    $('.navbar').toggleClass('scrolled' ,$(this).
    scrollTop()  > $('.navbar').height());
    
});