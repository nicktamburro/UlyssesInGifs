$(document).ready(function(){

var chapter = "STATELY, PLUMP BUCK MULLIGAN CAME FROM THE STAIRHEAD, bearing a bowl of lather on which a mirror and a razor lay crossed. A yellow dressing gown, ungirdled, was sustained gently-behind him by the mild morning air. He held the bowl aloft and intoned: Introibo ad altare Dei. Halted, he peered down the" 

//let words = chapter.split(" ");
//console.log(words);

//1. we split the chapter into an array of single words, called "words"

//it's giving us just the first word... a lot of times. it's a start. 


//2. we loop through the words array, one word at a time, ideally...

//for (i=0; i<words.length; i++){
	//so NO, buttonWord should be a value in the array...
	//var word = $(this).data('name');

    //okay this is interesting... we got a real freakout here, but it's working, something's working

//3."word" is whatever word we're on in the loop...
    //let word = words[i];

$.when(...chapter.split(" ").map(word => {
//4. we make our API call, putting the current word in:
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=G3lLz1LwwD6VRySY0kEddhrhDoHrzGeX";
    $.ajax({
        url: queryURL,
        method: 'GET'
        });
        })).then((...responses) => {
    responses.forEach(response => {
                var results = response.data;

                //I think this loop isn't right, this is making a million of the same word
                //so everything should be inside the other loop, but different. Okay. 
                //for (var i = 0; i < 2; i++) {


            //5, or 5.1 we create the div, the image tag, all the stuff to show it on the page...
                    var gifDiv = $('<div/>');

                    var gif = $('<img/>');

                    gif.addClass('myImg');

                    //also getting an error with "can't read images of undefined"
                    gif.attr('src', results[0].images.fixed_height.url);

                    gif.attr('data-still', results[0].images.fixed_height_still.url)

                    gif.attr('data-animate', results[0].images.fixed_height.url)

                    gif.attr('data-state', 'still');

                    gifDiv.append(gif);


//it's not recognizing the i from the loop... okay, I can hone in on this. 
                    gifDiv.append('<h1>' + word + '</h1>');

                    gifDiv.appendTo($('#gifs-here'));


//}
  })
});

//end of 1st loop
});
