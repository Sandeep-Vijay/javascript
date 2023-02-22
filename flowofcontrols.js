// flow of controls
// 1.decision making   if    else if     else
// 2.looping    for    while 
// 3.switching   break    continue


// num=0
// if(num>0){
//     console.log("positive");
// }
// else if(num<0){
//     console.log('negative');
// }
// else{
//     console.log("Zero");
// }

num=6
console.log(`num ${num}`);

// num=10
// num1=10

// if(num>num1){
//     console.log('greatest number is',num);
// }
// else if(num==num1){
//     console.log('equal');
// }
// else{
//     console.log('greatest number is',num1);
// }

// fizzbuzz
num=10
// div by 3 fizz
// div by 5 buzz
// div by 15 fizzbuzz

if(num%15==0){
    console.log("fizzbuzz");
}
else if(num%5==0){
    console.log("buzz");
}
else if(num%3==0){
    console.log("fizz");
}