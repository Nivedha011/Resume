let my_resume = [{ID:"12345",Location:"Hamburg",Qualification:"B.Tech in CSE",Profession:"Software developer in XYZ",Work_location:"Hamburg",Role:"DCOPs",Experience:"10 years",Skills:["Good communication","Team management","Knowledge in Java,Python and Datacenter opeatons"],Languages_Known:["Tamil","German","English"]},
                 {ID:"2343",Location:"Canada",Qualification:"B.Tech in ECE",Profession:"System Engineer in XYZ",Work_location:"Canada",Role:"Linux Admin",Experience:"9 years",Skills:["Good communication","Team management","knowledge in Linux"],Languages_Known:["Tamil","English"]},
                 {ID:"45675",Location:"California",Qualification:"BCA",Profession:"QA tester in XYZ",Work_location:"California",Role:"Selenium Admin",Experience:"5 years",Skills:["Good communication","Team management","knowledge in automation"],Languages_Known:["Tamil","English"]},
                 {ID:"23567",Location:"Mumbai",Qualification:"B.Tech in EEE",Profession:"Network Engineer in XYZ",Work_location:"Mumbai",Role:"Networks Admin",Experience:"7 years",Skills:["Good communication","Team management","knowledge routers and switches"],Languages_Known:["Tamil","English"]}
];

//console.log(my_resume);

//forEach loop
my_resume.forEach(resume => {
    for(var key in resume){
        console.log(`${key}:${resume[key]}`);
    }
});

//for loop
for(let i=0;i<my_resume.length;i++)
{
    let obj=my_resume[i];
    for(var key in obj)
    {
        console.log(`${key}:${obj[key]}`)
    }
}

//for in loop
for(let i in my_resume)
{
    let obj=my_resume[i];
    for(var key in obj)
    {
        console.log(`${key}:${obj[key]}`)
    }
}

