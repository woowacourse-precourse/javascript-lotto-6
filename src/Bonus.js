class Bonus {
  #bonus;

  constructor(bonus, winning) {
    this.validate(bonus, winning);
    this.#bonus = bonus;
  }

  validate(bonus, winning) {
    this.validateType(bonus);
    this.validateRange(bonus);
    this.validateDuplicate(bonus, winning);
  }

  validateType(bonus) {
    if (isNaN(bonus)) throw new Error('[ERROR] 보너스 번호는 숫자로 이루어져야 합니다.');
  }

  validateRange(bonus) {
    if (bonus < 1 || bonus > 45)
      throw new Error('[ERROR] 보너스 번호는 1과 45 사이 숫자여야 합니다.');
  }

  validateDuplicate(bonus, winning) {
    if (winning.includes(bonus))
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.');
  }

  getBonusNumber() {
    return this.#bonus;
  }
}

export default Bonus;
