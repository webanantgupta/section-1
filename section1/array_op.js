const nums = [23,87,34,56,33,10];

// for(let i = 0; i<nums.length; i++){
//     console.log(nums[i]**2);
// }

// forEach loop
console.log("------");
for(let k of nums ){
   console.log(k**2);
}



// forEach function
console.log("------");
nums.forEach((n) => {
     console.log(n**2);
})




// question  --  Add square of all elements to new array

const newArr = [];


for(let a of nums){
    newArr.push(a**2);
}
console.log(newArr);


