employees=[
    [1,"amal","developer",56000,"kochi",3],
    [2,"anu","tester",46000,"thrissur",2],
    [3,"arun","teacher",66000,"alappuzha",5],
    [4,"mega","HR",76000,"idukki",6],
    [5,"rahul","security",10000,"munnar",10]



]
// console.log(employees);

// print the count of employees
// console.log(employees.length);

// name of the employees-map

// for(i of employees){
//     console.log(i[1]);
// }

// console.log(employees.map(i=>i[1]));


// find developers location -filter

// for(i of employees){
//     if(i[2]=='developer')
//     console.log(i[4]);
// }

// console.log(employees.filter(i=>i[2]=='developer')[0][4]);


// employee with maximum salary

// console.log(employees.sort((n1,n2)=>n2[3]-n1[3])[0][1]);

// lowest experience name

// console.log(employees.sort((n1,n2)=>n1[5]-n2[5])[0][1]);

// 50000 below salary -filter

// for(i of employees){
//     if(i[3]<50000){
//         console.log(i[1]);
//     }
// }
// console.log(employees.filter(i=>i[3]<50000).map(i=>i[1]));


