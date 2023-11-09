class BonusNumError {
  #winningNum;
  #bonusNum;

  constructor(WINNING_NUM, BONUS_NUM) {
    this.#winningNum = WINNING_NUM;
    this.#bonusNum = BONUS_NUM;
    this.validBonusNum();
  }

  #bonusNumNotExist() {
    if (this.#bonusNum.length === 0) {
      throw new Error('[ERROR] 보너스 번호를 입력해 주세요.');
    }
  }

  #bonusNumNotNum() {
    if (Number.isNaN(Number(this.#bonusNum))) {
      throw new Error('[ERROR] 보너스 번호를 숫자로 입력해 주세요.');
    }
  }

  #bonusNumOverRange() {
    if (Number(this.#bonusNum) < 1 || Number(this.#bonusNum) > 45) {
      throw new Error('[ERROR] 보너스 번호를 1~45 사이의 값으로 입력해 주세요.');
    }
  }

  #bonusNumDuplication() {
    if (this.#winningNum.includes(this.#bonusNum)) {
      throw new Error('[ERROR] 보너스 번호가 당첨 번호와 중복되지 않도록 입력해 주세요.');
    }
  }

  validBonusNum() {
    this.#bonusNumNotExist();
    this.#bonusNumNotNum();
    this.#bonusNumOverRange();
    this.#bonusNumDuplication();
  }
}

export default BonusNumError;
