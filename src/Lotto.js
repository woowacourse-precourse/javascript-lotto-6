import { Random } from "@woowacourse/mission-utils";
import { PICK_NUMBERS, ONE_LOTTO_PRICE } from "./constants/lottoNumbers.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  makeLotto(money) {
    const howManyLotto = money / ONE_LOTTO_PRICE;
    const lottos = [];

    for (let i = 0; i < howManyLotto; i++) {
      lottos.push(
        Random.pickUniqueNumbersInRange(
          PICK_NUMBERS.START_RANGE,
          PICK_NUMBERS.END_RANGE,
          PICK_NUMBERS.HOW_MANY
        )
      );
    }

    return lottos;
  }
}

// const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

// lotto.makeLotto(3000);

export default Lotto;
