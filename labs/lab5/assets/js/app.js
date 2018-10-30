$('.nav-item').click(function(){
   var button_name = $(this).data('button');

   if (button_name == 'beyonce'){
    $('.slay').removeClass('hide');
    $('.audio')[0].play();

 } else {
   $('.nav-item').removeClass('active');
   $('.content').attr('class', 'column content');
   $(this).addClass('active');
   $('.content').addClass(button_name);
});

$('.close').click(function(){
    $('.slay').addClass('hide');
    $('.audio')[0].pause();
});