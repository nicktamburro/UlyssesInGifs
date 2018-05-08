$(document).ready(function(){

var chapter = "STATELY, PLUMP BUCK MULLIGAN CAME FROM THE STAIRHEAD, bearing a bowl of lather on which a mirror and a razor lay crossed. A yellow dressing gown, ungirdled, was sustained gently-behind him by the mild morning air. He held the bowl aloft and intoned: Introibo ad altare Dei. Halted, he peered down the" 

let words = chapter.split(" ");


for (i=0; i<words.length; i++){
	//so NO, buttonWord should be a value in the array...
	//var word = $(this).data('name');

    //okay this is interesting... we got a real freakout here, but it's working, something's working
    let word = words[i];
    ///put our actual new API key here...
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=G3lLz1LwwD6VRySY0kEddhrhDoHrzGeX";
    $.ajax({
        url: queryURL,
        method: 'GET'
        })
        .done(function(response) {
			console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $('<div/>');

                    var gif = $('<img/>');

                    gif.addClass('myImg')

                    gif.attr('src', results[i].images.fixed_height.url);

                    gif.attr('data-still', results[i].images.fixed_height_still.url)

                    gif.attr('data-animate', results[i].images.fixed_height.url)

                    gif.attr('data-state', 'still');

                    gifDiv.append(gif);

                    gifDiv.append('<h1>' + word + '</h1>');

                    gifDiv.prependTo($('#gifs-here'));



  }

});

//end of 1st loop
}
});