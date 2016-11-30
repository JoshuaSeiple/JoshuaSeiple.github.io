function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;

		if (question1 == "10mm pistol") {
			correct++;
		}
		if (question2 == "Security baton") {
			correct++;
		}
		if(question3 == "Radroach"){
			correct++;
		}
		var pictures = ["img/blewIt.gif", "img/Study.gif", "img/genius.gif", "img/great job.gif"];
		var messages = ["Pretty good", "You need to study", "You're a GENIUS",	"Great job"];
		

var score;
if(correct <1){
	score = 1
}
if(correct == 1){
	score = 0
}
if(correct>1 && correct<3){
	score = 3 
}
if(correct > 2){
	score = 2
}








document.getElementById('afterSubmit').style.visibility = "visible";


document.getElementById("message").innerHTML = messages[score]
document.getElementById("numberCorrect").innerHTML = "you got " + correct + " correct.";
document.getElementById("picture").src = pictures[score];

}


