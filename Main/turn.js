function loadApp(){
    
    var flipbook = $('.flipbook');
    Hash.on('^page\/([0-9]*)$', {
        yep: function(path, parts){
            var page = parts[1];
            
            if(page!== undefined){
                if($('.flipbook').turn('is'))
                    $('.flipbook').turn('page',page);
            }
        },
        nop: function(path){
            if($('.flipbook').turn('is'))
                $('.flipbook').turn('page',1);
        }
    });
    
    flipbook.bind(($.isTouch) ? 'touched' : 'click', zoomHandle);
    
    flipbook.turn({
        height: 600,
        width: 1000,
        autoCenter: true,
        elevation: 50,
        gradients: true,
        duration: 1000,
        pages: 30,
        when: {
            turning: function(e, page, view){
                var book = $(this),
                    currentpage = book.turn('page'),
                    pages = book.turn('pages');
                
                if(currentpage>3 && currentpage<pages-3){
                    if(page==1){
                        book.turn('page',2).turn('stop').turn('page',
                                                             page);
                        e.preventDefault();
                        return;
                    }else if(page==pages){
                        book.turn('page',pages-1).turn('stop')
                        .turn('page',page);
                        e.preventDefault();
                        return;
                    }
                } 
            }
        }
    });
    function lineCheck(e){
    var text = $('.input').attr('class');
    var row = text.getAttribute("rows");
    var r = (text.value.split("\n")).length;
        if(document.all){
            if(r >= row && window.event.keyCode === 13){
                return false;
            }
        }else {
            if(r >= row && e.which === 13){
                return false;
            }
        }
    }
    
    //arrow

    $(document).keydown(function(e){
        var previous = 37, next = 39;

        switch (e.keyCode) {
            case previous:
                $('.flipbook').turn('previous');
            break;
            case next:
                $('.flipbook').turn('next');
            break;
        }
    });
    
    window.document.onkeypress =  lineCheck;

}