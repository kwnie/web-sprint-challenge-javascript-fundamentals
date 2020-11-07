// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//Nested function and internal are located in the same function myFunction which means they have the same scope. When we are inside nested function we can reach outside of it to reach internal.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num){
  let numArray = [num];
  numArray.forEach(e => {
    if(e > 0){
      numArray.push(num - 1);
    };
  });
  
  numArray.reduce((total, accumulator) => {
    total + accumulator
  }, 0)
};

console.log(summation(4))
