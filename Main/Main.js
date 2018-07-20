$(function click(){
    $("#bookButton").on('click',function(){
        setTimeout( function(){
            $('.bookcolor').css({ 
                visibility :'visible',
                opacity: '1.0'
            });
        },500);
        
        setTimeout( function(){
            $('.createdBook').css({ 
                opacity: '1.0'
            });
        }, 1000);
    });
});

$(function clickColor(){
    $('#red').on('click',function(){
        $('.createdBook').css({ backgroundColor: 'red'});
    });
    $('#blue').on('click',function(){
        $('.createdBook').css({ backgroundColor: 'blue'});
    });
    $('#green').on('click',function(){
        $('.createdBook').css({ backgroundColor: 'green'});
    });
});


