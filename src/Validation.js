const Validation = {
  isNumber: (number) => {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
  },

  isNonDuplicatedNumber: (numbers) => {
    const nonDuplicatedNumbers = new Set(numbers);
    if (nonDuplicatedNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 숫자는 입력할 수 없습니다.');
    }
  },

  isNonDuplicatedBonusNumber: (bonusNumber, winningNumbers) => {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(
        '[ERROR] 당첨 번호와 중복되는 숫자는 입력할 수 없습니다.',
      );
    }
  },

  isNumberInRange: (number) => {
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 1이상 45이하의 숫자만 입력할 수 있습니다.');
    }
  },

  isValidWinningNumbersLength: (numbers) => {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  },

  isValidBonusNumberLength: (number) => {
    const splitedNumber = number.split(',');
    if (splitedNumber.length !== 1) {
      throw new Error('[ERROR] 보너스 번호는 1개여야 합니다.');
    }
  },

  isDividedIntoUnitPrice: (cost) => {
    if (cost % 1000 !== 0 || cost === 0) {
      throw new Error(
        '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.',
      );
    }
  },
};

export default Validation;
