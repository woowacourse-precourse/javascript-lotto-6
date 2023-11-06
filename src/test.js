const items = [1, 2, 3, 4, 5, 6];
const bouns = 7;
const result = [3, 8, 22, 32, 35, 42];
let plus = 0;
let bounsResult = 0;
function compare(a, b) {
  let matchingNumber = 0;
  let matchingBonus = 0;
  b.forEach((item) => {
    if (result.includes(item)) {
      matchingNumber += 1;
    }
  });
  if (result.includes(bounsResult)) {
    matchingBonus += 1;
  }
  return [matchingNumber, matchingBonus];
}

[plus, bounsResult] = compare(result, items);
console.log(plus, bounsResult);
