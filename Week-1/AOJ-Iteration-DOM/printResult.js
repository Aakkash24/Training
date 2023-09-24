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

function printResult(){
    let ctr = 1;
    for(let itr1 in user)
    {
        let output = "";
        output += "<h3>Data:" + ctr + "</h3>";
        temp = user[itr1];
        for(let itr2 in temp)
        {
            if(typeof temp[itr2] == "object")
            {
                console.log(itr2 + ":");
                output += itr2 + ":<br>";
                temp_arr = temp[itr2]
                if(Array.isArray(temp_arr))
                {
                    str = temp[itr2].toString();
                    arr = str.split(",")
                    console.log(arr.join('|$|'));
                    output += arr.join("|$|") + "<br>";
                }
                else{
                    for(let itr3 in temp_arr){
                    console.log(itr3 + " = " + temp_arr[itr3]);
                    output +=itr3 + " = " + temp_arr[itr3] + "<br>"; 
                    }
                }
            }
            else
            console.log(itr2 + " = " + temp[itr2]);
            output += itr2 + " = " + temp[itr2] + "<br>"; 
        }
        document.getElementById("result").innerHTML += output;
        ctr++;
    }
}

printResult();
