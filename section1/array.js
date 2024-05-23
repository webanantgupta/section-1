//array

const myArr = [322, "jkjk", true, console.log("wfwrf"), "2222", console.log()];
console.log(myArr);

const movies = ["Tere Naam", "Animal", "PK", "RRR", "Deja Vu", "Shaitaan"];
console.log(movies.length);         //also work with strings


// indexing 
// does not work with negative index
console.log(movies[4]);                 //also work with strings
console.log(movies.at(3));


// to replace an element in array
movies[4] = "The Shawshank Redemtion";
console.log(movies);


//negative indexing
console.log(movies.at(-3));


//slicing
// can also use negative indexing
console.log("----------");
console.log(movies.slice(1));
console.log(movies.slice(1,4));              //also work with strings
console.log(movies.slice(1));


// question
const price = "₹536.872/-";
console.log(price.slice(1));
console.log(price.slice(2));
console.log(price.slice(1,-2));
console.log(price.slice(-2));