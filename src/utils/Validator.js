export const validators = {
  validateBonusNum(userInput, winningNumber) {
    winningNumber.map((item, idx) => {
      if (item === userInput) {
        throw new Error('[ERROR] 당첨 번호 중 중복된 번호가 있습니다.');
      }
    });
  },
};
