const ERR = {
  BET_DOMAIN: '[ERROR] 0보다 큰 1000의 배수를 입력해주세요.',

  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  NAN: '[ERROR] 올바른 수를 입력해주세요.',
  DUPLICATE: '[ERROR] 로또 번호에 중복된 수가 있어선 안됩니다.',
  RANGE: '[ERROR] 로또 번호는 1 이상 45 이하의 수여야 합니다.',
};

class Validator {
  static validateBet(bet) {
    if (isNaN(bet)) {
      throw new Error(ERR.NAN);
    }

    if (0 >= bet || bet % 1000 !== 0) {
      throw new Error(ERR.BET_DOMAIN);
    }
  }

  static validateNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERR.NAN);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERR.RANGE);
    }
  }

  static validateNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERR.LENGTH);
    }

    for (const number of numbers) {
      this.validateNumber(number);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERR.DUPLICATE);
    }
  }

  static validateBonus(win, bonus) {
    this.validateNumber(bonus);

    if (win.some((number) => number == bonus)) {
      throw new Error(ERR.DUPLICATE);
    }
  }
}

export default Validator;
