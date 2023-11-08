class Result {
  resultCount;

  constructor(resultCount) {
    this.resultCount = resultCount;
  }
  addCount(idx) {
    this.resultCount[idx] += 1;
  }
}

const calculateResult = (lottos, prizeNumber) => {
  let result = new Result([0, 0, 0, 0, 0]);

  for (let i = 0; i < lottos.lottosNums.length; i++) {
    let count = 0;
    for (let j = 0; j < prizeNumber.prizeNumberArr.length; j++) {
      if (lottos.lottosNums[i].includes(Number(prizeNumberArr[j]))) {
        count += 1;
      }
    }
    if (count === 3) {
      result.resultCount[0] += 1;
    }
    if (count === 4) {
      result.resultCount[1] += 1;
    }
    if (count === 5) {
      if (lottos.lottosNums[i].includes(prizeNumber.bonusNumber)) {
        result.resultCount[3] += 1;
      } else {
        result.resultCount[2] += 1;
      }
    }
    if (count === 6) {
      result.resultCount[4] += 1;
    }
  }
  return result;
};
