// GOAL:
// Attraverso una chiamata ajax all'Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout

//chiamata Ajax 

function ajaxCall() {
  
    $.ajax({
        url: ' https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function (data,state) {
            var albums = data['response'];
            printAlbums(albums);
        }
    });
};

function printAlbums(albums) {
    var template = $('#albums-template').html();
    var compiled = Handlebars.compile(template);
    var target = $('.cds-container');

    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        console.log(album)
    }
}





function init() {
    ajaxCall();
}

$(document).ready(init);
