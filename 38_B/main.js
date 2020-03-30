$(document).ready(function(){
    $(".btn").on("click",function(){
        $('#qrcode').empty().qrcode($("#con-input").val())
        $('#barcode').empty().barcode($("#con-input").val(), "code39",{barWidth:2.5, barHeight:60,showHRI:false});
    })
})