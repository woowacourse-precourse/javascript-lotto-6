function calcReturn(input, resultArray) {
  let output = 0;
  const returns = [5000, 50000, 1500000, 30000000, 2000000000];
  resultArray.forEach((e, index) => {
    output += e * returns[index];
  });
  let rate = (output / (input * 1000)) * 100;
  rate = Math.round(rate * 10) / 10;
  return rate;
}

export default calcReturn;
