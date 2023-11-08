function counting(lotto, prizeNumberArr) {
  let count = 0;
  for (let j = 0; j < prizeNumberArr.length; j++) {
    if (lotto.returnNumber().includes(Number(prizeNumberArr[j]))) {
      count += 1;
    }
  }
  return count;
}

export default counting;
