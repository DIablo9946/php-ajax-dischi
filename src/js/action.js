// Stampare a schermo una decina di dischi musicali
// (vedi screenshot) in due modi diversi:
// - Solo con l'utilizzo di PHP, che stampa direttamente i dischi in pagina: al caricamento
// della pagina ci saranno tutti i dischi.
// - Attraverso l'utilizzo di AJAX: al caricamento della pagina ajax chiederà attraverso una
// chiamata i dischi a php e li stamperà attraverso handlebars.
// Utilizzare: Html, Sass, JS, jQuery, handlebars, Php
// Opzionale:
// - Attraverso un'altra chiamata ajax, filtrare gli album per artista
// - Attraverso un'altra chiamata ajax, ordinare glialbum per data di uscita.

$ = require('jquery');
require('handlebars');
require('handlebars/runtime');


function init(){
  getData();
};

$(document).ready(init);

function getData(){
  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success : function(data){
      console.log(data);
      printElements(data);
    },
    error : function(data){

    }
  });
};


function printElements(data){

  var destination = $(".container");


  var dischi = data.response;

  for (var i=0; i < dischi.length; i++){
  var d = dischi[i];
  var source   = $("#template").html();
  var template = Handlebars.compile(source);
  var context = {title: d.title,
                author: d.author,
                genre:  d.genre,
                year:   d.year,
                poster: d.poster
                };
      var html   = template(context);

      destination.append(html);
  };


};
// https://flynn.boolean.careers/exercises/api/array/music
