function getNewsItemsForDate() {
    console.log(_config.api.invokeUrl);
	
	console.log("news date::" + $("#getNewsDateId").val());
	fetch(_config.api.invokeUrl + '/getnews' + "?news_date=" + $("#getNewsDateId").val())
	.then(response => response.json())
	.then(data => {
		console.log(data);
		$("#newsForDate").text(JSON.stringify(data.newsItems.Items));
	});
}

function completeGetRequest() {
    console.log("completed");
}

 function createNewsItem() {

fetch(_config.api.invokeUrl + '/postnews', {
  method: 'POST', 
  body: JSON.stringify({
               
                    news_date: $("#postNewsDateId").val(),
                    news_title: $("#postNewsTitleId").val(),
					news_body: $("#postNewsNewsBodyId").val()
            })
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
    }

