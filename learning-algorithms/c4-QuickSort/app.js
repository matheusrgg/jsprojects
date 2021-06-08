//1 tentativa_loop_sum.js
function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  console.log(sum([1, 2, 3, 4])); // 10

//2 tentativa -loop_sum_reduce_version.js
function sumReduce(array) {
    return array.reduce(function(curr, prev) {
      return curr + prev;
    });
  }
  
  console.log(sumReduce([1, 2, 3, 4])); // 10

//3 tentativa - recursive sum
function sumRecursive(array) {
    if (array.length == 1) return array[0];
    return array[0] + sumRecursive(array.slice(1));
  }
  
  console.log(sumRecursive([1, 2, 3, 4])); // 10