function loadApp(){
    $(function turn(){
        $('.flipbook').turn({
            height: 600,
            width: 1000,
            autoCenter: true,
            elevation: 50,
            gradients: true,
            duration: 1000,
        });
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