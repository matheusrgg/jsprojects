function grabDoll(dolls) {
  var bag = [];
  //coding here

  for (var i = 0; i < dolls.length; i++) {
    numeroBag = bag.length
    console.log(numeroBag);
    if (bag.length > 2) break
    var doll = dolls[i]
    if (doll === 'Hello Kitty' && doll === "Barbie doll") {
      bag.push(doll)
      continue
    }

    console.log(bag);

  }


  grabDoll(["Hello Kitty", "Barbie doll", "Que Bosta", "Barbie doll", "Barbie doll"])

  //fase 01

  //You need traverse```dolls``` by using```for``` loop.If element is  "Hello Kitty" or "Barbie doll",
  // you should push it to a```bag```(bag is an array, I've defined in the function); if it's other strings,
  //   we should use```continue``` skip it.

  //fase 02

  //When the```bag``` has three element, ```bag``` is full.You should use```break``` jump out the loop;
  //If```bag``` is not full, you should traverse```dolls``` until the last element.

  //fase03

  //Return the```bag``` after for loop finished.

  //OBS
  ///You should use```for```, ```break``` and```continue``` in your code.otherwise, your solution may not pass this kata.



  ------------------------------

    melhor resposta

  function grabDoll(dolls) {
    var bag = [];

    for (var i = 0; i < dolls.length; i++) {

      if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
        bag.push(dolls[i]);
      else
        continue;

      if (bag.length === 3) break;
    }

    return bag;
  }