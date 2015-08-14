$(document).ready(function() {
    //quiz questions
    var questions = [{
        guitarChoices: ["Fender Stratocaster", "Gibson Les Paul", "Gibson ES-335", "Fender Jazzmaster", "Epiphone Casino"],
        artistChoices: ["Jimmy Page", "Keith Richards", "James Hetfield", "Eric Clapton", "Brian Setzer"],
        pic: "img/strat_border_smaller.gif",
    	questionNum: 0,
        guitarAnswer: 0,
        aristAnswer: 3,
        info: "The Fender Stratocaster is one of the world's most popular guitars. It's used in many musical genres. Eric Clapton transitioned from Gibson guitars to the Stratocaster in late 1969.",
        },
        {
        guitarChoices: ["Gibson SG", "Fender Telecaster", "Gibson Les Paul", "Gretsch White Falcon", "PRS Core"],
        artistChoices: ["Stevie Ray Vaughan", "Billy Gibbons", "Jeff Beck", "Howlin' Wolf", "Paul Stanley"],
        pic: "img/les_paul_border_smaller.gif",
    	questionNum: 1,
        guitarAnswer: 2,
        aristAnswer: 1,
        info: "The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was designed by guitarist/inventor Les Paul with the assistance of Ted McCarty and his team. It's one of the most recognizable guitar in the world and is a favorite of countless guitarists, including Billy Gibbons, Slash and Warren Haynes.",
        },
		{
        guitarChoices: ["Gibson ES-335", "Danelectro Shorthorn" ,"Fender Telecaster", "Fender Jaguar", "Gretsch White Falcon"],
        artistChoices: ["Jimmie Vaughan", "Jimi Hendrix", "Colin James", "Muddy Waters", "Johnny Winter"],
        pic: "img/les_paul_border_smaller.gif",
        questionNum: 2,
        guitarAnswer: 2,
        aristAnswer: 1,
        info: "The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was designed by guitarist/inventor Les Paul with the assistance of Ted McCarty and his team. It's one of the most recognizable guitar in the world and is a favorite of countless guitarists, including Billy Gibbons, Slash and Warren Haynes.",
        },
		{
        guitarChoices: ["Fender Mustang", "Gibson Hummingbird" ,"Ibanez ARZ", "PRS Core", "Taylor 716e"],
        artistChoices: ["James Taylor", "Jim Croce", "Slash", ""],
        pic: "img/les_paul_border_smaller.gif",
        questionNum: 3,
        guitarAnswer: 2,
        aristAnswer: 1,
        info: "The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was designed by guitarist/inventor Les Paul with the assistance of Ted McCarty and his team. It's one of the most recognizable guitar in the world and is a favorite of countless guitarists, including Billy Gibbons, Slash and Warren Haynes.",
        },
		{
        guitarChoices: ["Fender Mustang", "Gibson Hummingbird" ,"Ibanez ARZ", "PRS Core", "Taylor 716e"],
        artistChoices: ["Jeff Beck", "Tab Benoit", "Eddie Van Halen", "Steve Stevens", "Jennifer Batten"],
        pic: "img/les_paul_border_smaller.gif",
        questionNum: 4,
        guitarAnswer: 2,
        aristAnswer: 1,
        info: "The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was designed by guitarist/inventor Les Paul with the assistance of Ted McCarty and his team. It's one of the most recognizable guitar in the world and is a favorite of countless guitarists, including Billy Gibbons, Slash and Warren Haynes.",
        }]


 // document ready end bracket

  

var currentQuestion = 0;
var correctAnswers = 0;

$("#takeQuiz").on("click", "#startButton", function () {
    $("#introMessage").css("display","none");
    $("#takeQuiz").css("display","none");
    $("#questionContainer").css("display", "inline");
    $("#submit_answer").css("display", "inline")
});

$("#submit_answer").on("click", "#submitButton", function () {
    updateCounterGuitar();
    updateCounterArtist();
    currentQuestion++;
    // nextQuestion();
});


function updateCounterGuitar() {
	$('input[type=radio]').each(function () {
        if (this.checked) {
            console.log($(this).val()); 
        }
});
}
 
function updateCounterArtist() {
	$('input[type=checkbox]').each(function () {
        if (this.checked) {
            console.log($(this).val()); 
        }
})



	// var answerGit = $("#answerChoicesGit input[type='checkbox']:checked").val();
	// console.log(answerGit);

};



	






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



