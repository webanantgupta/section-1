num = 34;
if(num % 2 ==0){
    console.log("even");
    
    x = "hdhdhd";
    let y = "good"; // it is in the local scope
    const pi= 3.141559;
    // pi = 3;
}
else{
    console.log("odd");
}
console.log(x);
// console.log(y);
// every thing is global

console.log(1 == "1");
console.log(1 === "1");
console.log(1 + "1");
console.log( null + "34");



//to take power of any number
console.log(2**4);
console.log(Math.pow(2,6));


//WAP to find sum of all numbers in range of 50 - 200.
sum = 0;
for(let i=50; i<=100; i++){

        sum = sum + i;
}
console.log(sum);

// WAP to find sum of even number in range of 0 - 100.

sum = 0;
for(let i=0; i<=100; i++){
  
    if(i % 2 === 0){
        sum = sum + i;
    }
}
console.log(sum);





// WAP to check if a number is perfect square.


let num = 26;
let sqrt = Math.sqrt(num);
let isPerfectSquare = Number.isInteger(sqrt);
if (isPerfectSquare) {
  console.log(num + " is a perfect square.");
} else {
  console.log(num + " is not a perfect square.");
}



// WAP to check if a number is prime.


let num1 = 18;
let a = 0;

for(i=0; i<=num1; i++){
    if(num1 % i === 0){
      a++;
    }
    
}
if(a == 2){
  console.log("It is prime");
} else {
  console.log("It is not prime");
}