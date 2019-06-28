$(document).ready(function () {
    $('.container a').click(function(e) {
        $('.container a.active').removeClass('active');
        $('#next').removeClass('disabled');
        $(this).addClass('active');

        if ($('#dish_washer_drain').hasClass('active') ||
            $('#dish_washer_leaking').hasClass('active') ||
            $('#not_cleaning').hasClass('active') ||
            $('#basin').hasClass('active') ||
            $('#pipe').hasClass('active') ||
            $('#faucet').hasClass('active') ||
            $('#sink_drain').hasClass('active') ||
            $('#washer_leaking').hasClass('active') ||
            $('#washer_drain').hasClass('active') ||
            $('#intake').hasClass('active') ||
            $('#wont_flush').hasClass('active') ||
            $('#overflow').hasClass('active') ||
            $('#cracked').hasClass('active') ||
            $('#toilet_leaking').hasClass('active') ||
            $('#water').hasClass('active') ||
            $('#heater').hasClass('active') ||
            $('#water_pressure').hasClass('active') ||
            $('#shower_drain').hasClass('active')){

            $('#next').attr('href', 'access.html');
        } else if ($('#other').hasClass('active')){
            $('#next').attr('href', 'other.html');
        }
    });
});