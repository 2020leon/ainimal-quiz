(() => {
    var xmlHttp = new XMLHttpRequest();
    var url = 'http://recruit.ainimal.io/friend_list';
    var json = $.getJSON(`https://jsonp.afeld.me/?callback=?&url=${url}`, (data) => {
        data.sort((a, b) => {
            var aa = new Date(a.last_message_timestamp).getTime();
            var bb = new Date(b.last_message_timestamp).getTime();
            return bb - aa;
        });
        data.forEach((item) => {
            var last_message_timestamp = item.last_message_timestamp.replace(' ', 'T');
            var timestamp = new Date(last_message_timestamp)
            var chatroom = `<li class="media my-4"><img src="circle-icons-profile${item.animal}.svg" class="mr-3" alt="profile"><div class="media-body"><h5 class="mt-0 mb-1">${item.nickname}</h5>${item.last_message}</div><div class="time-stamp">${timestamp.getMonth() + 1}/${timestamp.getDate()}，${getDateDiff(last_message_timestamp)}</div></li>`;
            $('ul.chat-list-ul').append(chatroom);
        });
    })
})();

function getDateDiff(dateTimeStamp) {
    var timestamp = new Date(dateTimeStamp).getTime();
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;
    var now = new Date().getTime();
    var diffValue = now - timestamp;
    console.log(new Date(dateTimeStamp).getTime());
    var result;
    if (diffValue < 0) {
        return;
    }
    var yearC = diffValue / year;
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (yearC >= 1) {
        result = "" + parseInt(yearC) + "年前";
    } else if (monthC >= 1) {
        result = "" + parseInt(monthC) + "個月前";
    } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "週前";
    } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小時前";
    } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分鐘前";
    } else
        result = "剛剛";
    return result;
}