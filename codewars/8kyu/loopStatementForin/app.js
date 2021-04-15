function giveMeFive(obj) {
  //coding here
  const arrayKey = [];
  for (var key in obj) {
    if (obj[key].length == 5) {

      arrayKey.push(obj[key])
    }
    if (key.length == 5) {
      arrayKey.push(key)
    }

  }
  console.log(arrayKey)
}

giveMeFive({ Our: "earth", is: "a", beautyfy: "world" })







//---- fase 01
//You need to the traverse the obj, if the length of the object key
//equals to 5, then push the key value to the arrayKey
//Additionally push the value to the array as well, 
//if the length of the value is equal to 5.


//---- fase 02

//Return the five after works finished.


//---- fase 03

//You should use for..in in your code, otherwise,
//your solution may not 
//pass this kata. Don't learn bad habits from those lazy guys ;-)