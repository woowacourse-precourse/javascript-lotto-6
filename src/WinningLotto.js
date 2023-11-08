import Lotto from "./Lotto";

class WinningLotto extends Lotto {
  #bonus;

  constructor(numbers) {
    super(numbers);
  }

  /**
   * 보너스 번호가 로또 번호와 중복되지 않는지 검증하는 메소드
   * @param {int} number
   */
  #validate_bonus(number) {
    if (this.is_include(number)) {
      throw new Error("[ERROR] 로또 번호는 서로 중복되지 않아야 합니다.");
    }
  }

  /**
   * 검증 과정을 거쳐 전달받은 보너스 번호를 설정하는 메소드
   * @param {int} number
   */
  set_bonus(number) {
    this.#validate_bonus(number);
    this.#bonus = number;
  }

  /**
   * @return {int} bonus_number
   */
  get_bonus() {
    return this.#bonus;
  }
}

export default WinningLotto;
