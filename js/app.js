$(document).ready(function() {
    //quiz questions
    var questions = [{
        guitarChoices: ["Fender Stratocaster", "Gibson Les Paul", "Gibson ES-335", "Fender Jazzmaster", "Epiphone Casino"],
        artistChoices: ["Jimmy Page", "Keith Richards", "James Hetfield", "Eric Clapton", "Brian Setzer"],
        pic: "img/strat_border_smaller.gif",
    	questionNum: 0,
        guitarAnswer: 0,
        artistAnswer: 3,
        answer: "Fender Stratocaster",
        desc: "The Fender Stratocaster is one of the world's most popular guitars. Eric Clapton transitioned from Gibson guitars to the Stratocaster in late 1969."
        },
        {
        guitarChoices: ["Gibson SG", "Fender Telecaster", "Gibson Les Paul", "Gretsch White Falcon", "PRS Core"],
        artistChoices: ["Stevie Ray Vaughan", "Billy Gibbons", "Jeff Beck", "Howlin' Wolf", "Eric Johnson"],
        pic: "img/les_paul_border_smaller.gif",
    	questionNum: 1,
        guitarAnswer: 2,
        artistAnswer: 1,
        answer: "Gibson Les Paul",
        desc: "The Gibson Les Paul is one of the most recognizable guitars in the world and is a favorite of countless guitarists in all genres, including Billy Gibbons, Slash and Warren Haynes."
        },
		{
        guitarChoices: ["Gibson ES-335", "Danelectro Shorthorn" ,"Fender Telecaster", "Fender Jaguar", "Gretsch White Falcon"],
        artistChoices: ["Jimmie Vaughan", "Jimi Hendrix", "Colin James", "Muddy Waters", "Johnny Winter"],
        pic: "img/tele_smaller.gif",
        questionNum: 2,
        guitarAnswer: 2,
        artistAnswer: 3,
        answer: "Fender Telecaster",
        desc: "The Fender Telecaster was the world's first commercially available solid body, single-cutaway guitar. Muddy Waters, along with countless other greats, was an early adopter of the Tele."
        },
		{
        guitarChoices: ["Fender Mustang", "Gibson Hummingbird" ,"Ibanez ARZ", "PRS DGT", "Taylor 716e"],
        artistChoices: ["James Taylor", "Jim Croce", "Slash", "Pete Townsend", "David Grissom"],
        pic: "img/PRS_DGT_smaller.gif",
        questionNum: 3,
        guitarAnswer: 3,
        artistAnswer: 4,
        answer: "PRS DGT",
        desc: "The DGT is from PRS' artist series and is spec'd to David Grissom's personal preferences. Many consider PRS guitars to be a meeting point between a Strat and a Les Paul."
        },
		{
        guitarChoices: ["Fender Mustang", "Gibson Hummingbird" ,"Ibanez ARZ", "PRS Core", "Taylor 716e"],
        artistChoices: ["Jeff Beck", "Tab Benoit", "Eddie Van Halen", "John McLaughlin", "Jennifer Batten"],
        pic: "img/Gibson_Hummingbird_smaller.gif",
        questionNum: 4,
        guitarAnswer: 1,
        artistAnswer: 3,
        answer: "Gibson Hummingbird",
        desc: "Since it's introduction in 1960, the Gibson Hummingbird has been a go-to acoustic for many artists, including John McLaughlin. It can be heard on countless recordings spanning more than 50 years."
        }]


$(document).on('closed.fndtn.reveal', '[data-reveal]', function () {  
  var modal = $(this);
  if (modal.attr('id') == 'infoModal') {
	nextQuestion();
  }
}); 


var currentQuestion = 0;
var correctGitCounter = 0;
var correctArtCounter = 0;

$("#takeQuiz").on("click", "#startButton", function () {
    $("#introMessage").css("display","none");
    $("#takeQuiz").css("display","none");
    populateQuestionaire();
    $("#questionContainer").css("display", "inline");
    $("#results").css("display", "inline");
    $("#submit_answer").css("display", "inline")
});

$("#submit_answer").on("click", "#submitButton", function () {
	if (testRadios()) {
		updateCounterGuitar();
    	updateCounterArtist();	  
    	$("#submit_answer").css("display","none");
    	displayInfo();
    	updateResultsCounter();
    }
});
 

$("#restartGame").click(function() {
    location.reload();
});

$("#restartGame2").click(function() {
    location.reload();
});


//  =====  Test that both questions have selected radio buttons  =====
function testRadios() {
	var answerGit = $("input:radio[name='option']:checked").val();	
	var answerArt = $("input:radio[name='option2']:checked").val();
	// console.log("GIT: ", answerGit);
	// console.log("ART: ", answerArt);
	if (answerGit == undefined || answerArt == undefined){
		$("#missingAnswerModal").foundation('reveal', 'open');
	} else if (answerGit != undefined && answerArt != undefined) {
		return true;
	}
}

// ====  Populate the radios & image for the next question  ====
function populateQuestionaire() {
	var newQuestion = '<li></li><li><span class="question"><h4>Which guitar is this?</h4></span><br><div id="answerChoicesGit"><input type="radio" name="option" class="option" value="0"><span class="answer"> ' +questions[currentQuestion].guitarChoices[0]+ '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer"> ' +questions[currentQuestion].guitarChoices[1]+ '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer"> ' +questions[currentQuestion].guitarChoices[2]+ '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer"> ' +questions[currentQuestion].guitarChoices[3]+ '</span><br><input type="radio" name="option" class="option" value="4"><span class="answer"> ' +questions[currentQuestion].guitarChoices[4]+ '</span><br></div></li><li><center><img class="th" src=" ' +questions[currentQuestion].pic+ ' "></center></li><li><span class="question"><h4>Who plays this guitar?</h4></span><br><div id="answerChoicesArt"><input type="radio" name="option2" class="option2" value="0"><span class="answer"> ' +questions[currentQuestion].artistChoices[0]+ '</span><br><input type="radio" name="option2" class="option2" value="1"><span class="answer"> ' +questions[currentQuestion].artistChoices[1]+ '</span><br><input type="radio" name="option2" class="option2" value="2"><span class="answer"> ' +questions[currentQuestion].artistChoices[2]+ '</span><br><input type="radio" name="option2" class="option2" value="3"><span class="answer"> ' +questions[currentQuestion].artistChoices[3]+ '</span><br><input type="radio" name="option2" class="option2" value="4"><span class="answer"> ' +questions[currentQuestion].artistChoices[4]+ '</span><br><br></div></li><li></li>';
	$("#questionContainer").html(newQuestion);
}


// ====  Display answers in a modal  ====
function displayInfo() {
	var newInfo2 = '<h2 id="modalTitle">' +questions[currentQuestion].answer+ '</h2><p class="lead">' +questions[currentQuestion].desc+ '</p><a class="close-reveal-modal" aria-label="Close">&#215;</a>';
	$("#infoModal").html(newInfo2);
	$("#infoModal").foundation('reveal', 'open');
}

// ====  Test current question against array. Test true until it reaches the last element in the array.  ====
function gameStatus() {
	if (currentQuestion < (questions.length)-1) {
		return true;
	}
}

// ====  If gameStatus returns true, increment the current question and call populateQuestionaire.  ====
function nextQuestion() {
	if (gameStatus()) {
		currentQuestion++;
		populateQuestionaire();
		$("#artistResults p").css("color", "#567");
		$("#artistResults p").css("font-weight", "bold");
		$("#guitarResults p").css("color", "#567");
		$("#guitarResults p").css("font-weight", "bold");
		$("#submit_answer").css("display","inline"); 
	} else {
		// $("#next_question").css("display","none");
		$("#questionContainer").css("display", "none");
		gameOverMessage();
	}
}

// ====  Increment score counters on correct answers   ====
function updateCounterGuitar() {
	var answerGit = $("input:radio[name='option']:checked").val();
	console.log(answerGit)
	if (answerGit == questions[currentQuestion].guitarAnswer) {
		correctGitCounter++;
	}  
}

function updateCounterArtist() {
	var answerArt = $("input:radio[name='option2']:checked").val();
	console.log(answerArt)
	if (answerArt == questions[currentQuestion].artistAnswer) {
		correctArtCounter++;
	}
}   

// ====  Update scores in app  ====
function updateResultsCounter() {
	var artistScore = '<p>' +"Correct Artist: " +correctArtCounter+ '</p>';
	$("#artistResults").html(artistScore);
	var guitarScore = '<p>' +"Correct Guitars: "+correctGitCounter+ '</p>';
	$("#guitarResults").html(guitarScore);
}

function gameOverMessage() {
	var gameOver = '<div class="small-2 large-4 columns"><center><img class="th" src="img/strat_border_smaller.gif"></center></div><div class="small-4 large-4 columns"><center><H3>Thanks for playing!</H3><br><h4>Your score was:</h4><br><p>' +"Guitars: "+correctGitCounter+ '<br>' +"Artist: " +correctArtCounter+ '</p></center></div><div class="small-6 large-4 columns"><center><img class="th" src="img/les_paul_border_smaller.gif"></center></div>';
	$("#introMessage").html(gameOver);
	$("#introMessage").css("display", "inline");
	$("#introMessage p").css("color", "#567");
	$("#introMessage p").css("font-weight", "bold");
	$("#game_over").css("display", "inline");
	$("#results").css("display", "none");
	$("#copyright").css("font-size", "7");
	$("#copyright").css("display","inline")
}

});

