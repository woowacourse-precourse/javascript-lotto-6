const winningNumbersError = (winningNumbers) => {
  if (winningNumbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
  if (winningNumbers[0] < 1 || winningNumbers[5] > 45) {
    throw new Error("[ERROR] 로또 번호는 1~45 사이여야 합니다.");
  }
  const filterArray = new Set(winningNumbers);
  if (winningNumbers.length != filterArray.size) {
    throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  }
};

export default winningNumbersError;
