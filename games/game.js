$( document ).ready(function() {

//empty value array
var crystalValue = [];
var counter = 0;
var secondNumber= crystalValue.concat(counter);
var losses = 0;
var wins = 0;
// this will generate random number for computer

var computerPick = Math.floor(Math.random() * 101) + 19;
$("#numberplacer").text(computerPick);

// variable to make for crystal values for pics
for(var i = 0; i < 4; i++ ){
    var randomNumber =Math.floor(Math.random() *12) + 1 ;
    crystalValue.push(randomNumber);
    console.log(randomNumber);


}


//loop for images
for(var i = 0; i < crystalValue.length; i++) {
var imagesCrystal = ["images/stone1.jpeg ","images/stone2.jpeg ","images/stone3.jpeg ","images/stone4.jpeg"];

//image click place holder
var imagePlacer = $('<img>');
//this places the class
imagePlacer.addClass("crystals-image");

imagePlacer.attr("src", imagesCrystal[i]) ;
imagePlacer.attr("data-crystalvalue", crystalValue[i]);


//this attaches to page div
$("#crystals").append(imagePlacer);
console.log(imagePlacer);

}
$(".crystals-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    $("#win2").text(crystalValue);
    console.log(crystalValue);

    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    if(crystalValue !== computerPick){
      $("#win2").text(crystalValue);
      }

   
   if(crystalValue !== computerPick){
      $("#win2").text(counter);
     
   }
   function reset(){
    var computerPick = Math.floor(Math.random() * 101) + 19;
    $("#numberplacer").text(computerPick); 
    counter = 0;

   }

    
    if (counter === computerPick) {
      alert("You win!"); reset(); wins++;
      $("#winner").text("wins:" + wins);

    }

    else if (counter >= computerPick) {
      alert("You lose!!"); reset(); losses++;
      $("#winner").text("losses: " + losses);
    }
    

})

});