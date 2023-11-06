import Lotto from "./Lotto";
import { Random } from "@woowacourse/mission-utils";
class LottoMachine {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#validateLottoNumbers(winningNumbers);
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  #validateLottoNumbers(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복 되지않는 수가 6개여야 합니다.");
    }
  }
  #validateBonusNumber(number) {}

  // 구매 금액을 받고 로또를 생성한다.
  createLottos(amount) {
    const n = amount / 1000;
    const lottos = [];
    for (let i = 0; i < n; i++) {
      const nums = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(new Lotto(nums));
    }
    return lottos;
  }

  // Lottos 는 Lotto 인스턴스 배열
  getLottoResult(Lottos) {
    const results = [];
    Lottos.forEach((Lotto) => {
      results.push(getResult(Lotto));
    });
    return results;
  }

  getResult(Lotto) {
    const result = Lotto.filter((num) => this.#winningNumbers.has(num)).length;
    switch (result) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (Lotto.includes(this.#bonusNumber)) {
          return 2;
        }
        return 3;
      case 6:
        return 1;
    }
  }
}

export default LottoMachine;
