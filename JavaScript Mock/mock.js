// Promises Example................................................................................
let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});
countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });

//Closure Example ..................................................................................
function outer() {
  const outerVar = "Hi i am outerVar";
  function inner() {
    const innerVar = "Hi i am innerVar";
    console.log(outerVar);
    console.log(innerVar);
  }
  return inner;
}

const innerFn = outer();
innerFn();
// Hi i am outerVar
// Hi i am innerVar

//CallBack Example ....................................................................................
function sum(a, b) {
  console.log(a + b);
}
function operation(val1, val2, callback) {
  callback(val1, val2);
}
operation(6, 5, sum);

// async/await Example ...............................................................................
// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 4000);
});

async function asyncFunc() {
  try {
    // wait until the promise resolves
    let result = await promise;

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// calling the async function
asyncFunc(); // Promise resolved

// Event Loop Example ...............................................................................
console.log("Start");
setTimeout(function delayThis() {
  console.log("This will be delayed");
}, 5000);
console.log("End");





// Map Reduce and Filter 
// Map() The map() method is used for creating a new array from an existing one, applying 
// a function to each one of the elements of the first array var arr = [1, 2, 3, 4, 5, 6, 7];
var arr = [1, 2, 3, 4, 5, 6, 7];
var newArr = arr.map((el) => {
  return el * 2;
});

console.log(newArr); //2,4,3,8,10,12,14




// Filter() The filter() method creates a new array filled with all array elements that 
// pass a test implemented by the function.
var arr = [1, 2, 3, 4, 5, 6, 7];
var newFilter = arr.filter((el) => {
  return el > 3;
});
console.log(newFilter);  //[1, 2, 3, 4]



var array = [36, 25, 6, 15];
array.reduce(function(first, second) {
  return first + second;
}, 0); // 36 + 25 + 6 + 15 = 82
