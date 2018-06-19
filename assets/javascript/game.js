//Variables
var randomNumber;
var losses = 0;
var wins = 0;
var oldNumber = 0;

//Function to reset the game
var resetGame = function () {
    $(".gemstones").empty();

    //Images
    var images = [
        "https://www.ajsgem.com/sites/default/files1/mahenge-spinel-rd-1000.jpg",
        "http://gemstoneguru.com/wp-content/uploads/2013/04/Tanzanite-Gemstone.png",
        "https://images.betteridge.com/images/static/services/appraisals/jewelry-appraisals-3.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51wgOEZBIGL._SY355_.jpg"];
    //Generates random number to user has to match
    randomNumber = Math.floor(Math.random() * 101) + 19;

    $("#theNumber").html("The Number: " + randomNumber);

    //Generates random number for Gemstone Buttons
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12 + 1);
        console.log(random);


        var gemstone = $("<div>");
        gemstone.attr({
            "class": "gemstone",
            "randomNumber": random,

        });
        gemstone.css({
            "background-image" : "url('" + images[i] + "')",
            "background-size":"cover"
        });

        $(".gemstones").append(gemstone);
    }
}

resetGame();

//Adds the numbers associated with the gemstones
$(document).on("click", ".gemstone", function () {
    var num = parseInt($(this).attr("randomNumber"));
    oldNumber += num;

    $("#totalScore").html(oldNumber);
    console.log(oldNumber);

    if (oldNumber > randomNumber) {
        losses++;
        $("#losses").html(losses);
        oldNumber = 0;
        $("#totalScore").html(oldNumber);
        resetGame();

    }
    else if (oldNumber === randomNumber) {
        wins++;
        $("#wins").html(wins);
        oldNumber = 0;
        $("#totalScore").html(oldNumber);
        resetGame();
    }
});

