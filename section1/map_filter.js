// map 
const num = [2,4,3,5,6,12];

const newNum = num.map( (n) => { return n**2});
console.log(newNum);


const arr = ["asd" , "dfg" , "wewesd" , "eweess"];

const newArr = arr.map( (n) => { return n.length});
console.log(newArr);


const price = ["₹234.762/-", "₹264.22/-", "₹90.1/-", "₹123.212/-"];
 const newPrice = price.map( (n) => { return parseInt(n.slice(1,-2))});
 console.log(newPrice);

 // parseInt string to number


 // filter
const evenNum = num.filter( (n) => { return n%2 === 0});
console.log(evenNum);


const newArr1 = arr.filter( (n) => { return n.length > 5  });
console.log(newArr1);


const price1 = [ 599, 220, 199, 350, 3200, 2830, 1980];

const newPrice1 = price1.filter( (n) => { return n> 500 && n < 3000});
console.log(newPrice1);