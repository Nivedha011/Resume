var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

//with order
if(JSON.stringify(obj1)===JSON.stringify(obj2))
{
	console.log("true")
}
else
{
	console.log("false")
}

//without order
var flag=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log(flag);
