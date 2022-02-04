$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    }) ;

    $(window).on('scroll load', function(){
      $('#menu').Class('fa-times');
      $('header').Class('toggle');
    });

});