TANGUY.populate_programs = function () {
    'use strict';
    var programs = [
        'initialize',
        'ozone',
        'direct peon',
        'low bubble',
        'fake sync',
        'rhinoceros',
        'faux set',
        'stylish bass',
        'cool wire',
        'event deafener',
        'bel homme',
        'chattering',
        'square wave bass',
        'camembert',
        'salut detroit',
        'architecture',
        'plywood violin',
        'black celebration',
        'feedback drone',
        'male voice',
        'crawler',
        'red river',
        'metal cello',
        'papayawhip',
        'ragamuffin',
        'beatnik bongos',
        'fuzzy',
        'synth strings',
        'headcleaner',
        'easy cure',
        'rubberband',
        'jetlag',
        'abominable bassman',
        'science fiction brains',
        'bacon grease',
        'shanty',
        'bending branch',
        'snarly bass',
        'evening gardening',
        'weedy rectangle',
        'disco pabulum',
        'cheap snare',
        'beefy snare',
        'whompy bass',
        'sloppy bass',
        'chhchhchhchh',
        'round kick',
        'fisherman',
        'the last voice',
        'synth king',
        'showering dalek',
        'former marine',
        'galactic yawn',
        'pulse demon',
        'perry on the beach',
        'dolphin sighting',
        'gamelan',
        'hum',
        'swamp monster',
        'dusty pipes',
        'wistful pipes',
        'hihat',
        'maracas',
        'wah wah'
    ],
        urls = [],
        buttons = '',
        i;
    for (i = 0; i < programs.length; i += 1) {
        urls[i] = programs[i].replace(/\s+/g, '');
        buttons += '<button value="' + urls[i] + '">' + programs[i] + '</button>';
    }
    $('#program-select').append(buttons);
};