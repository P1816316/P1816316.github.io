/* nav bar */
$(document).ready(function() {
    $(".menu").click(function() {
        $("ul").toggle();
    });



});
/* go up buttom */
$(document).ready(function() {


    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });

    $('#myBtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

});



/* contact us app form */
$(document).ready(function() {
    Functiontell = function() {
        document.getElementById('modal-wrapper').style.display = 'block'
    }

    myFunction = function() {
        document.getElementById('modal-wrapper').style.display = 'none'
    }


    var modal = document.getElementById('modal-wrapper');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});