function pickIt(arr) {
  var odd = [], even = [];
  //coding here

  for (var i = 0; i < arr.length; i++) {
    number = arr[i]
    if (number % 2 == 1) {
      odd.push(number)
    } else {
      even.push(number)
    }
  }


}


pickIt([1, 2, 3, 4, 5, 5])