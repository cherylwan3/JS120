// anonoymous function

let anonoymous = function() {};

let notAnonoymous = function NamedFunc() {};


// passing functions to functions
function logNum(num) {
  console.log(num);
}

[1,2,3].forEach(logNum); 
// 1
// 2
// 3


[1,2,3].forEach(function logNum(num) {
  console.log(num);
});

[1,2,3].forEach(num => {
  console.log(num);
});
