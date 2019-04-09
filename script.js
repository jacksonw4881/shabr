$(document).ready(function() {
 $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;    
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }
  });
})

$(window).scroll(function() {
    $(".info").each(function() {
        var scroll = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (scroll < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});
