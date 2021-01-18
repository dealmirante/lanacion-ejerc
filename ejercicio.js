const ejercicio = (arrInt) => {
  let arrResult = [];

  arrInt.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      arrResult.push("FizzBuzz");
    } else if (element % 3 === 0 || element.toString().includes('3')) {
      arrResult.push("Fizz");
    } else if (element % 5 === 0 || element.toString().includes('5')) {
      arrResult.push("Buzz");
    }
  });

  return arrResult;
};

// Prueba basica

try {
  console.log(ejercicio([3, 13, 9, 5, 15, 25, 311, 511]));
} catch (e) {
  console.log(e);
}
