// for loop
for(let i = 1; i<=10; i++){
    console.log(i);
}

for(let i=30; i<=100; i++){
    if(i % 7 === 0)
    console.log(i);
}

// write a programme to print all numbers divisible bt 7 & 11 in range 240 & 370

for(let i=240; i<=370; i++){
    if(i % 7 === 0 && i % 11 === 0)
        console.log(i);
}



// while loop
 let num = 10;
 while(num < 20){
    console.log(num);
    num+=2;
 }


 // do while 
 let a = 15;
 do{
   console.log(a);
 }while(a<10);


 // for each loop

 let nums = [34,56,44,12,76,88];
 for(let n of nums){
    console.log(n);
 }