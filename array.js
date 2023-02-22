// // array

// a=[1,2,3,4,5]
// console.log(a);
// console.log(typeof(a));

// // homo/hetro  -- hetro
// // indexing   --supports indexing  
// // duplication  -- supports duplication
// // nesting  --  supports nesting
// // order   -- it keeps order
// // mutable


// a1=[1,2,3,4,5,"python",true,[1,2,3,4,5],100,50,200,150]
// console.log(a1);
// console.log(a1[2]);
// a1.push(1000,2000,3000)
// console.log(a1);

// a1[2]=20000
// a1.pop()
// a1.pop()
// console.log(a1);


// a2=[1,2,3,4,5,6]
// for(i in a2){
//     console.log(a[i]);

// }

// a3=[1,4,8,5,4]
// a4=[]
// for(i of a3){
//     a4.push(i**3)
// }
// console.log(a4);

// marks max min total

// m=[23,45,67,43,56,98,12,43]
// s=m[0]
// for(i of m){
//     if(s<i){
//         s=i
//     }
// }
// console.log(s);

// min
// min=m[0]
// for(i of m){
    
//     if(i<min){
//         min=i
//     }
// }
// console.log(min);

// 
// middle element
// a=Math.floor(m.length/2)
// console.log(m[a]);

// a=[1,3,2,4,5,10,15,14]
// a.sort((n1,n2)=>(n1-n2))
// console.log(a);

// a.sort((n1,n2)=>(n2-n1))
// console.log(a);

// search 

// a=[1,2,3,4,5,6,7,8,9,10]
// e=6
// flag=0
// for(i of a){
//     if(i==6){
//         flag=1
//         break
//     }
// }
// if(flag==1){
//     console.log("present");
// }
// else{
//     console.log("not present");
// }

// binary search
a=[1,10,4,4,5,6,17,8]
// sort
a.sort((n1,n2)=>n1-n2)
e=3
flag=0
lower=0
upper=a.length-1
count=0
while(lower<=upper){
    count++
    midindex=Math.floor((lower+upper)/2)
    if(e==a[midindex]){
        flag=1
        break
    }
    else if(e>a[midindex]){
        lower=midindex+1
    }
    else if(e<a[midindex]){
        upper=midindex-1
    }
}
flag==0?console.log("not found"):console.log("found");
console.log(count);
