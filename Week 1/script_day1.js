// JavaScript Day 1

var a = "Aakkash";

console.log(a);

function temp(){
    console.log(a);
    var b = "DevRev"
    console.log(b);
    c = "Cloud"
}
temp();
var c;
console.log(c);
// We see that c without having any keyword has a global scope and hence there is no error.
// This is called as Hoisting. Make sure that the hoisted variable is declared outside the block.
// console.log(b); Var b has a local scope and cannot be used outside the block.

// for(var i=0;i<10;i++)
// console.log(i);

// console.log(i);
// Loop variable if assigned with i works outside the block

// for(let j=0;j<10;j++)
// console.log(j);

// console.log(j);
// Let variable within the block can be accessible within the containter.

// Comparison
// Soft comparison (==) Checks only the data inside
// Hard comparison (===) Checks for the data and the type
// This works with ! also

let e=10;
let d=20;

console.time();
if(e>d) 
    console.log("E is greater");
else
    console.log("E is not greater");

console.timeEnd();

console.time();
(e>d)?console.log("E is greater") : console.log("E is not greater");
console.timeEnd();

// To add more statement to the ternay operator:
// Just add outer () and then seperate each statememnt by ,
(e>d)?console.log("E is greater") : (console.log("E is not greater"),console.log("E is not greater 2"),console.log("E is not greater 3"));

// DataTypes as object
// DataTypes are called as object since they have predefined property(data members) and methods(member functions)

// 1. Number
// Number.isInteger(a) = Checks for numeric type
// console.log(Number.isFinite(a)); = Checks for finite type (0 is finite)
// console.log(Number.isNaN(a)); = checks for Not A Number type
// console.log(Number.parseInt("80% fine")); = converts the string to the numeric only if the number on the first part
// console.log(Number.parseFloat("88.8% correct")) = converts the string to the float type.
// var a = 10;
// console.log(a.toFixed(2)) = Changes the precision of the decimal part. 1 makes 'a' to 10.0
// a = 10.49
// console.log(a.toFixed(1)); = Changes the precision of the decimal with 10.5
// a = 10.49985
// console.log(a.toPrecision(4)); = The value inside the function represents the length of the result. Here the result is 10.50 (4)
// console.log(Number.toString(233)); = Returns the string representation of the numbers
// num = new Number(10);
// console.log(num); = Returns the output as an object
// console.log(num.valueOf()); = Returns the value corresponding to the Number objects
// a = 10;
// console.log(a.toString(16)); = Returns the Hex representation of the number


// 2. Math
// console.log(Math.floor(3.6)); = Returns the floor value of the number
// console.log(Math.ceil(3.9)); = Returns the ceil value of the number
// console.log(Math.round(3.4)); = Returns the round value of the number
// console.log(Math.abs(-200)); = Retuns the absolute value of the number
// console.log(Math.trunc(3.3)); = Returns the integer part of the number
// console.log(Math.sign(-4)); = Returns the sign of the number
// console.log(Math.pow(3,3)); = Returns the power of x with respect to y
// console.log(Math.sqrt(16)); = Returns the sqrt of a number
// console.log(Math.random()* (max-min) + min); = Returns a random number between min and max


// 3. String
str = 'Aakkash is \"20\" years old'
// console.log(str); = Quotes within the strings can be made by placing a \ before the ""
// console.log(str.length) = Returns the size - 1 since string is array of char
temp = " boy"
// console.log(str + temp); = String concatenation
// Contatenation of string and number considers the number as a string
// console.log(str.concat(" boy" + ".")); = Same as above. If any has ..., it is called as spread operation to the function.
// Note that the above method is a runtime method
// console.log(str.indexOf("is")); = Returns the index of the string
str = "     This||is||a||temp||string     "
// console.log(str.indexOf("is")); = Returns 2 since "is" starts at index 2
// console.log(str.indexOf("is",3)); = Returns the next index of the string "is"
// console.log(str.lastIndexOf("is")); = Returns the index of the string from the last with the same arguements as said above.
// console.log(str.search("is")); = Returns the index of the string but this does not allow the 2nd arguement and it is case sensitive
// console.log("This Is a temp string".search(/Is/i)); Returns the index of the string with i being case sensitive
// console.log(str.slice(0,4)); = Used to slice the string supplied with start, end-1. Only the start position can also be present and the end takes the whole string. They also can take -ve values.
// console.log(str.substr(0,4)); = Returns the string with starting position and the number of characters from the start position.
// console.log(str.split("||")); = Returns an array of string with the specified delimiter
// console.log(str.replace("is","IS")); = Replaces a single string with the 2nd arguement
// console.log(str.replaceAll("is","IS")); = Replaces all the string with the 2nd arguement
// console.log(str.trim()); = Returns the string with removing the spaces at the front and end

// Assignment Day 1
// Function to perform addition between 2 numbers
function add(a,b)
{
    console.log(a+b);
}

// add(10,20);
