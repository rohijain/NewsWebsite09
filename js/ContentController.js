function getNewsItemsForDate() {
    console.log(_config.api.invokeUrl);


	fetch(_config.api.invokeUrl + '/getnews' + "?news_date=09-01-1993")
	.then(response => response.json())
	.then(data => console.log(data));
 
}

function completeGetRequest() {
    console.log("completed");
}

 function createNewsItem() {
        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/createnewsitem',
            data: JSON.stringify({
                NewsItem: {
                    news_date: "09-09-1993",
                    news_title: "news title",
					news_body: "some news from somewhere"
                }
            }),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error CREATING ITEM: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
            }
			
        });
    }

