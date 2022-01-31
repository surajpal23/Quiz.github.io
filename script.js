document.getElementById("question").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);

	   result = variable + sub + con + ifstate;
	document.getElementById("grade").innerHTML = result;
 grading = [
	   {score:0,feedback:"I don't think you studied", image: "image/none.png"},
	   {score:25,feedback:"NO.", image: "image/poor.jpg"},
	   {score:50,feedback:"Maybe, Try again.", image: "image/avg.jpg"},
	   {score:75,feedback:"Yes!", image: "image/above.jpg"},
	   {score:100,feedback:"Excellent! You're pro!", image: "image/excellent.jpg"}
	   ];
for(i=0; i<grading.length; i++) {
    if(result == grading[i].score) {
    result2 = grading[i].feedback + "<br /><img src='" + grading[i].image + "' width='300'  />";
	  }
	  }
document.getElementById("grade2").innerHTML = result2;
return false;
}
