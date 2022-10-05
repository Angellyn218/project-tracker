
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

let updateTime = function () {
    let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    $("#currentDay").text(currentTime);
}

updateTime();
setInterval(updateTime, 1000);
