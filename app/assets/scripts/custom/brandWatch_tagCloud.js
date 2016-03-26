d3.json('topics.json', function (data) {

    //cavas variables
    var width = 750,
        height = 750;

    // Data in array form (easier to work with in D3)
    var topics_array = [];

    // data variables
    var biggestSize = d3.max(topics_array,function(d) { return d.volume; });
    var smallestSize = d3.min(topics_array,function(d) { return d.volume; });

    var TOPICS = data.topics;

    //  - The label.property of each topic should be the 'word' in the word cloud
    //  Set label.property to label.property
    //  Size is based on volume (assuming high volume = popularity)
    TOPICS.forEach(function(topic){
        topics_array.push({
            id: String(topic.id),
            label: String(topic.label), 
            volume: Number(topic.volume / 2),
            type: String(topic.type),
            sentiment_negative: Number(topic.sentiment.negative), 
            sentiment_neutral: Number(topic.sentiment.neutral), 
            sentiment_positive: Number(topic.sentiment.positive), 
            sentimentScore: Number(topic.sentimentScore),
            burst: Number(topic.burst),
            days: Array(topic.days),
            pageType: topic.pageType,
            queries: topic.queries
        });
    });

    //  - Each topic should have one of 6 different text sizes, with the most popular topics largest, and least popular smallest
    var topicscale = d3.scale.ordinal()
        .domain([smallestSize, biggestSize])
        .range([1,2,3,4,5,6]);

    //////////////////////////////////////////////
    //                                          //
    //  Waterfall Cloud                         //
    //                                          //
    //  high volume topics appear first         //
    //  followed by all others                  //
    //  every vertical space has its own word   //
    //                                          //
    //////////////////////////////////////////////

    var waterfallCloud = function(words) {
        d3.select("#word-cloud").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate("+(width / 2.5)+","+ 0 +")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .attr("id", function(d) { return d.label })
        .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", function(d) { return giveColor(d.sentimentScore); })
        .on('click', function(d) {
            displayData(d);
        })
        .transition()
        .delay(function (d) { return animateDelay(d.size) })
        .duration(1000)
        .attr("text-anchor", "middle")
        .attr("transform", function(d) { return positionTextVertical( d )})
        .text(function(d) { return d.label; })
        ;
    }

    var drawWaterfallCloud = function() {
        d3.layout.cloud().size([width, height])
            .words(topics_array)
            .padding(0)
            // .rotate(function() { return ~~(Math.random() * 2) * 90; })
            .fontSize(function(d) { return fitIntoSixFontSizes(d.volume, 10, 1); })
            .on("end", waterfallCloud)
            .start();
    }

    //////////////////////////////////////////////
    //                                          //
    //  Exploding Cloud                         //
    //                                          //
    //  All words appear close at first         //
    //  High volume words remain in center      //
    //  Lower volume spread                     //
    //                                          //
    //////////////////////////////////////////////
    var explodeCloud = function(words) {
        d3.select("#word-cloud").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate("+(width / 2)+","+ (height / 3) +")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .attr("id", function(d) { return d.label })
        .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", function(d) { return giveColor(d.sentimentScore); })
        .on('click', function(d) {
            displayData(d);
        })
        .attr("text-anchor", "middle")
        .transition()
        .ease("exp")
        .delay(function (d) { return d.x })
        .duration(1000)
        .attr("transform", function(d) { return positionTextBigMiddle( d )})
        .text(function(d) { return d.label; })
        ;
    }

    var drawExplodeCloud = function() {
        d3.layout.cloud().size([width, height])
            .words(topics_array)
            .padding(10)
            .fontSize(function(d) { return fitIntoSixFontSizes(d.volume, 10, 1); })
            .on("end", explodeCloud)
            .start();
    }


    //////////////////////////////////////////////
    //                                          //
    //  Flicker Cloud                           //
    //                                          //
    //  Words Don't move, but they fade         //
    //  In slowly and out quickly               //
    //  Classic  WP like 90deg layout           //
    //                                          //
    //////////////////////////////////////////////
    var flickerCloud = function(words) {
        d3.select("#word-cloud").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate("+(width / 2.10)+","+(height / 2.75)+")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", function(d) { return giveColor(d.sentimentScore); })
        .on('click', function(d) {
            displayData(d);
        })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .attr("id", function(d) { return d.id })
        .text(function(d) { return d.label; })
        .attr('fill-opacity', 0)
        .transition()
        .ease('bounce')
        .duration(function(d) { return 1500 - (d.size * 2) })
        .attr( 'fill-opacity', 0.75)
        .transition()
        .duration(function(d) { return 3000 + d.size })
        .attr('fill-opacity', 0.0)
        .transition()
        .ease('bounce')
        .duration(function(d) { return 500 + (d.size * 2) })
        .transition()
        .ease('elastic')
        .attr( 'fill-opacity', 1)
            ;
    }

    var drawFlickerCloud = function() {
        d3.layout.cloud().size([width, height])
            .words(topics_array)
            .padding(10)
            .rotate(function() { return ~~(Math.random() * 2) * 90; })
            .fontSize(function(d) { return fitIntoSixFontSizes(d.volume, 10, 1); })
            .on("end", flickerCloud)
            .start();
    }

    //////////////////////////////////////////////
    //                                          //
    //  Bouncy Cloud                            //
    //                                          //
    //  It's like a circus                      //
    //  But you know....                        //
    //  Actually just a tag Cloud :-)           //
    //                                          //
    //////////////////////////////////////////////
    var bouncyCloud = function(words) {
        d3.select("#word-cloud").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate("+(width / 2.5)+","+ 0 +")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .attr("id", function(d) { return d.label })
        .style("font-size", function(d) { return d.size + "px"; })
        .style("fill", function(d) { return giveColor(d.sentimentScore); })
        .on('click', function(d) {
            displayData(d);
        })
        .attr("text-anchor", "middle")
        .attr("transform", "translate(-900, 0)")
        .transition()
        .duration(4000)
        .ease('elastic')
        .attr("transform", function(d) { return positionTextVertical( d )})
        .text(function(d) { return d.label; })
        ;
    }

    var drawBouncyCloud = function() {
        d3.layout.cloud().size([width, height])
            .words(topics_array)
            .padding(10)
            .rotate(function() { return ~~(Math.random() * 2) * 90; })
            .fontSize(function(d) { return fitIntoSixFontSizes(d.volume, 10, 1); })
            .on("end", bouncyCloud)
            .start();
    }


    // nav functionality
    d3.select("#show-waterfallCloud").on("click", function(d) {
        resetSVG();
        drawWaterfallCloud();
    });

    d3.select("#show-explodeCloud").on("click", function(d) {
        resetSVG();
        drawExplodeCloud();
    });

    d3.select("#show-flickerCloud").on("click", function(d) {
        resetSVG();
        drawFlickerCloud();
    });

    d3.select("#show-bouncyCloud").on("click", function(d) {
        resetSVG();
        drawBouncyCloud();
    });


    // cloud to start:
    drawWaterfallCloud();
});

