/*!
 * custom.js <https://www.qingwei.tech>
 * Pornhub图标生成器-清渭技术小站<https://www.qingwei.tech>
 */
window.onresize = resizes;

var porn = document.getElementById("pornhub");
var pornDivWidth = porn.clientWidth || porn.offsetWidth;
var pornDivHeight = porn.clientHeight || porn.offsetHeight;
var pornFontSize = parseFloat($("#porntext").css('fontSize'));

function changeQuality(){
    // 调整图片比例
    var Quality = parseFloat(document.getElementById("Quality").value);
    var newWidth = pornDivWidth * Quality;// DIV宽比例缩小
    var newHeight = pornDivHeight * Quality;// DIV 高比例缩小
    var newPornSize= pornFontSize * Quality;// 字体比例缩小
    porn.style.width=newWidth+'px';
    porn.style.height=newHeight+'px';
    document.getElementById("porntext").style.fontSize = newPornSize+"px";
    document.getElementById("hubtext").style.fontSize = newPornSize+"px";
}

function resize() {
    var x = document.getElementById("Size").value;
    pornFontSize = parseFloat(x);// 这里实际调整了字体大小，为了后面等比例缩放，这个值要更新一次
    document.getElementById("porntext").style.fontSize = x;
    document.getElementById("hubtext").style.fontSize = x;
    changeQuality();// 之所以要调用是因为存在先缩小比例再调整字体大小的问题，为了图片协调这里一律按比例缩放
}
function resizes() {
    // 根据浏览器大小调整字体大小
    var width = document.body.clientWidth;
    if (width >= 576 && width < 768) {
        document.getElementById("porntext").style.fontSize = "80px";
        document.getElementById("hubtext").style.fontSize = "80px";
        document.getElementById("Size").options[0].selected = true;
    }
    if (width >= 768 && width < 1200) {
        document.getElementById("porntext").style.fontSize = "100px";
        document.getElementById("hubtext").style.fontSize = "100px";
        document.getElementById("Size").options[2].selected = true;
    }
    if (width >= 1200) {
        document.getElementById("porntext").style.fontSize = "125px";
        document.getElementById("hubtext").style.fontSize = "125px";
        document.getElementById("Size").options[4].selected = true;
    }
}
function grabCanvas() {
    // 生成图片    
    html2canvas(document.querySelector("#pornhub")).then(canvas => {
        download(canvas, 'download.png');

    });
}
function download(canvas, filename) {
    var lnk = document.createElement('a'), e;
    lnk.download = filename;
    lnk.href = canvas.toDataURL("image/png;base64");
    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0, false, false, false,
            false, 0, null);

        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}
function changeBgColor(c) {
    // 更改背景颜色
    pornhub=document.getElementById("pornhub");
    pornhub.style.backgroundColor = c.value;
}
$(function () {
    $('#Bgcolor').colorpicker();
});