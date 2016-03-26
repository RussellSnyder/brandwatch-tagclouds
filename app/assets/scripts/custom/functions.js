// global counters to base positioning of words on tag cloud
// should be reset after each cloud creation with resetSVG
var positionTextCounterX = 0;
var positionTextCounterY = 0;
var positionTextCounterNegativeX = 0;
var positionTextCounterNegativeY = 0;
var positionTextCounterXalt = 0;
var positionTextCounterYalt = 0;
// Its a double paradiddle with one extra.....
var returnNegOrPostiveArray = [1,-1,1,-1,1,1,-1,1,-1,1,-1,-1,1];


var resetSVG = function() {
    d3.select("#word-cloud").html("");
    positionTextCounterX = 0;
    positionTextCounterY = 0;
    positionTextCounterNegativX = 0;
    positionTextCounterNegativeY = 0;
    positionTextCounterXalt = 0;
    positionTextCounterYalt = 0;
}


// We will have sizes squeezed between 1 and 7 (6 numbers)
// now round them down to integers and multiply them to be more visible  
var fitIntoSixFontSizes = function(size, startFontSize, multiple) {
    var roundedSizes = Math.floor(size);
    var startSize = startFontSize;
    if (multiple) {
        return (roundedSizes + startSize) * multiple; 
    } else {
        return roundedSizes + startSize;
    }
}


var randomHex = function(minHex, maxHex) {
    var min = parseInt(minHex, 16);
    var max = parseInt(maxHex, 16);
    var randomNumber = Math.round((Math.random() * (max - min)) + min);
    var randomHex = randomNumber.toString(16);
    if (randomHex.length < 2) {
        randomHex = '0' + randomHex;
    }
    // console.log(min, max, randomNumber, randomHex);
    return randomHex;
}

// console.log(randomHex(00,'ff'));

// - A topic with a sentiment score > 60 should be displayed in green
// - A topic with a sentiment score < 40 should be displayed in red
// - Other topics should be displayed in grey
var giveColor = function(mySentimentScore) {
    var score = mySentimentScore;
    if (score > 60) {
        textColor = randomHex('00','02')+randomHex('fc','ff')+randomHex('00','04');
    } else if (score < 40) {
        textColor = randomHex('fc','ff')+randomHex('00','03')+randomHex('00','03');
    } else {
        var greyish = randomHex('aa','cc');
        textColor = greyish + greyish + greyish;
    }
    return textColor;
}

var animateDelay = function(mySize) {
    var delay = 0;
    var size = mySize;
    if (size < 20 ) {
        delay = 1000;
    } else {
        delay = 20;
    }
    return delay;
}


var returnNegOrPostive = function() {
    var element = returnNegOrPostiveArray.pop();
    returnNegOrPostiveArray.unshift(element);
    return element;
}

var returnRandomPositiveBetween = function(min, max) {
    return (Math.random() * (max - min) + min);
}

var positionTextVertical = function(d) {
    positionTextCounterY += (d.size);
    // console.log(positionTextCounterY += (d.size));

    return "translate(" + [d.x, positionTextCounterY] + ")rotate(" + returnNegOrPostive() * 2 + ")";
}

var positionTextBigMiddle = function(d) {
    var middlePadding = 50;
    if (d.volume < 20 ) {
        // start with padding amount
        if (returnNegOrPostive() > 0) {
            positionTextCounterY = ((Math.abs(positionTextCounterY) < middlePadding) ? middlePadding : positionTextCounterY);  
            positionTextCounterY += d.size;
            positionTextCounterX = (d.size + (returnRandomPositiveBetween(0,150) * returnNegOrPostive()));
            return "translate(" + [positionTextCounterX, positionTextCounterY] + ")rotate(" + returnNegOrPostive() * 1 + ")";
        } else {
            positionTextCounterNegativeY = ((Math.abs(positionTextCounterNegativeY) < middlePadding) ? -middlePadding : positionTextCounterNegativeY);  
            positionTextCounterNegativeY -= d.size;
            positionTextCounterNegativeX = (d.size + (returnRandomPositiveBetween(0,150) * returnNegOrPostive()));
            return "translate(" + [positionTextCounterNegativeX, positionTextCounterNegativeY] + ")rotate(" + returnNegOrPostive() * 1 + ")";
        }
    } else {
        var newPositioning = "translate("+ [positionTextCounterXalt - 140, positionTextCounterYalt] + ")";
        positionTextCounterXalt += returnRandomPositiveBetween(100,120);
        positionTextCounterYalt += (returnRandomPositiveBetween(0,50) * returnNegOrPostive());
        return newPositioning;
    }
}

