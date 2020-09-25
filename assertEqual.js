const assertEqual = function(actual, expected) {

  const errorMsg = `Assertion Failed: ${actual} !== ${expected}`;
  const goodMsg = `Assertion Success: ${actual} === ${expected}`;

  if (actual === expected) {
    console.assert(actual === expected, console.log(goodMsg));
  } else {
    console.assert(actual !== expected, console.log(errorMsg))
  }

};

assertEqual(1, 1);
assertEqual("lighthouse", "Boot");
