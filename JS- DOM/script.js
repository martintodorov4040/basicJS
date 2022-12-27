/*
const element = document.querySelectorAll("p");
console.log(element)
 for(let i = 0; i < element.length; i++){
    element[i].style.color = "red";
    element[i].textContent = "New  text";
 }
 const headers = document.querySelectorAll("h1, h2, h3");
 for(i = 0; i<headers.length; i++){
    headers[i].style.color = "green";
    headers[i].textContent = "New Headers"
 }

*/
let sum = 0;
let arr =  [1, 2, 3, 4, 5];
console.log(arr)
for(i = 0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum)
let print = document.getElementById("one"). innerHTML = arr;
let sumA = document.getElementById("two"). innerHTML = sum;



