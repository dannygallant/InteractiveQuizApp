$(document).ready(function() {
    //quiz questions
    var questions = [{
        guitarChoices: ["Fender Stratocaster", "Gibson Les Paul", "Gibson ES-335", "Fender Jazzmaster", "Epiphone Casino"],
        artistChoices: ["Jimmy Page", "Keith Richards", "James Hetfield", "Eric Clapton", "Brian Setzer"],
        pic: "img/strat_border_smaller.gif",
    	questionNum: 0,
        guitarAnswer: 0,
        artistAnswer: 3,
        info: "The Fender Stratocaster is one of the world's most popular guitars. Eric Clapton transitioned from Gibson guitars to the Stratocaster in late 1969.",
        },
        {
        guitarChoices: ["Gibson SG", "Fender Telecaster", "Gibson Les Paul", "Gretsch White Falcon", "PRS Core"],
        artistChoices: ["Stevie Ray Vaughan", "Billy Gibbons", "Jeff Beck", "Howlin' Wolf", "Paul Stanley"],
        pic: "img/les_paul_border_smaller.gif",
    	questionNum: 1,
        guitarAnswer: 2,
        artistAnswer: 1,
        info: "The Gibson Les Paul is one of the most recognizable guitar in the world and is a favorite of countless guitarists, including Billy Gibbons, Slash and Warren Haynes.",
        },
		{
        guitarChoices: ["Gibson ES-335", "Danelectro Shorthorn" ,"Fender Telecaster", "Fender Jaguar", "Gretsch White Falcon"],
        artistChoices: ["Jimmie Vaughan", "Jimi Hendrix", "Colin James", "Muddy Waters", "Johnny Winter"],
        pic: "img/tele_smaller.gif",
        questionNum: 2,
        guitarAnswer: 2,
        artistAnswer: 3,
        info: "The Fender Telecaster was the world's first commercially available solid body, single-cutaway guitar. Muddy Waters, along with countless other greats, was an early adopter of the Tele.",
        },
		{
        guitarChoices: ["Fender Mustang", "Gibson Hummingbird" ,"Ibanez ARZ", "PRS DGT", "Taylor 716e"],
        artistChoices: ["James Taylor", "Jim Croce", "Slash", "Pete Townsend", "David Grissom"],
        pic: "img/PRS_DGT_smaller.gif",
        questionNum: 3,
        guitarAnswer: 3,
        artistAnswer: 4,
        info: "The DGT is from PRS' artist series and is spec'd by David Grissom's personal preference. Many consider PRS guitars to be a meeting point between a Strat and a Les Paul.",
        },
		{
        guitarChoices: ["Fender Mustang", "Gibson Hummingbird" ,"Ibanez ARZ", "PRS Core", "Taylor 716e"],
        artistChoices: ["Jeff Beck", "Tab Benoit", "Eddie Van Halen", "John McLaughlin", "Jennifer Batten"],
        pic: "img/Gibson_Hummingbird_smaller.gif",
        questionNum: 4,
        guitarAnswer: 1,
        artistAnswer: 3,
        info: "Since it's introduction in 1960, the Gibson Hummingbird become a go-to acoustic for many artist, including John McLaughlin. It can be heard on countless recording spanning more than 50 years.",
        }]


 // document ready end bracket

  

var currentQuestion = 0;
var correctGitCounter = 0;
var correctArtCounter = 0;

$("#takeQuiz").on("click", "#startButton", function () {
    $("#introMessage").css("display","none");
    $("#takeQuiz").css("display","none");
    populateQuestionaire(currentQuestion);
    $("#questionContainer").css("display", "inline");
    $("#submit_answer").css("display", "inline")
    $("#results").css("display", "inline")
});

$("#submit_answer").on("click", "#submitButton", function () {
    updateCounterGuitar();
    updateCounterArtist();
    displayInfo();
    $("#submit_answer").css("display","none");
    $("#next_question").css("display","inline");
    $("#info").css("display","inline");

    // nextQuestion();
});


$("#next_question").on("click", "#nextButton", function () {
	$("#next_question").css("display","none");
	$("#info").css("display","none");
	currentQuestion++;
	populateQuestionaire(currentQuestion);
// advance to the next question values in the array
	updateResultsCounter();
	$("#submit_answer").css("display","inline");
});

function populateQuestionaire() {
	var newQuestion = '<li></li><li><span class="question"><h4>Which guitar is this?</h4></span><br><div id="answerChoicesGit"><input type="radio" name="option" class="option" value="0"><span class="answer"> ' +questions[currentQuestion].guitarChoices[0]+ '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer"> ' +questions[currentQuestion].guitarChoices[1]+ '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer"> ' +questions[currentQuestion].guitarChoices[2]+ '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer"> ' +questions[currentQuestion].guitarChoices[3]+ '</span><br><input type="radio" name="option" class="option" value="4"><span class="answer"> ' +questions[currentQuestion].guitarChoices[4]+ '</span><br></div></li><li><center><img class="th" src=" ' +questions[currentQuestion].pic+ ' "></center></li><li><span class="question"><h4>Who plays this guitar?</h4></span><br><div id="answerChoicesArt"><input type="radio" name="option2" class="option2" value="0"><span class="answer"> ' +questions[currentQuestion].artistChoices[0]+ '</span><br><input type="radio" name="option2" class="option2" value="1"><span class="answer"> ' +questions[currentQuestion].artistChoices[1]+ '</span><br><input type="radio" name="option2" class="option2" value="2"><span class="answer"> ' +questions[currentQuestion].artistChoices[2]+ '</span><br><input type="radio" name="option2" class="option2" value="3"><span class="answer"> ' +questions[currentQuestion].artistChoices[3]+ '</span><br><input type="radio" name="option2" class="option2" value="4"><span class="answer"> ' +questions[currentQuestion].artistChoices[4]+ '</span><br></div></li><li></li>';
	$("#questionContainer").html(newQuestion);
}

function displayInfo() {
	var newInfo = '<p>' +questions[currentQuestion].info+ '</p>';
	$("#info").html(newInfo);
	$("#info").css("display", "inline");
}

function updateCounterGuitar() {
	var answerGit = $("input:radio[name='option']:checked").val();
	console.log(answerGit)
	if (answerGit == undefined){
		console.log("please make a selection")
	} else
	if (answerGit == questions[currentQuestion].guitarAnswer) {
		correctGitCounter++;
		console.log(correctGitCounter);		// ==== For testing  ====
	} else {console.log(correctGitCounter);}   // ==== For testing  ====

    }


function updateCounterArtist() {
	var answerArt = $("input:radio[name='option2']:checked").val();
	console.log(answerArt)
	if (answerArt == undefined){
		console.log("please make a selection")
	} else
	if (answerArt == questions[currentQuestion].artistAnswer) {
		correctArtCounter++;
		console.log(correctArtCounter);		// ==== For testing  ====
	} else {console.log(correctArtCounter);}   // ==== For testing  ====

    }

// function populateInfo() {
// 	var newInfo = '<p>' +questions[currentQuestion].info+ '</p>';
// 	$("#info").html(newInfo);

// }

function updateResultsCounter() {
	var score = '<center><p>' +"Correct Guitars:"+correctGitCounter+ '</p></center><center><p> ' +"Correct Artist:" +correctArtCounter+ '</p></center>';
	$("#results").html(score);
}

// =====  used for testing. Don't need to loop through and use if statement with radios  =====
// function updateCounterGuitar() {
// 	$('input[type=radio]').each(function () {
//         if (this.checked) {
//             console.log($(this).val()); 
//         }
// });
// }
 

//  ======== Probably will use radio buttons for the artist questions as well  ========

// function updateCounterArtist() {
// 	$('input[type=checkbox]').each(function () {
//         if (this.checked) {
//             console.log($(this).val()); 
//         }
// 	})
// };



	






// function updateCounter() {
// 	var answer = $("input[type='checkbox']:checked").val();
//         if (answer == questions[currentQuestion].guitarAnswer) {
//             correctAnswers++;    
//         }
// }

// function updateCounterArt() {

// 	var answer = $("input[type='checkbox']:checked").val();
//         if (answer == questions[currentQuestion].artistAnswer) {
//             correctAnswers++;    
//         }
// }


});



