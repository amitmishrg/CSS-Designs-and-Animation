function on_change(a) {
    $('input[type=radio][name=' + a + ']').change(function() {
        $(this).closest(".radio-selector").siblings( ".container" ).css(a, this.value);
    });
}
function on_change_item(a) {
    $('input[type=radio][name=' + a + ']').change(function() {
        $(this).closest(".radio-selector").siblings( ".container" ).find('.item3').css(a, this.value);
    });
}
on_change('flex-direction');
on_change('flex-wrap');
on_change('align-items');
on_change('justify-content');

on_change_item('align-self');
on_change_item('flex-grow');
on_change_item('flex-shrink');
