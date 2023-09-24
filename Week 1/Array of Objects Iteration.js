Task - 1
Given array of objects, iterate through it and display them.
let user = [
    {
        id:1,
        name:"Kevin",
        active:false,
        department:["D1","D2","D3"],
        address:{
            pa:"A1",
            ta:"T1"
        }
    },
    {
        id:2,
        name:"James",
        active:true,
        department:["D2","D3"],
        address:{
            pa:"A2",
            ta:"T2"
        }
    },
    {
        id:3,
        name:"Bryant",
        active:false,
        department:["D1","D3"],
        address:{
            pa:"A3",
            ta:"T3"
        }
    }
]


for(let itr1 in user)
{
    temp = user[itr1];
    for(let itr2 in temp)
    {
        if(typeof temp[itr2] == "object")
        {
            console.log(itr2 + ":")
            temp_arr = temp[itr2]
            if(Array.isArray(temp_arr))
            {
                str = temp[itr2].toString();
                arr = str.split(",")
                console.log(arr.join('|$|'));
            }
            else{
                for(let itr3 in temp_arr)
                console.log(itr3 + " = " + temp_arr[itr3])
            }
        }
        else
        console.log(itr2 + " = " + temp[itr2]);
    }
}

Task - 2
Given an array of numbers, "C", "D", "+", perform the corresponding operations and produce the sum of all the elements in the array at the end.
arr = [null]
temp_arr = []
for(let ele in arr)
{
    temp = arr[ele];
    if(!temp)
    continue;
    if(!isNaN(temp))
    {
        temp_arr.push(Number.parseInt(temp))
    }
    else 
    {
        if(temp == "C")
        temp_arr.pop();
        else if(temp == "D")
        {
            let last_ele = temp_arr.pop();
            if(!last_ele)
            continue;
            temp_arr.push(last_ele);
            temp_arr.push(last_ele*2)
        }
        else{
            let l1 = temp_arr.pop();
            let l2 = temp_arr.pop();
            if(l2)
            temp_arr.push(l2);
            if(l1)
            temp_arr.push(l1);
            if(l1 && l2)
            temp_arr.push(l1+l2);
        }
    }
}
console.log(temp_arr);
let sum = 0;
if(temp_arr){
for(let ele in temp_arr)
    sum += temp_arr[ele]
}
console.log(sum);


Task - 3
Given an string with words as animals and another array of string, return the most occuring animal in the animals string which is not present in the array.
animals = "Dog horse donkey CAT donkey cat bird donkey";
f = ["donkey"];
temp_obj = {};
temp_arr = animals.split(" ");
for(let x of temp_arr)
{
    lower = x.toLowerCase();
    if(f.includes(lower))
        continue;
    if(temp_obj[lower])
    temp_obj[lower]++;
    else
    temp_obj[lower] = 1;
}
console.log(temp_obj)
let max_count = 0
let res_animal = ""
for(let x in temp_obj)
{
    if(temp_obj[x] > max_count)
    {
        max_count = temp_obj[x];
        res_animal  = x;
    }
}
console.log(res_animal);
