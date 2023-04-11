// Assignment code here
var numbers = "1234567890"
var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specailChr = "!@#$%^%^&*()?";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 //Write password to the #password input
function generatePassword(params) {
  

 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");
 // passwordText.textContent= passcode;
 // passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



//generate password function
function generatePassword(){
   var pass = "";
   var length = prompt("How many varible would you like your password to attain?");
   var choice1 = Math.floor(Math.random()* 2);
   var choice2 = Math.floor(Math.random()* 2);
   var choice3 = Math.floor(Math.random()* 2);
  if(length < 7 || length > 129){
  alert("Passwords must be larger then 8 and less then 129! ")
  generatePassword()
 }else if(length > 7 && length < 129){

  // prompts for password creteria
  var lowercasePrompt = prompt("Would you like your password to include lowercase letters? (Yes or No)" );
  var uppercasePrompt = prompt("Would you like your password to include Uppercase letters? (Yes or No)");
  var specailCharPrompt = prompt("Would you like your password to include specail letters? (Yes or No)");
  var numberPrompt = prompt("Would you like your password to attain numbers? (Yes or No)");
  
 } 

 // include numbers and specail charters
if(  numberPrompt.toLowerCase() === "yes" && specailCharPrompt.toLowerCase() === "yes"){
  var chrSpecailChar = char.concat(specailChr);
  var numberss = chrSpecailChar.concat(numbers);
  
   for (var i = 0; i < length;i++){
    var random = Math.floor(Math.random() * numberss.length + 1);
    var randomC = numberss.charAt(random);
  
    pass =  pass.concat(String(randomC));}}
     
    
    else if (numberPrompt.toLowerCase() ==="yes"){


      var chrSpecailChar = char.concat(numbers);
      for (var i = 0; i < length;i++){
        var random = Math.floor(Math.random() * chrSpecailChar.length + 1);
        var randomC = chrSpecailChar.charAt(random);
        pass =  pass.concat(String(randomC));}}

    
    
  
   
//


// Uppercase and LowerCase statments
var passArray = pass.split('');
console.log(passArray)
var passcode="";
if (uppercasePrompt.toLowerCase() === "yes"){
  for(var i=0;i < pass.length;i++){
    if (Math.floor(Math.random()* 2)== 1){
      passcode = passcode.concat(passArray[i].toUpperCase());
     
    console.log(passArray[i]);

    } else {
     passcode = passcode.concat(passArray[i].toLowerCase());
      
     //pass[i].toUpperCase()
  }

}
console.log(passcode);
document.querySelector('#password').textContent = passcode;
}

};
//Swicth Statement for generatePassword Function






//Var Chr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var SpecailChar = "!@#$%^%^&*()";