$(document).ready(function(){
   
   //also, NEED to break up the chapters, but not sure how, they are fucking long!

   //this doesn't work "config is not defined"
var GiphyKey = config.GiphyKey;

var telemachus = "STATELY, PLUMP BUCK MULLIGAN CAME FROM THE STAIRHEAD, bearing a bowl of lather on which a mirror and a razor lay crossed. A yellow dressing gown, ungirdled, was sustained gently-behind him by the mild morning air. He held the bowl aloft and intoned: Introibo ad altare Dei. Halted, he peered down the dark winding stairs and called up coarsely" 
var nestor = "YOU, COCHRANE, WHAT CITY SENT FOR HIM? -- Tarentum, sir. -- Very good. Well? -- There was a battle, sir. -- Very good. Where? The boy's blank face asked the blank window. Fabled by the daughters of memory."
var proteus = "INELUCTABLE MODALITY OF THE VISIBLE: AT LEAST THAT IF NO MORE, thought through my eyes. Signatures of all things I am here to read, seaspawn and seawrack, the nearing tide, that rusty boot. Snotgreen, bluesilver, rust: coloured signs. Limits of the diaphane. But he adds: in bodies."
var calypso = "MR LEOPOLD BLOOM ATE WITH RELISH THE INNER ORGANS OF BEASTS and fowls. He liked thick giblet soup, nutty gizzards, a stuffed roast heart, liver slices fried with crustcrumbs, fried hencod's roes. Most of all he liked grilled mutton kidneys which gave to his palate a fine tang of faintly scented urine.";
var lotusEaters= "BY LORRIES ALONG SIR JOHN ROGERSON'S QUAY MR BLOOM WALKED soberly, past Windmill lane, Leask's the linseed crusher's, the postal telegraph office. Could have given that address too. And past the sailors' home. He turned from the morning noises of the quayside and walked through Lime street. By Brady's cottages a boy for the skins lolled, his bucket of offal linked, smoking a chewed fagbutt. A smaller girl with scars of eczema on her forehead eyed him, listlessly holding her battered caskhoop. Tell him if he smokes he won't grow. O let him! His life isn't such a bed of roses! Waiting outside pubs to bring da home. Come home to ma, da. Slack hour: won't be many there.";
var hades = "MARTIN CUNNINGHAM, FIRST, POKED HIS SILKHATTED HEAD INTO the creaking carriage and, entering deftly, seated himself. Mr Power stepped in after him, curving his height with care. Come on, Simon. After you, Mr Bloom said. Mr Dedalus covered himself quickly and got in, saying: -- Yes, yes. -- Are we all here now? Martin Cunningham asked. Come along, Bloom. Mr Bloom entered and sat in the vacant place.";
var aeolus = "In the Heart of the Hibernian Metropolis BEFORE NELSON'S PILLAR TRAILS SLOWED, SHUNTED, CHANGED TROLLEY, started for Blackrock, Kingstown and Dalkey, Clonskea, Rathgar and Terenure, Palmerston park and upper Rathmines, Sandymount Green, Rathmines, Ringsend and Sandymount Tower, Harold's Cross. The hoarse Dublin United Tramway Company's timekeeper bawled them off:";
var lestrygonians = "PINEAPPLE ROCK, LEMON PLATT, BUTTER SCOTCH. A SUGARSTICKY GIRL shovelling scoopfuls of creams for a christian brother. Some school treat. Bad for their tummies. Lozenge and comfit manufacturer to His Majesty the King. God. Save. Our. Sitting on his throne, sucking red jujubes white. A sombre Y.M.C.A. young man, watchful among the warm sweet fumes of Graham Lemon's, placed a throwaway in a hand of Mr Bloom. Heart to heart talks. Bloo... Me? No. Blood of the Lamb.";
var scylla = "URBANE, TO COMFORT THEM, THE QUAKER LIBRARIAN PURRED: -- And we have, have we not, those priceless pages of Wilhelm Meister? A great poet on a great brother poet. A hesitating soul taking arms against a sea of troubles, torn by conflicting doubts, as one sees in real life. He came a step a sinkapace forward on neatsleather creaking and a step backward a sinkapace on the solemn floor. A noiseless attendant, setting open the door but slightly, made him a noiseless beck.";
var wanderingRocks = "THE SUPERIOR, THE VERY REVEREND JOHN CONMEE S. J, RESET HIS smooth watch in his interior pocket as he came down the presbytery steps. Five to three. Just nice time to walk to Artane. What was that boy's name again? Dignam, yes. Vere dignum et justum est. Brother Swan was the person to see. Mr Cunningham's letter. Yes. Oblige him, if possible. Good practical catholic: useful at mission time.";
var sirens= "BRONZE BY GOLD HEARD THE HOOFIRONS, STEELYRINING IMPERthnthn thnthnthn. Chips, picking chips off rocky thumbnail, chips. Horrid! And gold flushed more. A husky fifenote blew. Blew. Blue bloom is on the Gold pinnacled hair. A jumping rose on satiny breasts of satin, rose of Castille. Trilling, trilling: I dolores. Peep! Who's in the... peepofgold? Tink cried to bronze in pity. And a call, pure, long and throbbing. Longindying call. Decoy. Soft word. But look! The bright stars fade. O rose! Notes chirruping answer. Castille. The morn is breaking. Jingle jingle jaunted jingling. Coin rang. Clock clacked.";
var cyclops = "I WAS JUST PASSING THE TIME OF DAY WITH OLD TROY O THE D.M.P. at the corner of Arbour hill there and be damned but a bloody sweep came along and he near drove his gear into my eye. I turned around to let him have the weight of my tongue when who should I see dodging along Stony Batter only Joe Hynes. -- Lo, Joe, says I. How are you blowing? Did you see that bloody chimneysweep near shove my eye out with his brush?";
var nausicaa = "THE SUMMER EVENING HAD BEGUN TO FOLD THE WORLD IN ITS mysterious embrace. Far away in the west the sun was setting and the last glow of all too fleeting day lingered lovingly on sea and strand, on the proud promontory of dear old Howth guarding as ever the waters of the bay, on the weedgrown rocks along Sandymount shore and, last but not least, on the quiet church whence there streamed forth at times upon the stillness the voice of prayer to her who is in her pure radiance a beacon ever to the storm-tossed heart of man, Mary, star of the sea.";
var oxen = "DESHIL HOLLES EAMUS. DESHIL HOLLES EAMUS. DESHIL HOLES Eamus. Send us, bright one, light one, Horhorn, quickening and wombfruit. Send us, bright one, light one, Horhorn, quickening and wombfruit. Send us bright one, light one, Horhorn, quickening and wombfruit. Hoopsa, boyaboy, hoopsa! Hoopsa, hoyaboy, hoopsa! Hoopsa, boyaboy, hoopsa.";
var circe = "The Mabbot street entrance of nighttown, before which stretches an uncobbled transiding set with skeleton tracks, red and green will-o'-the-wisps and danger signals. Rows of flimsy houses with gaping doors. Rare lamps with faint rainbow fans. Round Rabaiotti's halted ice gondola stunted men and women squabble. They grab wafers between which are wedged lumps of coal and copper snow. Sucking, they scatter slowly. Children. The swancomb of the gondola, highreared, forges on through the murk, white and blue under a lighthouse. Whistles call and answer. THE CALLS Wait, my love, and I'll be with you. THE ANSWERS Round behind the stable.";
var eumaeus = "PREPARATORY TO ANYTHING ELSE MR BLOOM BRUSHED OFF THE GREATER bulk of the shavings and handed Stephen the hat and ashplant and bucked him up generally in orthodox Samaritan fashion, which he very badly needed. His (Stephen's) mind was not exactly what you would call wandering but a bit unsteady and on his expressed desire for some beverage to drink Mr Bloom, in view of the hour it was and there being no pumps of Vartry water available for their ablutions, let alone drinking purposes, hit upon an expedient by suggesting, off the reel, the propriety of the cabman's shelter, as it was called, hardly a stonesthrow away near Butt Bridge, where they might hit upon some drinkables in the shape of a milk and soda or a mineral. But how to get there was the rub. For the nonce he was rather nonplussed but inasmuch as the duty plainly devolved upon him to take some measures on the subject he pondered suitable ways and means during which Stephen repeatedly yawned.";
var ithaca = "WHAT PARALLEL COURSES DID BLOOM AND STEPHEN FOLLOW RETURNING? Starting united both at normal walking pace from Beresford place they followed in the order named Lower and Middle Gardiner streets and Mountjoy square, west: then, at reduced pace, each bearing left, Gardiner's place by an inadvertance as far as the farther corner of Temple street, north: then at reduced pace with interruptions of halt, bearing right, Temple street, north, as far as Hardwicke place. Approaching, disparate, at relaxed walking pace they crossed both the circus before George's church diametrically, the chord in any circle being less than the arc which it subtends.";
var penelope = "YES BECAUSE HE NEVER DID A THING LIKE THAT BEFORE AS ASK TO get his breakfast in bed with a couple of eggs since the City arms hotel when he used to be pretending to be laid up with a sick voice doing his highness to make himself interesting to that old faggot Mrs Riordan that he thought he had a great leg of and she never left us a farthing all for masses for herself and her soul greatest miser ever was actually afraid to lay out 4d for her methylated spirit telling me all her ailments she had too much old chat in her about politics and earthquakes and the end of the world let us have a bit of fun first God help the world if all the women were her sort down on bathing-suits and lownecks of course nobody wanted her to wear I suppose she was pious because no man would look at her twice";


let words; 
let picDiv;

//i THINK this should be here for chapter 1 to just load up, but not sure....
//wordMaker(telemachus);

//preventDefault isn't fixing the no clicking between chapters... 

$("#Telemachus").click(function(){
    event.preventDefault();
    $("#gifs-here").empty();
    wordMaker(telemachus);
})

$("#Nestor").click(function() {
    event.preventDefault();
    $("#gifs-here").empty();
    wordMaker(nestor);
});

$("#Proteus").click(function(){
    event.preventDefault();
    $("#gifs-here").empty();
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
                        let placeholder = $("<img id='whatgif' src='what.gif'>");
                        picDiv.prepend(placeholder);
                        }
                    //var gifDiv = $('<div/>');    
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




