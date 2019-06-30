$(document).ready(function() {
    $('#accoBtn').click(function() {
        // als class aanwezig is
        if ($(this).hasClass('active')) {
            // verwijder de class
            $(this).removeClass('active');
            $("#accordion").accordion("disable");
            console.log('accordion uit');
            $(this).text("Niet actief");
        } else { // anders
            // voeg de class toe
            $(this).addClass('active');
            $("#accordion").accordion("enable");
            console.log('accordion aan');
            $(this).text("wel actief");
        }
    });
    $("#accordion").accordion();
    $("#accordion").accordion({ animate: 1200, heightStyle: "content" });
});
$("panel").animate({
    width: "100vw"
}, 4000, function() {


});
var player = videojs('player');
var playBtn = $('#play');
var rewindBtn = $('#rewind');

player.ready(function() {


    playBtn.click(function() {

        if (!player.paused()) {

            player.pause();
        } else {
            player.play();
        }
    });

    rewindBtn.click(function() {
        var time = player.currentTime();
        player.currentTime(time - 2);
    });


    player.on("ended", function() {
        $("body").css({ "background": "green" });
    });

});