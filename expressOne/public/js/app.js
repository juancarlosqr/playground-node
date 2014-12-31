(function($)
{
    function handle(data){
        if ( data.result === true )
        {
            var cities = data.cities, html = '';
            $.each(cities, function(index, value){
                html += '<li>' + value + '</li>';
            });
            $('#cities').html(html);
        }
    }
    $.get('/cities', handle);
})(jQuery);