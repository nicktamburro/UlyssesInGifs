$(document).ready(function(){
   
   //also, NEED to break up the chapters, but not sure how, they are fucking long!

   //this doesn't work "config is not defined"
var GiphyKey = config.GiphyKey;

var telemachus = "STATELY, PLUMP BUCK MULLIGAN CAME FROM THE STAIRHEAD, bearing a bowl of lather on which a mirror and a razor lay crossed. A yellow dressing gown, ungirdled, was sustained gently-behind him by the mild morning air. He held the bowl aloft and intoned: Introibo ad altare Dei. Halted, he peered down the dark winding stairs and called up coarsely" 
var nestor = "YOU, COCHRANE, WHAT CITY SENT FOR HIM? -- Tarentum, sir. -- Very good. Well? -- There was a battle, sir. -- Very good. Where? The boy's blank face asked the blank window. Fabled by the daughters of memory."
var proteus = "INELUCTABLE MODALITY OF THE VISIBLE: AT LEAST THAT IF NO MORE, thought through my eyes. Signatures of all things I am here to read, seaspawn and seawrack, the nearing tide, that rusty boot. Snotgreen, bluesilver, rust: coloured signs. Limits of the diaphane. But he adds: in bodies."

let words; 
let picDiv;

//i THINK this should be here for chapter 1 to just load up, but not sure....
//wordMaker(telemachus);

$("#Telemachus").click(function(){
    event.preventDefault();
    wordMaker(telemachus);
})

$("#Nestor").click(function() {
    event.preventDefault();
    wordMaker(nestor);
});

$("#Proteus").click(function(){
    event.preventDefault();
    wordMaker(proteus);
})

function wordMaker(chapter){
    let words = chapter.split(" ");
    gifMaker(words);
}

const gifMaker = (words) => {
for (i=0; i<words.length; i++){
	
    let word = words[i];
    let picDiv = $('<div/>');
    picDiv.attr('id', word);
    picDiv.addClass('col-sm-3');
    picDiv.append('<h1>' + word + '</h1>');
    picDiv.appendTo($('#gifs-here'));

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=" + GiphyKey;
    $.ajax({
        url: queryURL,
        method: 'GET'
        })
        .done(function(response) {

                var results = response.data;
                console.log(word, results);

                var gif = $('<img/>');
                gif.addClass('myImg');

                    if(results[0] == undefined){
                        let placeholder = $("<img src='what.gif'>");
                        picDiv.prepend(placeholder);
                        }
                    //var gifDiv = $('<div/>');    
                    //TODO results[0] is undefined
                    //fix this tomorrow, there's no loop, I'm just doing it weird...
                    gif.attr('src', results[0].images.fixed_height.url);
                    gif.attr('data-still', results[0].images.fixed_height_still.url)
                    gif.attr('data-animate', results[0].images.fixed_height.url)
                    gif.attr('data-state', 'still');
                    picDiv.prepend(gif);
                    //gifDiv.appendTo($('#gifs-here'));
            });
        }
    };
});




