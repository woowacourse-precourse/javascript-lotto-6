const items = [1, 2, 3, 4, 5, 6];
const bouns = 7;
const result = [3, 8, 22, 32, 35, 42];
let plus = 0;
const bounsResult = 0;
function compare(a, b) {
  b.forEach((element) => {
    result.indexOf(element) > -1 ? (plus += 1) : undefined;
    result.indexOf(bounsResult) > -1 ? (bounsResult += 1) : undefined;
  });
}
compare(result, items);
console.log(plus, bounsResult);
