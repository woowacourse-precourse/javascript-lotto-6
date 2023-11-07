async function mathcedCount(valueOne, valueTwo, countNumbers) {
  if (valueOne === 3) countNumbers.three++;
  if (valueOne === 4) countNumbers.four++;
  if (valueOne === 5 && !(valueTwo === true)) countNumbers.five++;
  if (valueOne === 5 && valueTwo === true) countNumbers.fiveAndBonus++;
  if (valueOne === 6) countNumbers.six++;
}

export default mathcedCount;
