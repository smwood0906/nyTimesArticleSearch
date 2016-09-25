// Set url var to NYT article search API, set query parameter to "beer"//
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
        'api-key': "2dcedd35edf7491e8d77d447157038de",
        'sort': "newest"
    });

function loadPage(page,q,fq){
    $.ajax({
    method: 'GET',
    url: url + "?page="+ page + "?q=" + q + "?fq=headline:('" + fq + "')",
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var html= "";
        var results = data.response.docs;
        console.log(results);
        //iterate through results array//
        for (i = 0; i < results.length; i++) {
            html+= "<li id='results-item'><h2 id='headline'>" + data.response.docs[i].headline.main +"</h2><div id='articleSnippet'>" + data.response.docs[i].snippet +"</div></li>";
        }
     $("#results-list").html(html)
    }

});
}
loadPage(0,"beer", "beer");



