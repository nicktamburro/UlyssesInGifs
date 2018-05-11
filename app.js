$(document).ready(function(){

var chapter = "STATELY, PLUMP BUCK MULLIGAN CAME FROM THE STAIRHEAD, bearing a bowl of lather on which a mirror and a razor lay crossed. A yellow dressing gown, ungirdled, was sustained gently-behind him by the mild morning air. He held the bowl aloft and intoned: Introibo ad altare Dei. Halted, he peered down the" 

/*let words = chapter.split(" ");*/

//for (i=0; i<words.length; i++){
	
    //let word = words[i];

    chapter.split(" ").reduce((p, word) => {
    return p.then(() => {

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=G3lLz1LwwD6VRySY0kEddhrhDoHrzGeX";
    $.ajax({
        url: queryURL,
        method: 'GET'
        }).then(response => {
                var results = response.data;

                    var gifDiv = $('<div/>');

                    var gif = $('<img/>');

                    gif.addClass('myImg');

            
                    gif.attr('src', results[0].images.fixed_height.url);

                    gif.attr('data-still', results[0].images.fixed_height_still.url)

                    gif.attr('data-animate', results[0].images.fixed_height.url)

                    gif.attr('data-state', 'still');

                    gifDiv.append(gif);

                    gifDiv.append('<h1>' + word + '</h1>');

                    gifDiv.appendTo($('#gifs-here'));

  });
});
}, $.when())
//return p
});
//chapter.split

//document ready



