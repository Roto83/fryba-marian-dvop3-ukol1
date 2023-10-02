"use strict";

let arr = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.reverse();
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.sort();
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
let car = {
  Brand: "BMW",
  Model: "M3",
  Year: "2003"
};
console.log(car.Brand);
console.log(car.Model);
console.log(car.Year);
let generate = Math.floor(Math.random() * 555);
console.log("N\xE1hodn\xE9 \u010D\xEDslo je: ".concat(generate));