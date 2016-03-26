var displayData = function(data) {
    if (data.label) {
       d3.select("#label").text(data.label);
    } else { 
        d3.select("#label").text("no label available") 
    }

    if (data.type) {
        d3.select("span#type").text(data.type);
    } else {
        d3.select("span#type").text("no type data available");  
    }         

    if (data.burst) {
        d3.select("span#burst").text(data.burst);
    } else {
        d3.select("span#burst").text("no burst data available");
    }

    if (data.volume) {
        d3.select("span#volume").text(data.volume);
    } else {
        d3.select("span#volume").text("no volume data available")
    }

    if (data.sentiment_negative) {
        d3.select("span#sentiment_negative").text(data.sentiment_negative)
            .style("color", 'red').style('font-size', '16px');
    } else {
        d3.select("span#sentiment_negative").text("no negative sentiment data available")
            .style("color", 'black').style("font-size", '12px');        
    }        

    if (data.sentiment_positive) {
        d3.select("span#sentiment_positive").text(data.sentiment_positive)
            .style("color", '#00FF00').style('font-size', '16px');
    } else {
        d3.select("span#sentiment_positive").text("no positive sentiment data available")
            .style("color", 'black').style("font-size", '12px');        
    }        

    if (data.sentiment_neutral) {
        d3.select("span#sentiment_neutral").text(data.sentiment_neutral)
            .style("color", '#999').style('font-size', '16px');
    } else {
        d3.select("span#sentiment_neutral").text("no neutral sentiment data available")
            .style("color", 'black').style('font-size', '12px');
    }        

    if (data.sentimentScore) {
        var sentimentScoreData = d3.select("span#sentimentScore")
            .text(data.sentimentScore)
            .style('font-size', '24px');
        if (data.sentimentScore < 40) {
            sentimentScoreData.style('color', 'red');            
        } else if (data.sentimentScore > 60) {
            sentimentScoreData.style('color', '#00FF00');            
        } else {
            sentimentScoreData.style('color', 'black');                        
        }
    } else {
        d3.select("span#sentimentScore").text("no sentiment score available")
            .style("color", 'black').style('font-size', '12px');
    }        

    if(data.days) {
        d3.select("#days-dates").html("");
        d3.select("#days-volume").html("");

        var days_date = d3.select("#days-dates")
            .data(data.days);

        days_date.selectAll('p')
            .data(function (d) { return d3.values(d) })
            .enter()
            .append('p')
            .text(function (d) { return moment(d.date).format('DD MMM, YY'); })
            ;

        var days_volume = d3.select("#days-volume")
            .data(data.days);

        days_volume.selectAll('p')
            .data(function (d) { return d3.values(d) })
            .enter()
            .append('p')
            .text(function (d) { return d.volume; })
            ;

    } else {
        d3.select("#days-dates").html("");
        d3.select("#days-volume").html("");
        d3.select("#days-list").text("no data available");
    }

    // Page types

    if(data.pageType.blog != 0 ) {
        d3.select("#page-type #Blog").text("Blog: ");
        d3.select("#page-volume #Blog").text(data.pageType.blog);
    } else {
        d3.select("#page-type #Blog").text("");
        d3.select("#page-volume #Blog").text("");
    }
    if(data.pageType.facebook != 0 ) {
        d3.select("#page-type #Facebook").text("Facebook: ");
        d3.select("#page-volume #Facebook").text(data.pageType.facebook);
    } else {
        d3.select("#page-type #Facebook").text("");
        d3.select("#page-volume #Facebook").text("");
    }
    if(data.pageType.forum != 0 ) {
        d3.select("#page-type #Forum").text("Forum: ");
        d3.select("#page-volume #Forum").text(data.pageType.forum);
    } else {
        d3.select("#page-type #Forum").text("");
        d3.select("#page-volume #Forum").text("");
    }
    if(data.pageType.general != 0 ) {
        d3.select("#page-type #General").text("General: ");
        d3.select("#page-volume #General").text(data.pageType.general);
    } else {
        d3.select("#page-type #General").text("");
        d3.select("#page-volume #General").text("");
    }
    if(data.pageType.image != 0 ) {
        d3.select("#page-type #Image").text("Image: ");
        d3.select("#page-volume #Image").text(data.pageType.image);
    } else {
        d3.select("#page-type #Image").text("");
        d3.select("#page-volume #Image").text("");
    }
    if(data.pageType.news != 0 ) {
        d3.select("#page-type #News").text("News: ");
        d3.select("#page-volume #News").text(data.pageType.news);
    } else {
        d3.select("#page-type #News").text("");
        d3.select("#page-volume #News").text("");
    }
    if(data.pageType.review != 0 ) {
        d3.select("#page-type #Review").text("Review: ");
        d3.select("#page-volume #Review").text(data.pageType.review);
    } else {
        d3.select("#page-type #Review").text("");
        d3.select("#page-volume #Review").text("");
    }
    if(data.pageType.twitter != 0 ) {
        d3.select("#page-type #Twitter").text("Twitter: ");
        d3.select("#page-volume #Twitter").text(data.pageType.twitter);
    } else {
        d3.select("#page-type #Twitter").text("");
        d3.select("#page-volume #Twitter").text("");
    }
    if(data.pageType.video != 0 ) {
        d3.select("#page-type #Video").text("Video: ");
        d3.select("#page-volume #Video").text(data.pageType.video);
    } else {
        d3.select("#page-type #Video").text("");
        d3.select("#page-volume #Video").text("");
    }

    // Queries
    // Array with one object in it
    // there is currently only one in the data set
    if(data.queries) {
        d3.select("#queries-id").text(data.queries[0].id);
        d3.select("#queries-name").text(data.queries[0].name);
        d3.select("#queries-volume").text(data.queries[0].volume);
    } else {
        d3.select("#queries-id").text("no data available");
        d3.select("#queries-name").text("no data available");
        d3.select("#queries-volume").text("no data available");
    }

}
