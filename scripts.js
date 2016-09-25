// Set url var to NYT article search API, set query parameter to "beer"//
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var currentPage = 0;

url += '?' + $.param({
        'api-key': "2dcedd35edf7491e8d77d447157038de",
        'sort': "newest"
    });

//create a function takes in arguments to create url for API request//
function loadPage(page, q, fq) {
    $.ajax({
        method: 'GET',
        url: url + "&page=" + page + "&q=" + q + "&fq=headline:('" + fq + "')",
        dataType: 'json',
        success: function (data) {
            console.log(data);
            var html = "";
            var results = data.response.docs;
            console.log(results);
            //iterate through results array and append to HTML//
            for (i = 0; i < results.length; i++) {
                html += "<li id='results-item'><h2 id='headline'><a href='" + data.response.docs[i].web_url +"'>" + data.response.docs[i].headline.main + "</a></h2><p id='articleSnippet'>" + data.response.docs[i].snippet + "</p></li>";
            }
            $("#results-list").html(html);
            currentPage = page;
            console.log(currentPage);
        }

    });
}
loadPage(currentPage, "beer", "beer");



