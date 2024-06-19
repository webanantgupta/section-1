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
console.log("-------------------");
console.log(price.slice(1,-2));
console.log(price.slice(-2));




// adding new elements
//push to add element in last of array
movies.push("The Dark Knight");
console.log(movies);


//to add element in first place of array
movies.unshift("The Godfather");
console.log(movies);


// removing elements 
movies.pop();          // remove last element in array
movies.shift();       // remove first element in array
console.log(movies);



// movies.splice(3,2);  // it will remove 2 elements starting from index 3 

//movies.splice(3,2, "Batman","Superman");        // it will also add the elements 


movies.splice(3,0, "Batman","Superman");        // it will automatically add the elements in the given index
console.log(movies);
