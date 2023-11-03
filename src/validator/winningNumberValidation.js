export const winningNumberLength = (winningNumber) => {
  const winningNumberArray = winningNumber.split(',');
  if (winningNumberArray.length !== 6) {
    throw new Error('6개의 숫자를 입력해 주세요.');
  }
};

