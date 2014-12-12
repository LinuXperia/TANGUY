TANGUY.slider = {
    grab: function () {
        'use strict';
        var config = {
            program: this.getAttribute('data-program'),
            update: this.getAttribute('data-update')
        };
        return $(this).mousemove(config, TANGUY.store_program).mouseup(TANGUY.slider.release);
    },

    release: function () {
        'use strict';
        return $(this).unbind('mousemove');
    }
};

//SLOPPY - CLEAN THESE UP LATER, OBVIOUSLY
$('#delay').on('mousedown', 'input', TANGUY.slider.grab);
$('#filter-eg').on('mousedown', 'input', TANGUY.slider.grab);
$('#vca-eg').on('mousedown', 'input', TANGUY.slider.grab);
$('#mixer').on('mousedown', 'input', TANGUY.slider.grab);
$('#filter').on('mousedown', 'input', TANGUY.slider.grab);
$('#osc1').on('mousedown', 'input.vertical-slider', TANGUY.slider.grab);
$('#osc2').on('mousedown', 'input.vertical-slider', TANGUY.slider.grab);
$('#lfo').on('mousedown', 'input.vertical-slider', TANGUY.slider.grab);
$('#mod-wheel').on('mousedown', 'input', TANGUY.slider.grab);
$('#portamento').on('mousedown', 'input.horizontal-slider', TANGUY.slider.grab);