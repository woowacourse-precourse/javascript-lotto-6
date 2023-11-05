export default class InputValidator {
  static validatePurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error('구입 금액은 1000원 단위로 입력해야 합니다.');
    }
  }

  static validateWinningNumbers(winningNumbersString) {
    const winningNumbers = winningNumbersString.split(',').map((num) => {
      const trimmedNum = num.trim();
      if (trimmedNum === '') {
        throw new Error('모든 당첨 번호를 쉼표(,)로 구분하여 입력해야 합니다.');
      }
      return parseInt(trimmedNum, 10);
    });

    if (winningNumbers.length !== 6) {
      throw new Error('당첨 번호는 쉼표(,)로 구분된 6개의 숫자여야 합니다.');
    }

    if (winningNumbers.some((num) => Number.isNaN(num) || num < 1 || num > 45)) {
      throw new Error('당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    if (new Set(winningNumbers).size !== 6) {
      throw new Error('당첨 번호에 중복된 숫자가 있습니다.');
    }
  }

  static validateBonusNumber(bonusNumberString, winningNumbersString) {
    const bonusNumber = parseInt(bonusNumberString.trim(), 10);
    const winningNumbers = winningNumbersString.split(',').map((num) => parseInt(num.trim(), 10));
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }
}
