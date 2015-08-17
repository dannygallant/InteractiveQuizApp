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
        desc: "The Fender Stratocaster is one of the world's most popular guitars. Eric Clapton transitioned from Gibson guitars to the Stratocaster in late 1969.",
        },
        {
        guitarChoices: ["Gibson SG", "Fender Telecaster", "Gibson Les Paul", "Gretsch White Falcon", "PRS Core"],
        artistChoices: ["Stevie Ray Vaughan", "Billy Gibbons", "Jeff Beck", "Howlin' Wolf", "Eric Johnson"],
        pic: "img/les_paul_border_smaller.gif",
    	questionNum: 1,
        guitarAnswer: 2,
        artistAnswer: 1,
        answer: "Gibson Les Paul",
        desc: "The Gibson Les Paul is one of the most recognizable guitars in the world and is a favorite of countless guitarists, including Billy Gibbons, Slash and Warren Haynes.",
        },
		{
        guitarChoices: ["Gibson ES-335", "Danelectro Shorthorn" ,"Fender Telecaster", "Fender Jaguar", "Gretsch White Falcon"],
        artistChoices: ["Jimmie Vaughan", "Jimi Hendrix", "Colin James", "Muddy Waters", "Johnny Winter"],
        pic: "img/tele_smaller.gif",
        questionNum: 2,
        guitarAnswer: 2,
        artistAnswer: 3,
        answer: "Fender Telecaster",
        desc: "The Fender Telecaster was the world's first commercially available solid body, single-cutaway guitar. Muddy Waters, along with countless other greats, was an early adopter of the Tele.",
        },
		{
        guitarChoices: ["Fender Mustang", "Gibson Hummingbird" ,"Ibanez ARZ", "PRS DGT", "Taylor 716e"],
        artistChoices: ["James Taylor", "Jim Croce", "Slash", "Pete Townsend", "David Grissom"],
        pic: "img/PRS_DGT_smaller.gif",
        questionNum: 3,
        guitarAnswer: 3,
        artistAnswer: 4,
        answer: "PRS DGT",
        desc: "The DGT is from PRS' artist series and is spec'd to David Grissom's personal preference. Many consider PRS guitars to be a meeting point between a Strat and a Les Paul.",
        },
		{
        guitarChoices: ["Fender Mustang", "Gibson Hummingbird" ,"Ibanez ARZ", "PRS Core", "Taylor 716e"],
        artistChoices: ["Jeff Beck", "Tab Benoit", "Eddie Van Halen", "John McLaughlin", "Jennifer Batten"],
        pic: "img/Gibson_Hummingbird_smaller.gif",
        questionNum: 4,
        guitarAnswer: 1,
        artistAnswer: 3,
        answer: "Gibson Hummingbird",
        desc: "Since it's introduction in 1960, the Gibson Hummingbird has been a go-to acoustic for many artist, including John McLaughlin. It can be heard on countless recordings spanning more than 50 years.",
        }]


 // document ready end bracket

  
var currentQuestion = 0;
var correctGitCounter = 0;
var correctArtCounter = 0;

$("#takeQuiz").on("click", "#startButton", function () {
    $("#introMessage").css("display","none");
    $("#takeQuiz").css("display","none");
    populateQuestionaire();
    $("#questionContainer").css("display", "inline");
    $("#submit_answer").css("display", "inline");
    $("#results").css("display", "inline")
});

$("#submit_answer").on("click", "#submitButton", function () {
	if (testRadios()) {
		updateCounterGuitar();
    	updateCounterArtist();	  
    	$("#submit_answer").css("display","none");
    	displayInfo();
    	updateResultsCounter();
    	// $("#next_question").css("display","inline");
    	console.log("Length of array: ", questions.length);
    	// $("#info").css("display","inline");
    }
});


// $("#next_question").on("click", "#nextButton", function () {
// 	if (gameStatus()) {
// 		$("#next_question").css("display","none");
// 		currentQuestion++;
// 		populateQuestionaire();
// 		$("#submit_answer").css("display","inline"); 
// 	} else {
// 		$("#next_question").css("display","none");
// 		$("#questionContainer").css("display", "none");
// 		gameOverMessage();
// 	}


	// if (currentQuestion < questions.length) {
	// 	$("#next_question").css("display","none");
	// 	$("#info").css("display","none");
	// } else {

	// 	gameOverMessage();
	// }



// need a test to end game once at end of array
		// ===  Trying this inside gameStatus
		// currentQuestion++;
		// populateQuestionaire();
		// $("#submit_answer").css("display","inline") 

		// gameStatus();	

// ******   next_question closing  *****
// });  


$(document).on('closed.fndtn.reveal', '[data-reveal]', function () {  
  var modal = $(this);
  if (modal.attr('id') == 'infoModal') {
	nextQuestion();
    // alert("Can you see this?");
  }
});






//  =====  Might be testing that both questions have answers  =====

function testRadios() {
	var answerGit = $("input:radio[name='option']:checked").val();	
	var answerArt = $("input:radio[name='option2']:checked").val();
	console.log("GIT: ", answerGit);
	console.log("ART: ", answerArt);

	if (answerGit == undefined || answerArt == undefined){
		// console.log("please make a selection for each question.");
		$("#helpModal").foundation('reveal', 'open');
	} else if (answerGit != undefined && answerArt != undefined) {
		return true;
	};

}


function populateQuestionaire() {
	var newQuestion = '<li></li><li><span class="question"><h4>Which guitar is this?</h4></span><br><div id="answerChoicesGit"><input type="radio" name="option" class="option" value="0"><span class="answer"> ' +questions[currentQuestion].guitarChoices[0]+ '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer"> ' +questions[currentQuestion].guitarChoices[1]+ '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer"> ' +questions[currentQuestion].guitarChoices[2]+ '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer"> ' +questions[currentQuestion].guitarChoices[3]+ '</span><br><input type="radio" name="option" class="option" value="4"><span class="answer"> ' +questions[currentQuestion].guitarChoices[4]+ '</span><br></div></li><li><center><img class="th" src=" ' +questions[currentQuestion].pic+ ' "></center></li><li><span class="question"><h4>Who plays this guitar?</h4></span><br><div id="answerChoicesArt"><input type="radio" name="option2" class="option2" value="0"><span class="answer"> ' +questions[currentQuestion].artistChoices[0]+ '</span><br><input type="radio" name="option2" class="option2" value="1"><span class="answer"> ' +questions[currentQuestion].artistChoices[1]+ '</span><br><input type="radio" name="option2" class="option2" value="2"><span class="answer"> ' +questions[currentQuestion].artistChoices[2]+ '</span><br><input type="radio" name="option2" class="option2" value="3"><span class="answer"> ' +questions[currentQuestion].artistChoices[3]+ '</span><br><input type="radio" name="option2" class="option2" value="4"><span class="answer"> ' +questions[currentQuestion].artistChoices[4]+ '</span><br></div></li><li></li>';
	$("#questionContainer").html(newQuestion);
}

// =====  TEMPORARILY disabled to see if I can bring up answers in a modal  =====
// function displayInfo() {
// 	var newInfo = '<p>' +questions[currentQuestion].desc+ '</p>';
// 	$("#info").html(newInfo);
// 	$("#info").css("display", "inline");
// }

// ====  Display answers in a modal  ====

function displayInfo() {
	var newInfo2 = '<h2 id="modalTitle">' +questions[currentQuestion].answer+ '</h2><p class="lead">' +questions[currentQuestion].desc+ '</p><a class="close-reveal-modal" aria-label="Close">&#215;</a>';
	$("#infoModal").html(newInfo2);
	$("#infoModal").foundation('reveal', 'open');
}


function gameStatus() {
	if (currentQuestion < (questions.length)-1) {
		return true;
	}
}

function nextQuestion() {
	if (gameStatus()) {
		// $("#next_question").css("display","none");
		currentQuestion++;
		populateQuestionaire();
		$("#submit_answer").css("display","inline"); 
	} else {
		// $("#next_question").css("display","none");
		$("#questionContainer").css("display", "none");
		gameOverMessage();
	}
}

// =======  THIS IS A FLIPPED VERSION OF THE ORIGINAL. STILL THROWS THE ERROR, BUT WORKS IF CLICKED A 2ND TIME  =======
	// if (currentQuestion >= questions.length) {
	// 	$("#questionContainer").css("display", "none");
	// 	$("#next_question").css("display","none");
	// 	gameOverMessage();
	// 	console.log("DONE!");
	// } else {
	// 	currentQuestion++;
	// 	console.log("Current Question: ", currentQuestion);
	// 	populateQuestionaire();
	// 	$("#submit_answer").css("display","inline"); 
	// 	$("#next_question").css("display","none");
	// }
		
	// }



// ========  THIS IS THE ORINAL CODE FOR THE gameStatus function. THE ELSE PART OF THE CLAUSE DOES NOT WORK    ==========
	// if (currentQuestion < questions.length) {
	// 	currentQuestion++;
	// 	console.log("Current Question: ", currentQuestion);
	// 	populateQuestionaire();
	// 	$("#submit_answer").css("display","inline"); 
	// 	$("#next_question").css("display","none");
	// } else {
	// 	$("#questionContainer").css("display", "none");
	// 	$("#next_question").css("display","none");
	// 	gameOverMessage();
	// 	console.log("DONE!");
	// }
// =========  DO NOT DELETE UNTIL WE FINISHED TESTING OTHER OPTIONS   =========


function updateCounterGuitar() {
	var answerGit = $("input:radio[name='option']:checked").val();
	console.log(answerGit)
	// if (answerGit == undefined){
	// 	// console.log("please make a selection for each question.");
	// 	$("#helpModal").foundation('reveal', 'open');
	// } else
	if (answerGit == questions[currentQuestion].guitarAnswer) {
		correctGitCounter++;
		console.log(correctGitCounter);		// ==== For testing  ====
	} else {console.log(correctGitCounter);}   // ==== For testing  ====

    }

function updateCounterArtist() {
	var answerArt = $("input:radio[name='option2']:checked").val();
	console.log(answerArt)
	// if (answerArt == undefined){
	// 	// console.log("please make a selection");
	// 	$("#helpModal").foundation('reveal', 'open');
	// } else
	if (answerArt == questions[currentQuestion].artistAnswer) {
		correctArtCounter++;
		console.log(correctArtCounter);		// ==== For testing  ====
	} else {console.log(correctArtCounter);}   // ==== For testing  ====

    }

// function populateInfo() {
// 	var newInfo = '<p>' +questions[currentQuestion].desc+ '</p>';
// 	$("#info").html(newInfo);

// }

function updateResultsCounter() {
	var score = '<center><p>' +"Correct Guitars: "+correctGitCounter+ '<br>' +"Correct Artist: " +correctArtCounter+ '</p></center>';
	$("#results").html(score);
}

function gameOverMessage() {
	var gameOver = '<div class="small-2 large-4 columns"><center><img class="th" src="img/strat_border_smaller.gif"></center></div><div class="small-4 large-4 columns"><center><H4>Thanks for playing!</H4></center></div><div class="small-6 large-4 columns"><center><img class="th" src="img/les_paul_border_smaller.gif"></center></div>';
	$("#introMessage").html(gameOver);
	$("#introMessage").css("display", "inline");
	// $("#game_over").css("display", "inline");
}

}); 




