import checkWinning from "./checkWinning.js";

function calcResult(winningNumber, inputBonusNumber, lottoNumbers) {
  const resultArray = [0, 0, 0, 0, 0];
  lottoNumbers.forEach((lottoNumber) => {
    const result = checkWinning(winningNumber, inputBonusNumber, lottoNumber);
    if (result >= 0) {
      resultArray[result] += 1;
    }
  });
  return resultArray;
}

export default calcResult;
