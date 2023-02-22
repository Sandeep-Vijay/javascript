// without argument

// function add(){
//     n1=2
//     n2=4
//     s=n1+n2
//     console.log(s);
// }
// add()

// with argument

// function add(n1,n2){
//     s=n1+n2
//     console.log(s);
// }
// add(100,200)

// with argument and return type

// function add(n1,n2){
//     return n1+n2
// }
// console.log(add(100,300));


// function for factorial with argument

// function fact(n1){
//     s=1
//     for(i=1;i<=n1;i++){
//        s=s*i
//     }
//     console.log(s);
// }
// fact(5)

// function with argument and return type

// function fact(n){
//     fact=1
//     for(;n>0;n--){
//         fact*=n
//     }
//     return fact
// }
// console.log(fact(6));

// PRIME 

// function prime(n){
//     for(i=2;i<n;i++){
//         if(n%i==0){
//             break
//         }

//     }
//     return n==i?"prime":"not prime"
// }
// console.log(prime(5));
// console.log(prime(6));

// arrow function

// function name=argument1=>{
    // code

// }

// function name=()=>{
    // code

// }

// function name=(argmnt1,argmnt2,...)=>{
    // code
// }

// adding function in arrow function
// adding=()=>{
//     num1=2
//     num2=6
//     sum=num1+num2
//     console.log(sum);
// }
// adding()

// adding=(num1,num2)=>{
//     sum=num1+num2
//     console.log(sum);
// }

// adding(2,4)

// RETURN type- sum bw ranges -prime- arrow function 

// sumprime=(n1,n2)=>{
//     sum=0
// for(;n1<=n2;n1++){
//     for(j=2;j<n1;j++){
//         if(n1%j==0){
//             break
//         }
//     }
//         if(j==n1){
//             sum+=n1
//         }
//     }
//         return sum
    
//     }




// console.log(sumprime(5,10));


// fibonacci series

// fibonacci=nterms=>{
//     n1=0
//     n2=1
//     for(;nterms>0;nterms--){
//         console.log(n1);
//         n3=n1+n2
//         n1=n2
//         n2=n3
//     }

//     }
// fibonacci(10)