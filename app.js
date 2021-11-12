// Assignment # 21-25
// STRING METHODS

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName = prompt("Enter your first name");
// var lastName  = prompt("Enter your lasst name");
// var fullName = firstName + ' ' + lastName;
// alert('Welcome '+fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.
// var userFavPhone = prompt("Enter your favourite model", "eg:Nokia");
// var stringLen = userFavPhone.length;
// document.write("My fav phone is " +userFavPhone +'<br/>');
// document.write("Length of string: "+stringLen);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
// var string = "Pakistani";
// var char = string.indexOf('n');
// document.write('String: '+string +'<br>' +"Index of 'n': " +char);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var string = 'Hello World';
// var char = string.lastIndexOf('l');
// document.write('String: '+string +'<br>' +"Last index of 'l': " +char);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// var string = "Pakistani";
// var findCharIndex = string.charAt(3);
// document.write('String: '+string +'<br>' +"Character at index 3: " +findCharIndex);

// 6. Repeat Q1 using string concat() method.
// var firstName = prompt("Enter your first name");
// var lastName  = prompt("Enter your lasst name");
// var fullName = firstName.concat(" "+lastName)
// alert('Welcome '+fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var string = "Hyderabad";
// var strRep = string.replace("Hyder" , "Islam");
// document.write("Before Replacement: "+string +'<br>');
// document.write("After Replacement: "+strRep);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var text = 'Ali and Sami are best friends. They play cricket and football together.';
// var charRep = text.replace(/and/g , "&");
// document.write("Original Message: "+text+'<br>');
// document.write("After Replacement: "+charRep);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var num = "472";
// document.write("Value: " +num +'<br>');
// document.write("Type: "+typeof(num) +'<br>');
// num = Number(num);
// document.write("Value: "+num +'<br>');
// document.write("Type: "+typeof(num));

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var userInput = prompt("Enter any string", "eg:Cookie...").toUpperCase();
// document.write("User Input: "+userInput);

// 11. Write a program that takes user input. Convert and
// show the input in title case.
// var userInp = prompt("Enter any string");
// var titleCase = userInp.slice(0,1).toUpperCase() + userInp.slice(1);
// document.write(titleCase);

// 12. Write a program that converts the variable num to
// string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.
// var num = 35.36;
// document.write(num +'<br>');
// var Newnum =num.toString().replace("." , "");
// document.write(Newnum);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// var flag = false;
// var userName = prompt("Enter your name");
// var len = userName.length;
// for(var i = 0; i<len; i++){
//     if(userName[i] === userName.charCodeAt(33) || userName[i] === userName.charCodeAt(44) || userName[i] === userName.charCodeAt(46) || userName[i] === userName.charCodeAt(64))
//     {
//             flag = true;
//             alert("Please enter a valid name");
//     }
// }
// if(flag === false){
//     alert("welcome "+userName);
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInp = prompt("Enter any item");
// var flag = false;
// for(var i = 0; i < A.length; i++){
//     if(userInp === A[i]){
//         flag = true;
//         alert(userInp +" is available at index " +i +" in our bakery");
//     }
// }
// if(flag === false){
//     alert(userInp +" is not available in our bakery");
// }


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// var flag = false;
// var passcode = prompt("Enter your pasword");
// for(var i = 0; i < passcode.length; i++){
//     if((passcode.length < 6) || (passcode[0] === 0) || (passcode[0] === 1) || (passcode[0] === 2) || (passcode[0] === 3) || (passcode[0] === 4) || (passcode[0] === 5) || (passcode[0] === 6) || (passcode[0] === 7) || (passcode[0] === 8) || (passcode[0] === 9) )
//        {
//         flag = true;
//         alert("Invalid Password");
//        }   
// }
// if(flag === false){
//     alert("Valid")
// }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// var university = 'University of Karachi';
//  //var strSpl = university.split(" ");
// for(var i=0; i<university.length; i++){
//     document.write(university[i] +'<br>')
// }

// 17. Write a program to display the last character of a user
// input.
// var userInp = prompt("Enter any string");
// var lastChar = userInp.charAt(userInp.length-1);
// document.write(lastChar);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var text = "The quick brown fox jumps over the lazy dog";
// var inp = prompt("Enter any character");
// var count = 0;
// for(var i = 0; i < text.length; i++){
//     if(inp == text.charAt(i)){
//         count++;
//     }
// }
// document.write(count);


//-------------------------------------------------------------------//

// Assignment # 26-30
// MATH METHODS

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var posInt = +prompt("Enter positive iteger");
// document.write(posInt+'<br><br>');
// document.write(Math.round(posInt) +'<br><br>');
// document.write(Math.floor(posInt) +'<br><br>');
// document.write(Math.ceil(posInt));

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var negInt = +prompt("Enter negitive iteger");
// document.write(negInt+'<br><br>');
// document.write(Math.round(negInt) +'<br><br>');
// document.write(Math.floor(negInt) +'<br><br>');
// document.write(Math.ceil(negInt));


// 3. Write a program that displays the absolute value of a
// number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
// var a = +prompt("Enter any num");
// var b = Math.abs(a);
// document.write(b);


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var dice = Math.floor( Math.random() * 6 ) +1;
// alert( dice);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var head = 1;
// var tail = 2;
// var toss = Math.random() * 2;
// var coin = Math.floor(toss)
// if(coin === 0){
//     document.write("2 <br> Random Coin Value: Head")
// } else if(coin === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }

// 6. Write a program that shows a random number between 1 and 100 in your browser.
// var num ;
// num = Math.ceil(Math.random() * 100);
// document.write("Random number between 1 and 100: " + num)


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var a = prompt("Enter your weight");
// var b = parseInt(a);
// document.write("The weight of user is "+b +"kiograms");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var a = 3;
// var b = +prompt("Enter any number");
// if(b===a){
//     alert("congratulations!");
// }
// else if((b === 0) || (b===1) || (b===2)){
//     alert("closer");
// }
// else{
//     alert("try again");
// }