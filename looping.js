// for //1-10
// for(i=0;i<=10;i++){
//     console.log(i);
// }
// console.log("outside",i);

//10-1

// for(let i=10;i>0;i--){
// console.log(i);
// }
// console.log(i);  i is only on the th for loop block cant access it from outside

// 2 4 6 8 10

// for(i=2;i<=10;i+=2){
//     console.log(i);
// }

// multiplication table

// num=2
// i=1
// for(;i<=10;i++){
//     console.log(i,"x","2 =",i*2);
// }

// factorial
// num=5
// // 5x4x3x2x1
// fact=1
// for(;num>0;num--){
//     fact*=num
// }
// console.log(fact);

// sum of n
// n=5
// sum=0
// for(;n>0;n--){
//     sum+=n
// }
// console.log(sum);

// even num bw ranges
// range1=10
// range2=20
// for(range1;range1<=range2;range1++){
//     if(range1%2==0){
//         console.log(range1);
//     }
    
// }

// while loop
// i=1
// while(i<=10){
//     console.log(i);
//     i++
// }

// odd num bw range
// range1=20
// range2=30
// while(range1<=range2){
//     if(range1%2!=0){
//         console.log(range1);
//     }
//     range1++
// }

// break and continue

// for(i=1;i<5;i++){
//     if(i==2){
//         break
//     }
//     console.log(i);
// }
// console.log(i);


// for(i=1;i<5;i++){
//     if(i==2){
//         continue
//     }
//     console.log(i);
// }
// // console.log(i);

// prime number using flag
// num=6
// flag=0
// for(i=2;i<num;i++){
//     if(num%i==0){
//         flag=1
//         break
//     }
// }
// if(flag==1){
//     console.log("not prime");
// }
// else{
//     console.log("prime number");
// }

// prime number without flag
// num=5
// for(i=2;i<num;i++){
//     if(num%i==0){
//         break
//     }
// }
// if(num==i){
//     console.log("prime number");
// }
// else{
//     console.log("not prime");
// }
// terenary
// num=6
// for(i=2;i<num;i++){
//     if(num%i==0){
//         break
//     }
// }
// num==i?console.log("prime number"):console.log("not prime");


// 
// a="4"
// b=44
// c=a+b
// console.log(c);
// console.log(typeof(c));   answer will be a string, if we add any data to a string the output will be a string