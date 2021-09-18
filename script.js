document.querySelector("#generate").addEventListener("click", displayPassword);

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!%()_-+={}[];^&*:'`~<,>.?@#$/|"



function displayPassword() {
  //calling generateRandomPassword() method for generating random password
  var password = generateRandomPassword();

  //Display random password on html
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var password_length;
var uppercase_validation;
var number_validation;
var special_characters_validation;


//Generate Random Password
function generateRandomPassword(){
  //Calling password length validation method
  validationForLength();
  console.log(password_length);
  
  //Calling uppercase validation method
  uppercaseValidation();
  console.log(uppercase_validation);
  
  //Calling number validation method
  numberValidation()
  console.log(number_validation);
  
  //Calling special characters validation method
  specialCharactersValidation();
  console.log(special_characters_validation);

var stringForPassword 
var password = "";
if (uppercase_validation && number_validation && special_characters_validation){
  stringForPassword =lowercaseChar+ uppercaseChar + numberChar + specialChar;
}else if (uppercase_validation && number_validation){
  stringForPassword =lowercaseChar+ uppercaseChar + numberChar;

}else if (number_validation && special_characters_validation){
  stringForPassword =lowercaseChar+ numberChar + specialChar;

}else if (uppercase_validation && special_characters_validation){
  stringForPassword =lowercaseChar+ uppercaseChar + specialChar;

}else if (uppercase_validation){
  stringForPassword =lowercaseChar+ uppercaseChar;

}else if(number_validation){
  stringForPassword =lowercaseChar+ numberChar;

}else if (special_characters_validation){
  stringForPassword =lowercaseChar+ specialChar;

}else{
  stringForPassword = lowercaseChar;
}

  for(var i = 0; i < password_length; i++){
    password =password+ stringForPassword.charAt(Math.floor(Math.random() * stringForPassword.length));
  }
  //return password
  return password;
}

//password length validation method
function validationForLength(){
  password_length = prompt("Choose a length of at least 8 characters and no more than 128 characters: ");

    if (password_length<8){
      alert("Password length must be a number between 8-128 characters");
      validationForLength();
    }else if (password_length>128){
      alert("Password length must be a number between 8-128 characters");
      validationForLength();
    }else if (isNaN(password_length)){
      alert("Password length must be a number between 8-128 characters");
      validationForLength();
    }
    //return true or false
    return password_length;
}

//special characters validation method
function uppercaseValidation(){
  uppercase_validation = prompt("Do you want to add uppercase characters in your password? \nPlease enter yes or no.");
  uppercase_validation = uppercase_validation.toLowerCase();

    if (uppercase_validation === null || uppercase_validation === ""){
      alert("Please answer Yes or No");
      uppercaseValidation();

    }else if (uppercase_validation === "yes" || uppercase_validation ==="y"){
      uppercase_validation = true;
      return uppercase_validation;

    }else if (uppercase_validation === "no" || uppercase_validation ==="n"){
      uppercase_validation = false;
      return uppercase_validation;
    
    }else {
      alert("Please answer Yes or No");
      uppercaseValidation();
    }
    //return true or false
    return uppercase_validation;
}

//number validation method
function numberValidation(){
  number_validation = prompt("Do you want to add numbers or integers in your password? \nPlease enter yes or no.");
    number_validation = number_validation.toLowerCase();

    if (number_validation === null || number_validation === ""){
      alert("Please answer Yes or No");
      numberValidation();

    }else if (number_validation === "yes" || number_validation ==="y"){
      number_validation = true;
      return number_validation;

    }else if (number_validation === "no" || number_validation ==="n"){
      number_validation = false;
      return number_validation;
    
    }else {
      alert("Please answer Yes or No");
      numberValidation();
    }
    // return true or false
    return number_validation;
}


//special characters validation method
function specialCharactersValidation(){
  special_characters_validation = prompt("Do you want to add any special characters in your password? \nPlease enter yes or no.");
    special_characters_validation = special_characters_validation.toLowerCase();

    if (special_characters_validation === null || special_characters_validation === ""){
      alert("Please answer Yes or No");
      specialCharactersValidation();

    }else if (special_characters_validation === "yes" || special_characters_validation ==="y"){
      special_characters_validation = true;
      return special_characters_validation;

    }else if (special_characters_validation === "no" || special_characters_validation ==="n"){
      special_characters_validation = false;
      return special_characters_validation;
    
    }else {
      alert("Please answer Yes or No");
      specialCharactersValidation();
    }
    //retutn true or false value
    return special_characters_validation;
}