(function() {

    var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getTime() {

        var date = new Date(),
            second = date.getSeconds(),
            minute = date.getMinutes(),
            hour = date.getHours(),
            time = date.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            }),
            day = date.getDay(),
            month = date.getMonth(),
            date = date.getDate() + ' . ' + months[month],

            ds = second * -6,
            dm = minute * -6,
            dh = hour * -30;

        $('.second').css('transform', 'rotate(' + ds + 'deg)');
        $('.minute').css('transform', 'rotate(' + dm + 'deg)');
        $('.hour').css('transform', 'rotate(' + dh + 'deg)');

        $('.time').text(time);
        $('.day').text(days[day]);
        $('.date').text(date)
    }

    function second(selector, size) {
        for(var s = 0; s < 60; s++) {
            $(selector).append('<span style="transform: rotate(' + 6 * s + 'deg) translateX(' + size + 'px)">' + s + '秒' + '</span>')
        }
    }

    function minute(selector, size) {
        for(var s = 0; s < 60; s++) {
            $(selector).append('<span style="transform: rotate(' + 6 * s + 'deg) translateX(' + size + 'px)">' + s + '分' + '</span>')
        }
    }

    function dail(selector, size) {
        for(var s = 0; s < 60; s++) {
            $(selector).append('<span style="transform: rotate(' + 6 * s + 'deg) translateX(' + size + 'px)">' + s + '</span>')
        }
    }

    second('.second', 195);
    minute('.minute', 145);
    dail('.dail', 230);

    for(var s = 1; s < 13; s++) {
        $('.hour').append('<span style="transform: rotate(' + 30 * s + 'deg) translateX(100px)">' + s + '点' + '</span>')
    }

    setInterval(getTime, 1000);
    getTime();

}());