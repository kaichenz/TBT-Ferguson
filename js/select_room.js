$(document).ready(function () {
    $('.container a').click(function(e) {
        $('.container a.active').removeClass('active');
        $('#next').removeClass('disabled');
        $(this).addClass('active');

        if ($('#kitchen').hasClass('active')) {
          $('#next').attr('href', 'kitchen.html');
        } else if ($('#laundry').hasClass('active')) {
          $('#next').attr('href', 'laundry.html');
        } else if ($('#bathroom').hasClass('active')) {
          $('#next').attr('href', 'bathroom.html');
        } else if ($('#other_room').hasClass('active')) {
          $('#next').attr('href', 'other_room.html');
        } 
    });
});