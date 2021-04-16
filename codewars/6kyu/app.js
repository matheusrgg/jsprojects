// /https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  // TODO

  `${nome}` + " " + "likes this"

  if (names.length === 0) {
    console.log("no one likes this");
  } else {
    for (var name in names) {
      if (name.length === 0) {
        console.log("não tem nada");
      } else {
        console.log(names[name] + " " + "likes this")
      }
    }
  }
}


likes(['Max', 'John', 'Mark'])

// likes([])