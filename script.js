var apikey = "byMMQjlz1JtTyUnGQ2hwhL16rPEYaPDo";

// "#search-term" search input
// "#num-records-select" 1, 5 or 10 articles
// "#start-year" start year input
// "#end-year" end year input
// "#run-search" search button
// "#clear-all" clear articles button
// "#well-section" articles div

// TODO:
// replace hard coded values
// limit number of articles

// user search
var search = "election";
var beginYear = "2010";
var endYear = "2020";

// ajax request
queryURL =
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
}).then(function (response) {
    console.log(response);
});
