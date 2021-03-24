function getNewsItemsForDate() {
    console.log(_config.api.invokeUrl);

	fetch(_config.api.invokeUrl + '/getnews' + "?news_date=09-01-1993")
	.then(response => response.json())
	.then(data => console.log(data));
 
}

function completeGetRequest() {
    console.log("completed");
}
