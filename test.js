const { shortden } = require("./dist/index");

const address =
  "lnbc2500n1p0k8z7xpp5v4xyzacds5s5s5sd13s68dsd3s2d8sd3grgrg6fdhfdfddff26d";

console.log(shortden(address, 10, 2, 3));

const number = "+2290196908483";

console.log(number.length);

console.log(shortden(number, 14, 8, 0, "X"));
