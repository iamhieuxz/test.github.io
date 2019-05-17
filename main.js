// loader 




// Nav-bar
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

// Hàm khởi tạo đồng hồ
function startTime() 
{
    // Lấy Object ngày hiện tại
    var today = new Date();

    // Giờ, phút
    var h = today.getHours();
    var m = today.getMinutes();

    // Chuyển đổi sang dạng 01, 02, 03
    m = checkTime(m);

    // Ghi ra trình duyệt
    document.getElementById('timer').innerHTML = h + ":" + m ;

    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
    var t = setTimeout(function() {
        startTime();
    }, 500);
}

// Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

