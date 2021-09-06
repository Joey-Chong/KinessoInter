function pyramid(x) {
  let result = "";
  let temp = x;
  for (let i = 0; i < temp; i++) {
    for (let j = 0; j < x-1; j++) {
      result += " "
    }
    result += "*";

    for (let k = 0; k < i; k++) {
      result += " *";
    }

    console.log(result);
    result = "";
    x = x-1;
  }
}

pyramid(4);