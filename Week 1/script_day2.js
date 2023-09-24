// JavaScript Day 2

// 1. Arrays

// New elements can also be added to the array just by specifying the last index of the array and assign the value.
// JS array need not have elements of the same data type

arr = [1,2,3]
// arr[n-1] = Returns the index
// pop() and push() are functions used to remove and adds an element to the array
// console.log(arr.shift()); Removes the first element and shifts all other elements to the left side
// arr.unshift(0);
// console.log(arr); = Adds an element to the beginning of the array and returns the new length of the array
// delete arr[0]; = Used to delete the element specified in the index but can make the index element to be undefined
// temp = [4,5]
// console.log(arr.concat(temp)); = Used to concatenate 2 array into a single array. The function can take in one or more array objects
// console.log(arr.concat(9)); = Concat function can also take in a single element
// arr.splice(1,0,9,8)
// console.log(arr); = Used to add elements in the specified index. 1st = Index. 2nd = No.of.elements to be removed. Then, the elements to be added
// arr.splice(1,2)
// console.log(arr); = Splice can also be used to remove elements from the array with the specified index and the no.of.elements
// arr.slice(0,3); = Used to remove elements from the 1st arguement and before the 2nd arguement
// console.log(arr.slice(-3)) = Extracts the last 3 elements from the array

// Advanced methods
// 1. Join
// console.log(arr.toString()); = Retunrs the array as a complete stirng with , in between the elements
// console.log(arr.join('')); = Returns the array as a complete string with , replaced by the parameter mentioned in the function call
// 2. forEach
// function processArray(v,i,a){
//     console.log(v,i,a);
// }
// arr.forEach(processArray);
// The forEach function takes in a function, where the function always takes in v-value,i-index,a-array. This order(v,i,a) does not change. If array is not neeed, a can be removed. And similarly for other parameters.
// Also make sure that if you use a arrow function inside forEach, the function should be defined before the call.
// 3. Map
// Performs operation on the array and results an array as a result when performed a function.
// console.log(arr.map(v => Math.sqrt(v)));
// Difference between map and filter is that map is used to perform operation on each element while filter is used to perform operation on all the elements

// 4. Filter
// Used to perform operation on all the array elements
// console.log(arr.filter(v => v >=2));
// Example - Function to get the names starting with A
// temp = ["Dinesh","Aakkash","Aniruth"];
// console.log(temp.filter(v => v.charAt(0) === 'A'))

// 5. Reduce
// Used to produce a final (single) outcome
// console.log(arr.reduce((pv,v) => pv+v));
// Only difference between (map, filter,forEach) and reduce is that reduce takes in another arguement named previous value which is initially 0 and used to store elements.

// 6. Every
// Used to check a condition for all the values
// console.log(arr.every(v => v<10))

// 7. Some
// Used to check a condition for any of the value in the array
// console.log(arr.some(v=> v==1))

// 2. Objects
// JS objects are represented as Key:Value pairs
obj = {
    name:"James",
    id:1,
    active:true
}
// Keys are also called as property
// console.log(obj.name); Used to retrieve the value of the key mentioned
// console.log(obj["name"]); This can also be used to retrieve the key but they must be mentioned in " "
// obj.dob = "01/01/2023"; Object key can be easily added to them by just specfying the key name
// console.log(Object.keys(obj)); = Returns the keys used in the object
// console.log(Object.values(obj)); = Returns the values of the object
// console.log(Object.entries(obj)); = Returns the key and value of each pair as each array

// Objects can also be represented as a collection in an array
// obj_arr = [
//     {
//         id:1,
//         age:18,
//         loc:['Chennai','Bangalore']
//     },
//     {
//         id:2,
//         age:24,
//         loc:['Mumbai','Bangalore']
//     },
// ]
// console.log(obj_arr[0]);
// Note that array can have elements of array, object, etc. This is used as DataBase


//3. Looping
// for(val in arr)
//     console.log(val); = Val runs from the index 0 to the length - 1
// For in is the only loop where object can be iterated in an array
// for(val of arr)
//     console.log(val); = Val has the values of the arr elements

// Iterating an object
obj = {
    name:"James",
    id:1,
    active:true
}
// for(let temp in obj){
//     console.log(obj[temp])
// }


// 4. Function
// Types:
// 1. Regular function
// function display(){
//     console.log("Sample message");
// }
// display();

// 2. Anonymous
// display = function(a,b){
//     return a + b;
// }
// console.log(display(1,2))

// 3. Arrow functions
// display = (a,b) => {
//     return a*b;
// }
// console.log(display(3,6));

// display = num1 => {
//     return num1+5;
// }
// console.log(display(3))
// If the function takes in only single arguement, its not needed to mention ()

// display = num1 => num1*5;
// console.log(display(3));
// Also, if there is a single return statement in the function, {} and 'return' are not needed. 

// Arrow function always must be declared and only then be used. 

// arr.forEach(v => console.log(v));
// Arrow function are mostly used in run time.

// Task - 1
// Given array of objects, iterate through it and display them.
// let user = [
//     {
//         id:1,
//         name:"Kevin",
//         active:false,
//         department:["D1","D2","D3"],
//         address:{
//             pa:"A1",
//             ta:"T1"
//         }
//     },
//     {
//         id:2,
//         name:"James",
//         active:true,
//         department:["D2","D3"],
//         address:{
//             pa:"A2",
//             ta:"T2"
//         }
//     },
//     {
//         id:3,
//         name:"Bryant",
//         active:false,
//         department:["D1","D3"],
//         address:{
//             pa:"A3",
//             ta:"T3"
//         }
//     }
// ]


// for(let itr1 in user)
// {
//     temp = user[itr1];
//     for(let itr2 in temp)
//     {
//         if(typeof temp[itr2] == "object")
//         {
//             console.log(itr2 + ":")
//             temp_arr = temp[itr2]
//             if(Array.isArray(temp_arr))
//             {
//                 str = temp[itr2].toString();
//                 arr = str.split(",")
//                 console.log(arr.join('|$|'));
//             }
//             else{
//                 for(let itr3 in temp_arr)
//                 console.log(itr3 + " = " + temp_arr[itr3])
//             }
//         }
//         else
//         console.log(itr2 + " = " + temp[itr2]);
//     }
// }

// Task - 2
// Given an array of numbers, "C", "D", "+", perform the corresponding operations and produce the sum of all the elements in the array at the end.
// arr = [null]
// temp_arr = []
// for(let ele in arr)
// {
//     temp = arr[ele];
//     if(!temp)
//     continue;
//     if(!isNaN(temp))
//     {
//         temp_arr.push(Number.parseInt(temp))
//     }
//     else 
//     {
//         if(temp == "C")
//         temp_arr.pop();
//         else if(temp == "D")
//         {
//             let last_ele = temp_arr.pop();
//             if(!last_ele)
//             continue;
//             temp_arr.push(last_ele);
//             temp_arr.push(last_ele*2)
//         }
//         else{
//             let l1 = temp_arr.pop();
//             let l2 = temp_arr.pop();
//             if(l2)
//             temp_arr.push(l2);
//             if(l1)
//             temp_arr.push(l1);
//             if(l1 && l2)
//             temp_arr.push(l1+l2);
//         }
//     }
// }
// console.log(temp_arr);
// let sum = 0;
// if(temp_arr){
// for(let ele in temp_arr)
//     sum += temp_arr[ele]
// }
// console.log(sum);


// Task - 3
// Given an string with words as animals and another array of string, return the most occuring animal in the animals string which is not present in the array.
// animals = "Dog horse donkey CAT donkey cat bird donkey";
// f = ["donkey"];
// temp_obj = {};
// temp_arr = animals.split(" ");
// for(let x of temp_arr)
// {
//     lower = x.toLowerCase();
//     if(f.includes(lower))
//         continue;
//     if(temp_obj[lower])
//     temp_obj[lower]++;
//     else
//     temp_obj[lower] = 1;
// }
// console.log(temp_obj)
// let max_count = 0
// let res_animal = ""
// for(let x in temp_obj)
// {
//     if(temp_obj[x] > max_count)
//     {
//         max_count = temp_obj[x];
//         res_animal  = x;
//     }
// }
// console.log(res_animal);
