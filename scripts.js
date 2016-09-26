//create global variable to manage pagination/display results//
var currentPage = 0;
//create global variable to set query parameter//
var q = "beer";
//create global variable to filter query//
var fq = "beer";

// Set url var to NYT article search API//
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
        'api-key': "2dcedd35edf7491e8d77d447157038de",
        'sort': "newest"
    });

// create
// a
// function that
// passes in global
// variable as arguments
// to
// create
// url
// for API request//
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
            //iterate through results array and append selected information to HTML//
            for (i = 0; i < results.length; i++) {
                html += "<li id='results-item'><h2 id='headline-container'><a class='headline' href='" + data.response.docs[i].web_url + "'>" + data.response.docs[i].headline.main + "</a></h2><p id='articleSnippet'>" + data.response.docs[i].snippet + "</p></li>";
            }
            $("#results-list").html(html);
            currentPage = page;
        }

    });
}

//run function to load page with data from NYT article search API//
loadPage(currentPage, q, fq);

// //create a click event that allows user to display next 10 search results//
    $("#forward").click(function () {
        event.preventDefault();
        currentPage += 1;
        
    });








