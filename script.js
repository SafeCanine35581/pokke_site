var countDownDate = new Date("Nov 6, 2027 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " day(s), " + hours + " hour(s), " + minutes + " minute(s), and " + seconds + " second(s) ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Jungle Pocket should have been added to Umamusume Global!";
    }
})