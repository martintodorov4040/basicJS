
function string(arguments){
let result = "";
for(let i = 0; i < arguments.length; i++){
result += arguments[i];

}
return result;
}
let result = string ([`Hello there students of SEDC !`]);
console.log(result);