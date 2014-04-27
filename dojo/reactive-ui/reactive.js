var CAPI_KEY = "TO-BE-PROVIDED";

// Returns a Promise of the response
// See http://explorer.content.guardianapis.com/#/
// for API docs
function searchContentApi(query, limit) {
  return reqwest({
    url: 'http://content.guardianapis.com/search',
    type: 'jsonp',
    data: {
      'q':         query,
      'page-size': limit,
      'api-key':   CAPI_KEY,
      'show-fields': 'headline'
    }
  });
}


/* TODO: Instructions / Ideas:
 *
 * 1. Show the current query in the UI ('.q-display')
 * 2. Filter out queries of two characters or less
 * 3. Throttle the query to run at most once a second
 * 4. Run the query against the Content API (see helper function
 *    above)
 * 5. Display matched headlines in the 'results' list, as links to the
 *    original article
 * 6. Use 'limit' dropdown to customize the number of results
 * 7. Highlight the query in the matched headlines (if found)
 * 8. Allow disabling find-as-you-type behaviour using checkbox;
 *    if disabled, only search when the Search button is pressed
 * 9. Update the URL of the page to include ?q=<query> as the user
 *    updates the query
 */

var qEl = document.querySelector(".q");
var q = Bacon.fromEventTarget(qEl, "input");


// For debugging:
q.onValue(function(value) {
  console.log("q:", value);
});
