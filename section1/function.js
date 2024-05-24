
// type 1 of function
function add(a,b){    // var only work is function
     var c=a+b;
    console.log(a+b);
}

add(5,6);
//console.log(c);



// type 2 of function
const getAvg = function(m1,m2,m3){
    const avg = (m1+m2+m3)/3;
    // console.log(avg);
    return avg;
}


const result = getAvg(23,54,67);
console.log(result);



// arrow function
 
const factorial = (n) =>{
    fact = 1;
     for(let i = 2 ; i<=n; i++){
        fact=fact*i;
     }
     return fact;
}

const ans = factorial(5);
console.log(ans);