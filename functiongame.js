 //game
function game(){
  var countvar = 0;
  confirm("Let's go!");
  confirm("Are you ready to play?");
  
var age = prompt("What's your age?");
  if(age < 13) {
       alert("Make sure to get your parents' permission before playing");}
  else {
       alert("Great! let's play");}
  
alert("Let's walk through your typical school day...");
  

var userAnswer = prompt("You wake up and go to the bathroom to brush your teeth, do you 1. leave the water running as you brush or 2. turn it on only when you need it? (please enter either 1 or 2)");
if(userAnswer == "1") {
  countvar +=1;} 
else if (userAnswer == "2") {
    countvar -=1;}
else{
  alert("Sorry that wasn't an option");}

var feedback = prompt("You finally leave the house but halfway to the bus you realize you forgot to turn off the lights! Do you 1. go back home, turn the lights off and miss the bus OR 2. make the bus but leave the lights on all day? (1 or 2)");

if(feedback == "1") {
 var ques1 = prompt("Oh no! You missed the bus! Do you 1. walk to school 2. carpool OR 3. take your own car? (1, 2, or 3)");
         if (ques1 == "1"){
           countvar +=1;}
          else if (ques1 == "2"){
            countvar +=1;}
          else if (ques1 == "3"){
            countvar -=1;}
          else{
            alert("Sorry that wasn't an option");}}
  

else if (feedback == "2") {
    alert("You made the bus! But that lightswitch that you left on is really bad for the environment.");
     countvar -=1;}
else {
  alert("Sorry that wasn't an option");}

var ques2 = prompt("You finally made it to school! You have gym class first period and you get really thirsty. You look in your bag and see 1. a reusable water bottle OR 2. a plastic Poland Spring bottle (1 or 2)?");
   if (ques2 == "1"){
     countvar +=1;}
   else if (ques2 == "2"){
     countvar -=1;}
   else{
     alert("Sorry that wasn't an option");}
 
var ques3 = prompt("You get home from school but your house is FREEZING! Do you 1. turn the heater on OR 2. grab a blanket and a warm drink (1 or 2)?");
   if (ques3 == "1"){
     countvar -=1;}
   else if (ques3 == "2"){
     countvar += 1;}
   else{
     alert("Sorry that wasn't an option");}

var ques4 = prompt("You're about to eat dinner but your dad can't finish the recipe without carrots! He asks you to run out to the store to pick some up for him. Do you 1. go to your local farmers marker/organic produce store OR 2. drive to ShopRite...it's cheaper anyway (1 or 2)");
  if (ques4 == "1"){
    countvar +=1;}
  else if (ques4 == "2"){
    countvar -= 1;}
  else{
    alert("Sorry that wasn't an option");}
  
  alert("Calculating your results...");
  if (countvar > 0){
    alert("You are making a positive impact on the environment! Your eco-friendly decisions outweighed your bad ones; keep up the good work!!");}
  else if (countvar < 0){
    alert("Oh no! Your decisions are actually contributing to the carbon footprint! You might want to reflect on how you can be more eco-friendly in your daily life.");}
    
   else{
    alert("You're good decisions and poor ones cancelled each other out. You aren't hurting the environment, but you aren't necessarily helping it either.");}
 
  }
