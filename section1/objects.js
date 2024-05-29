const student = {
  name: "Anant",
  rollno: 20145,
  email: "snsd@gmail.com",
};
console.log(student);
console.log(student.name);
console.log(student["rollno"]); // special case

// to add new field in object
student.address = "lucknow";
console.log(student);

// to update existing field

student.rollno = 24562;
console.log(student);
console.log(student.rollno);

//predefined function
console.log(Object.keys(student));
console.log(Object.values(student));

// Example
const smartPhone = {
  brand: "samsung",
  model: "S23",
  price: 79000,
  color: ["black", "grey", "white"], // array
};
console.log(smartPhone);
console.log(smartPhone.price);
console.log(smartPhone.color);
console.log(smartPhone.color[1]);
smartPhone.color.push("red");
console.log(smartPhone.color);

// object inside an array
const smartPhoneList = [
  {
    brand: "Samsung",
    model: "S23",
    price: 79000,
    color: ["black", "grey"],
  },
  {
    brand: "POCO",
    model: "A21",
    price: 10000,
    color: ["black", "grey", "pink"],
  },
  {
    brand: "One+",
    model: "O++",
    price: 12000,
    color: ["black", "grey", "solid blue"],
  },
  {
    brand: "Moto",
    model: "M43",
    price: 20000,
    color: ["black", "grey", "gold"],
  },
  {
    brand: "Nokia",
    model: "O2+",
    price: 12000,
    color: ["black", "grey", "solid blue"],
  },
  {
    brand: "Samsung",
    model: "O++",
    price: 12000,
    color: ["black", "grey", "solid blue"],
  },
];

console.log(smartPhoneList[0].price);
console.log(smartPhoneList[0].brand.length);
smartPhoneList[0].color.push("blue");
console.log(smartPhoneList);

// print price of 4TH smartPhone
console.log(smartPhoneList[3].price);



// filter smart phone with price lower than 30000
console.log("-------");
const budget = smartPhoneList.filter( ( n) => { return n.price < 30000})
console.log(budget);


// print smart phone with brand Samsung
console.log("-------"); 
const br = smartPhoneList.filter( (n) => { return n.brand === "Samsung"});
console.log(br);


// print smart phone with color solid blue
console.log("-------");
const colour = smartPhoneList.filter( (n) => { return n.color.includes("solid blue")})
console.log(colour);


console.log(["a","b","c"].includes("d"));