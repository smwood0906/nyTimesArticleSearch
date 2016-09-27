# nyTimesArticleSearch
Single Page App to display search results from the New York Times article search API.
Default search term set to "beer".
Uses jQuery, JavaScript, CSS & HTML.

I wrote this SPA to automatically display results from the NYT article search API that contain the keyword "beer". However, I added the functionality for users to enter their keyword which will generate updated search results. The user can use the buttons at the bottom to navigate forward or back through sets of 10 search results However, the back button is not displayed when the user is on the first page of results. 

The headlines of the search results also act as links that take the user to the external page where they can view the article in full. Headlines change color on hover to alert users that they are a link, and visited links change color to indicate to users which articles they have visited.

I tried to keep the design simple (but readable) to convey the look of a traditional newspaper and the current New York Times website. 


Since I have not used a JS Framework, I accomplished this task by using jQuery with AJAX request so that the page can be updated without needing to be reloaded.
