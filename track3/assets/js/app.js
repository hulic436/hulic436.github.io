$('.nav-item').click(function(){
    var button_name = $(this).data('button');
 
    $('.nav-item').removeClass('active');
    $('.content').attr('class', 'column content');
    $(this).addClass('active');
    $('.content').addClass(button_name);
 
    if (button_name == 'happy'){
     $('.happy').removeClass('hide');
     $('audio')[0].play();
 }  
 
 $('.close').click(function(){
     $('.happy').addClass('hide');
     $('audio')[0].pause();
     $('.nav-item').removeClass('active');

     if (button_name == 'hopeless'){
        $('.hopeless').removeClass('hide');
        $('audio')[0].play();
    }  
    
    $('.close').click(function(){
        $('.hopeless').addClass('hide');
        $('audio')[0].pause();
        $('.nav-item').removeClass('active');
    }
)})})