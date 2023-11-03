import WinningValid from "../utils/WinningValid.js";
import BonusInput from "../view/input/BonusInput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const valid = new WinningValid();
    valid.winningIsValid(numbers);
  }
  async bonus() {
    const bonus = new BonusInput();
    const bonusNumber = await bonus.number();
    return [this.#numbers, bonusNumber];
  }
  // TODO: 추가 기능 구현
}

export default Lotto;

// 당첨 번호를 여기로 보낸 다음에
// 여기서 보너스 번호를 입력 받는다.
// 그 이후에 당첨 번호와 보너스 번호를 밖으로 내보낸다.
