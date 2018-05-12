$(document).ready(function(){

var chapter = "STATELY, PLUMP BUCK MULLIGAN CAME FROM THE STAIRHEAD, bearing a bowl of lather on which a mirror and a razor lay crossed. A yellow dressing gown, ungirdled, was sustained gently-behind him by the mild morning air. He held the bowl aloft and intoned: Introibo ad altare Dei. Halted, he peered down the" 

let words = chapter.split(" ");
let picDiv;

for (i=0; i<words.length; i++){
	
    let word = words[i];
    let picDiv = $('<div/>');
    picDiv.attr('id', word);
    picDiv.append('<h1>' + word + '</h1>');
    picDiv.appendTo($('#gifs-here'));

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=G3lLz1LwwD6VRySY0kEddhrhDoHrzGeX";
    $.ajax({
        url: queryURL,
        method: 'GET'
        })
        .done(function(response) {

                var results = response.data;

                    //var gifDiv = $('<div/>');

                    var gif = $('<img/>');

                    gif.addClass('myImg');

            
                    gif.attr('src', results[0].images.fixed_height.url);

                    gif.attr('data-still', results[0].images.fixed_height_still.url)

                    gif.attr('data-animate', results[0].images.fixed_height.url)

                    gif.attr('data-state', 'still');

                    picDiv.append(gif);


                    //gifDiv.appendTo($('#gifs-here'));

  });
    }
});




