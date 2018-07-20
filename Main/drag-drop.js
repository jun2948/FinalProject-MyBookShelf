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
            $('.flipbook #row1-1').css( {visibility: 'visible'});
        },
        out: function(e,ui){
            $('.createdBook').css({
                width: 50,
                height: 60
            });
        }
    });
});

$(function clickBooks(){
    $(".books .loc").on('click',function() {
        var $this = $(this);

        if(!$this.attr("drag-and-drop") || $this.attr("drag-and-drop") == "off"){
            $this.attr("drag-and-drop","on");
           
            $("#garbage").hide(1500);
            $("div[drag-and-drop='off']").hide(1500);
            $(".optionButton").hide(1500);
            $('.flipbook').css({
                visibility: 'visible'
            });
            $this.animate({
                width: '500px',
                height: '600px',
                left: '-80px',
                top: '-150'
            },1500);
            setTimeout( function(){
                $('.return').css({ opacity: '1.0'});
            },1500);
            $('.return').mouseover(function() {
                $('.return .deleteWithColor').css({ opacity: '1.0'});
                $('.return .delete').css({ opacity: '0'});
            }).mouseout( function() {
                $('.return .deleteWithColor').css({ opacity: '0'});
                $('.return .delete').css({ opacity: '1.0'});
            });
            
            $(function booktitle(){
                $('input').on("click",function(){
                    $('input').css({
                        opacity: 1.0
                    });
                }),
                $('input').keypress( function( event ){
                    if(event.which === 13){
                        var title = $('#title').val();
                        $('h1').html(title);
                        $('input').css({
                            opacity: 0
                        });
                    }
                });
            });
        }
    });

    $('.return').on('click',function(){
        $(".books .loc").attr ("drag-and-drop") == "on";
        $('.flipbook').css({
            visibility: 'hidden'
        });
        $(".books .loc").animate({
            width:  30,
            height: 70,
            left: 0,
            top: 0
        },1500,function(){
            $(".books .loc").attr("drag-and-drop","off");
        });
        setTimeout( function(){
            $('.return').css({ opacity: '0'});
        },1500);

        $("#garbage").show(1500);
        $("div[drag-and-drop='off']").show(1500);
        $(".optionButton").show(1500);
    });
});
