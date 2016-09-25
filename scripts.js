// Set url var to NYT article search API, set query parameter to "beer"//
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
        'api-key': "2dcedd35edf7491e8d77d447157038de",
        'q': "beer",
        'fq': "headline:('beer')",
        'sort': "newest",
        'page': "0"
    });
//

$.ajax({
    method: 'GET',
    url: url,
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var results = data.response.docs;
        console.log(results);
        //iterate through results array//
        for (i = 0; i < results.length; i++) {
            $("#resultsItem").append($("#headline").html((data.response.docs[i].headline.main) + "<br>")); //display headline for each result in HTML//
            $("#resultsList").append($("#articleSnippet").html((data.response.docs[i].snippet) + "<br>")); //display each result in HTML//
        }
    }

});



