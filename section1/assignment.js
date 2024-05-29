//Create an array of names and add all names longer than 5 characters in a new array.
const arr1 = ["Anant","Akib", "Suryansh","Afroj Ansari","Raju"];
let arr2 =[];
for( let i=0; i<=5; i++){
    if(arr1[i.length] >=5){
        arr2[i] = arr1[i] + 1;
    }
}
console.log(arr2);



arr1.forEach( (n) => {
    if(n.length > 5){
      arr2.push(n);
    }
})





//  Create a function that takes a range and returns sum of all numbers.
  function sum(){
   let s=0;
   for(let i=0; i<=100; i++){
    s = s + i;
   }
   console.log(s);;
  }
  sum();



  // Remove all odd numbers from an array of number.
  ar = [1,2,3,4,55,67,45,78,89];

  for(let i=0; i<=8;i++){
    if(ar[i] % 2 != 0){
      ar.pop();
    }
  }
  console.log(ar);