TANGUY.update_delay_rate = function () {
    'use strict';
    var delay = [TANGUY.delay1, TANGUY.delay2, TANGUY.delay3, TANGUY.delay4],
        i;
    for (i = 0; i < 4; i += 1) {
        delay[i].delayTime.setValueAtTime(TANGUY.program.delay_rate * 2, TANGUY.synth.currentTime);
    }
    return;
};

TANGUY.update_delay_amt = function () {
    'use strict';
    var delay = [TANGUY.delay1_vca, TANGUY.delay2_vca, TANGUY.delay3_vca, TANGUY.delay4_vca],
        i;
    for (i = 0; i < 4; i += 1) {
        delay[i].gain.setValueAtTime(TANGUY.program.delay * TANGUY.program.delay, TANGUY.synth.currentTime);
    }
    return;
};