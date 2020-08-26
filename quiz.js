
var score = 0;
var answers = [];
function qs(){
  if (answers.length < 3){
    var a = document.getElementById("first");
    if(a.checked == true && a.value =="True"){
      score++;
      answers.push("First question: right ");
    }else {
      answers.push("First question: wrong ");
    }

    var b = document.getElementById('4');
    if(b.checked == true && b.value == "True"){
      score++;
      answers.push("Second question: right ");
    }else {
      answers.push("Second question: wrong ");
    }

    var c = document.getElementById("a");
    if (c.checked == true && c.value =="True"){
      score++;
      answers.push("Third question: right ");
    }else{
      answers.push("Third question: wrong ");
    }

    }
    document.getElementById("answers").innerHTML = "Your score is: " + score.toString() + "<br/>" + answers;
}
