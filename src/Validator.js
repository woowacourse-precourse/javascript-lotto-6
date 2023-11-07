const TEXT = {
  ERR_BET: '[ERROR] 올바른 수를 입력해주세요.',
  ERR_BET_DOMAIN: '[ERROR] 0보다 큰 1000의 배수를 입력해주세요.',
};

class Validator {
  static validateBet(bet) {
    if (isNaN(bet)) {
      throw new Error(TEXT.ERR_BET);
    }

    if (0 >= bet || bet % 1000 !== 0) {
      throw new Error(TEXT.ERR_BET_DOMAIN);
    }
  }
}

export default Validator;
