export const generateWinningNumbers = (winnigNumbersString) => {
  const parsedWinningNumbersString = winnigNumbersString.split(',');
  const winningNumbers = parsedWinningNumbersString.map((numberString) =>
    Number(numberString),
  );
  return winningNumbers;
};

export const generateBonusNumber = (bonusNumberString) =>
  Number(bonusNumberString);
