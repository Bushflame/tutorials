var msg = "What is your name?";

console.log("Hello, console!");
document.write("Hello, document!");

var userName = window.prompt(msg);

var greetingPara = document.getElementById('greeting')
greetingPara.innerHTML +='Hello there ' + userName;


var get_num_1 = parseInt(window.prompt('Enter a number'));
var get_num_2 = parseInt(window.prompt('Enter a number'));
var operand1 = document.getElementById('operand1');
var operand2 = document.getElementById('operand2');
operand1.innerHTML+= get_num_1;
operand2.innerHTML += get_num_2;

var sum = get_num_1 + get_num_2;
var difference = get_num_1 - get_num_2;
var division = get_num_1 / get_num_2;
var multiply = get_num_1 * get_num_2;
var modulus = get_num_1 % get_num_2;

document.getElementById("sum").innerHTML += 'The total of the 2 numbers is' + sum;
document.getElementById("subtract").innerHTML += 'Number 1 minus number 2 is' + difference;
document.getElementById("division").innerHTML += 'The sum of number 1 divided by number 2 is' + division;
document.getElementById("multiply").innerHTML += 'The two numbers multipled are' + multiply;
document.getElementById("modulus").innerHTML += 'The modulus of '+ get_num_1 + ' divided by ' + get_num_2 + ' is ' + modulus;
// AN OBJECT WITH ITS PROERTIES
//TO CALL THEM 
// contact.lastname
var contact = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};
console.log(contact.age)

var greeting = "Hello";

var contact = {
    firstName: "Jane",
    lastName: "Doe",
    age: 35
};
greeting = greeting + " " + contact.firstName;

console.log(greeting)