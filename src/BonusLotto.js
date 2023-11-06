import Lotto from "./Lotto.js";
class BonusLotto {
  #bonusNumbers;

  constructor(numbers, bonusNumbers) {
    this.#validate(bonusNumbers, numbers);
    this.#bonusNumbers = bonusNumbers;
  }

  #validate(numbers, bonusNumbers) {
    if (Number.isNaN(bonusNumbers)) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (numbers.some((number) => number === bonusNumbers)) {
      throw new Error(
        "[ERROR] 보너스 로또 번호는 로또 번호와 중복되지 않아야 합니다."
      );
    }
    if (bonusNumbers < 1 || bonusNumbers > 45) {
      throw new Error("[ERROR] 보너스 로또 번호는 1~45 사이여야 합니다.");
    }

    return true;
  }
  get getBonusNumbers() {
    return this.#bonusNumbers;
  }
}

export default BonusLotto;
