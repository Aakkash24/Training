let id_ctr = 0;
data = [];
let temp = JSON.parse(localStorage.getItem("user_data"));
if(temp.length){
    console.log(temp);
    data = temp;
    console.log(typeof data)
    printData();
}
function processData(){
    id_ctr++;
    let name = document.querySelector("#name").value;
    let subjects_all = document.querySelectorAll(".subjects");
    let subjects = []
    for(let i=0;i<subjects_all.length;i++)
    {
        if(subjects_all[i].checked)
        subjects.push(subjects_all[i].value);
    }
    let active = document.querySelector("#active").value;
    let pno = document.querySelector("#pno").value;
    let dept = document.querySelector("#dept").value;
    let address = document.querySelector("#address").value;
    obj = {}
    obj["id"] = id_ctr;
    obj["name"] = name;
    obj["subject"] = subjects;
    obj["active"] = active;
    dept_arr = dept.split(',');
    obj["department"] = dept_arr;
    address_arr = address.split(";");
    temp_obj = {};
    temp_obj["PA"] = address_arr[0];
    temp_obj["TA"] = address_arr[1];
    obj["address"] = temp_obj;
    obj["pno"] = pno;
    if(!(name && subjects && active && dept_arr && temp_obj))
    {
        let output = "<h3> Fields empty </h3>";
        document.getElementById("error").innerHTML += output;
    }
    else if(checkData(obj))
    {
        data.push(obj);
        toStorage();
        printData();
    }
    else{
        let output = "<h3> User already exists </h3>";
        document.getElementById("error").innerHTML += output;
    }
}

function checkData(obj)
{
    temp_arr = JSON.parse(localStorage.getItem("user_data"));
    if(!temp_arr)
    return true;
    for(let i=0;i<temp_arr.length;i++)
    {
        let temp_pno = temp_arr[i]["pno"];
        if(obj["pno"] === temp_pno)
        return false;
    }
    return true;
}

function toStorage()
{
    localStorage.removeItem("user_data");
    localStorage.setItem("user_data",JSON.stringify(data));
    temp_arr = JSON.parse(localStorage.getItem("user_data"));
    console.log(temp_arr);
}

function printData()
{
    temp_arr = JSON.parse(localStorage.getItem("user_data"));
    temp_obj = {}
    flag = false;
    let op = "<tr><td>Name</td><td>Subjects</td><td>Phone Number</td><td>Active</td><td>Department</td><td>Permanent Address</td><td>Temporary Address</td><td>Delete</td><td>Edit</td></tr>";
    for(let i=0;i<temp_arr.length;i++)
    {
        temp_obj = temp_arr[i];
        let name = temp_obj["name"];
        let subj = temp_obj["subject"];
        let pno = temp_obj["pno"];
        let active = temp_obj["active"];
        let dept = temp_obj["department"];
        let address = temp_obj["address"];
        let pad = address["PA"];
        let tad = address["TA"];
        let id = temp_obj["id"];
        let del_button = '<input type="button" value="Delete" id=' + id + ' onclick="deleteData(' + id + ',' + true + ')">';
        let edit_button = '<input type="button" value="Edit" id=' + id + ' onclick="editData(' + id +')">';
        let output = "<tr><td>" + name + "</td><td>" + subj + "</td><td>" + pno + "</td><td>" + active + "</td><td>" + dept + "</td><td>" + pad + "</td><td>" + tad + "</td><td>" + del_button + "</td><td>" + edit_button + "</td></tr>";
        op += output;
        console.log(output);
    }
    document.getElementById("result").innerHTML = op;
}

function deleteData(id,flag)
{
    arr = JSON.parse(localStorage.getItem("user_data"));
    localStorage.removeItem("user_data");
    temp_arr = []
    temp_obj = {}
    for(let i=0;i<arr.length;i++)
    {
        obj = arr[i];
        if(obj["id"]===id)
            continue;
        temp_arr.push(obj);
    }
    localStorage.setItem("user_data",JSON.stringify(temp_arr));
    data = temp_arr;
    if(flag)
    printData();
}

function editData(id)
{
    arr = JSON.parse(localStorage.getItem("user_data"));
    temp_arr = []
    temp_obj = {}
    for(let i=0;i<arr.length;i++)
    {
        obj = arr[i];
        if(obj["id"]===id)
        {
            temp_obj = obj;
        }
        else
        temp_arr.push(obj);
    }
    // Get updated details
    // console.log(temp_obj);
    let output = 'Name: <input type="text" name="name" id="ename" class="input" required> <br> ';
    output += 'Active: <input type="text" name="active" id="eactive" required><br> Department: <input type="text" name="dept" id="edept" required><br>';
    output += 'Address:<textarea id="eaddress" name="address" required></textarea><br>';
    output += '<input type="button" value="Edit" onclick="processEditData(' + id + ')">';
    document.getElementById("editForm").innerHTML = output;
    let prev_name = temp_obj["name"];
    let prev_active = temp_obj["active"];
    let prev_dept = temp_obj["department"];
    let dept_str = prev_dept.toString();
    let prev_address = temp_obj["address"];
    let pa = prev_address["PA"];
    let ta = prev_address["TA"];
    document.getElementById("ename").value = prev_name;
    document.getElementById("eactive").value = prev_active;
    document.getElementById("edept").value = dept_str;
    document.getElementById("eaddress").value = pa + ";" + ta;

}

function processEditData(id)
{
    temp_obj = {}
    temp_arr = JSON.parse(localStorage.getItem("user_data"));
    localStorage.removeItem("user_data");
    arr = []
    console.log(temp_arr);
    for(let i=0;i<temp_arr.length;i++)
    {
        temp = temp_arr[i];
        if(temp["id"]===id)
        {
            temp_obj = obj;
        }
        else
        arr.push(temp);
    }
    let name = document.querySelector("#ename").value;
    let active = document.querySelector("#eactive").value;
    let dept = document.querySelector("#edept").value;
    let address = document.querySelector("#eaddress").value;
    obj = {}
    temp_obj["id"] = id;
    temp_obj["name"] = name;
    temp_obj["active"] = active;
    dept_arr = dept.split(',');
    temp_obj["department"] = dept_arr;
    address_arr = address.split(";");
    temp = {};
    temp["PA"] = address_arr[0];
    temp["TA"] = address_arr[1];
    temp_obj["address"] = temp;
    arr.push(temp_obj);
    localStorage.setItem("user_data",JSON.stringify(arr));
    printData();
}
