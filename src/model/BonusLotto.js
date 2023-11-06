class BonusLotto {
  #bonus;

  constructor(input) {
    this.checkValid(input);
  }

  checkValid(input) {
    const bonusNum = parseInt(input);
    
    if (isNaN(input)) {
      throw new Error('[ERROR] 숫자를 입력해주세요');
    }
    if (bonusNum < 0 || bonusNum > 45) {
      throw new Error('[ERROR] 1과 45 중에서 골라주세요.');
    }
  }

  getBonusNum() {
    return this.#bonus;
  }
}

export default BonusLotto;
