let btnSubmit=document.getElementById('btnSubmit');
let outputText=document.getElementById('outputText');
let outputList= document.getElementById('list');
let btnPlayAgain=document.getElementById('btnPlayAgain');




let randomNumber = Math.ceil(Math.random()*100) +1;


function checkNumber(){
    let input = parseInt(document.getElementById('userInput').value); // convert input to integer.
if(input===randomNumber){
    outputText.innerHTML="you guessed the right number "+", "+" it Was "+randomNumber;
    outputText.style.color="green";
    outputList.innerHTML +="matches number is "+input + "<br/>";

}

else if(input>randomNumber && input<=100){
    outputText.innerHTML= "You guessed too high number";
    outputText.style.color="red";
    outputList.innerHTML +="matches number is "+input + "<br/>";
}
else if(input<randomNumber && input>=1){
    outputText.innerHTML="You guessed too low number";
    outputText.style.color="blue";
    outputList.innerHTML +="matches number is "+input +"<br/>";
}
else if(input<=1){
    outputText.innerHTML="Write a number between 1 and 100."
    outputList.innerHTML +="matches number is "+input + "<br/>";

}
else if(isNaN(input)){
    outputText.innerHTML="You should type a number btn 1 to 100"
}
else{
    outputText.innerHTML="wrong! Try again"
}
console.count(clickCounter);


//document.write(checkNumber).count
// document.getElementById("gueses").innerHTML = checkNumber.count

}
btnSubmit.addEventListener('click',checkNumber);
/* console.count(clickCounter); */
btnPlayAgain.addEventListener('click', function(){
    location.reload();
})

/* function clickCounter() {
    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You guessed " + localStorage.clickcount + " time(s).";
    } 
} */

