var apikey = "byMMQjlz1JtTyUnGQ2hwhL16rPEYaPDo";

// "#search-term" search input
// "#num-records-select" 1, 5 or 10 articles
// "#start-year" start year input
// "#end-year" end year input
// "#run-search" search button
// "#clear-all" clear articles button
// "#well-section" articles div

// TODO:
// what if user doesn't specify begin or end year
// make sure none of the response data is null

// user search
var search = "";
var numberResults = 0;
var beginYear = 0;
var endYear = 0;

// function runSearch (numArticles)
function runSearch(numArticles) {
    // ajax request
    var queryURL =
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
        search +
        "&api-key=" +
        apikey +
        "&begin_date=" +
        beginYear +
        "0101" +
        "&end_date=" +
        endYear +
        "1231";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (nytresponse) {
        console.log(nytresponse);
        // create article divs to house article information
        for (var i = 0; i < numArticles; i++) {
            // new article element
            var articleDiv = $("<div>");
            // get title of article
            var title = $("<p>").text(nytresponse.response.docs[i].headline.main);
            console.log(nytresponse.response.docs[i].headline.main);
            // add title to article element
            articleDiv.append(title);
            // get author of article
            var author = $("<p>").text(nytresponse.response.docs[i].byline.original);
            console.log(nytresponse.response.docs[i].byline.original);
            // add author to article element
            articleDiv.append(author);
            // add article element to well-section
            $("well-section").append(articleDiv);
        }
    });
}

// clear the articles on the page
function clearArticles() {
    // clear existing articles
    $("#well-section").empty();
}

// search button on click listener
$("#run-search").on("click", function (event) {
    event.preventDefault();
    // clear existing articles
    clearArticles();
    // get search value, trim white space
    search = $("#search-term").val().trim();
    // get number of search results
    numberResults = $("#num-records-select").val().trim();
    // get start year
    beginYear = $("#start-year").val().trim();
    // get end year
    endYear = $("#end-year").val().trim();

    // do search
    runSearch(numberResults);
});

// clear button on click listener
$("#clear-all").on("click", clearArticles);
