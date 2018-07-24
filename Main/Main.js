(function($){
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

//$(function pages(){
//    for(var i = 0; i < 30; i++){
//        $('#row1-2').append('<div class="flippage"></div>');
//        $('.flippage').append('<textarea class="input" id="text" name="2" cols="68" rows="39" wrap="hard" onchange="Limit(event)" onkeyup="Limit(event)"></textarea>');
//    }
//});

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
//                $.ajax({
//                    url: 'book1.html',
//                    datatype: 'html',
//                    timeout: 500,
//                }).done(function(data){
//                    $('#row1-3').load('/Main/book1.html');
//                })
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
                    $('.hard input').on("click",function(){
                        $('.hard input').css({
                            opacity: 1.0
                        });
                    }),
                    $('.loc input').keypress( function( event ){
                        if(event.which === 13){
                            var title = $('.title').val();
                            $('.loc h1').html(title);
                            $('.hard input').css({
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

})(jQuery);



