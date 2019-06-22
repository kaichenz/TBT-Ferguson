$(document).ready(function () {
    $('.container a').click(function(e) {
        $('.container a.active').removeClass('active');
        $('#next').removeClass('disabled');
        $(this).addClass('active');

        if ($('#dish_washer').hasClass('active')) {
            $('#next').attr('href', 'dish_washer.html');
        } else if ($('#sink').hasClass('active')) {
            $('#next').attr('href', 'sink.html');
        } else if ($('#washer').hasClass('active')){
            $('#next').attr('href', 'washer.html')
        } else if ($('#toilet').hasClass('active')){
            $('#next').attr('href', 'toilet.html')
        } else if ($('#shower').hasClass('active')){
            $('#next').attr('href', 'shower.html')
        } else if ($('#drain').hasClass('active') || 
                   $('#pipe').hasClass('active') || 
                   $('#water_heater').hasClass('active')){
            $('#next').attr('href', 'other.html')
        } 
        else if ($('#other').hasClass('active')) {
            $('#next').attr('href', 'other.html');
        }
    });
});