function checkWinning(winningNumber, inputBonusNumber, lottoNumber) {
  let count = 0;
  winningNumber.number.forEach((e) => {
    if (lottoNumber.includes(Number(e))) {
      count += 1;
    }
  });
  if (count === 6) {
    return 4;
  }
  if (lottoNumber.includes(Number(inputBonusNumber))) {
    count += 1;
  }
  return count - 3;
}

export default checkWinning;
