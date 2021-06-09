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

//04 recursive_count.js

function count(array) {
  if (array.length === 0) return 0;
  return 1 + count(array.slice(1));
}

console.log(count([0, 1, 2, 3, 4, 5])); // 6


  //05 recursive Max
  function max(array) {
    if (array.length === 2) return array[0] > array[1] ? array[0] : array[1];
    let sub_max = max(array.slice(1));
    return array[0] > sub_max ? array[0] : sub_max;
  }
  
  /**
   * Calculate the largest number
   * This solution works for arrays of any length
   * @param {Array} array Array of numbers
   * @param {number} max Maximum value
   * @returns {number} The argest number
   */
  function alternativeSolutionMax(array, max = 0) {
    return array.length === 0
      ? max
      : alternativeSolutionMax(array.slice(1), array[0] > max ? array[0] : max);
  }
  
  console.log(max([1, 5, 10, 25, 16, 1])); // 25
  console.log(alternativeSolutionMax([1, 5, 10, 25, 16, 1])); // 25