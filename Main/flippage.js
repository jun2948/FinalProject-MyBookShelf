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
window.document.onkeypress =  lineCheck;

