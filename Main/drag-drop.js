$(function dragable() {
    $('.books').sortable();
    $('.books').disableSelection();
    
    $('.createdBook').draggable();
    $('.books .loc').droppable({
        over: function(e,ui){
            $('.createdBook').css({
                width: 30,
                height: 70
            });
        },
        drop: function(e,ui){
//                $('.books .loc').append('<div class="flipbook">');
//                $('<div class="hard">').append('<h1 class="header">No Title</h1>');
//                $('.hard').append('<input type="text class="title" placeholder="set a book title">');
//                $('.hard').append('</div>');
            $('.books').css( {visibility: 'visible'});
        },
        out: function(e,ui){
            $('.createdBook').css({
                width: 50,
                height: 60
            });
        }
    });
});

