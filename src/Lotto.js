import { Console } from "@woowacourse/mission-utils";
import { getLottoNumbers } from "./function/getLottoNumbers.js";
import { calculateLottoCount } from "./function/util/calculateLottoCount.js";

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

  getWinNumberCount(lottos, bonusNumber) {
    let resultCount = [];

    lottos.forEach((lottoNums) => {
      let count = 0;
      lottoNums.forEach((el, index) => {
        if (el === this.#numbers[index]) {
          count += 1;
        }

        if (el === bonusNumber) {
          count += 1;
        }
      });

      resultCount.push(count);
    });

    return resultCount;
  }

  static verifyAmount = (money) => {
    if (isNaN(money)) {
      throw new Error("[ERROR] 유효한 금액이 아닙니다. 다시 입력 해주세요");
    }

    if (money % 1000 !== 0) {
      throw new Error(
        "[ERROR] 로또는 1000원 단위로 구입이 가능합니다. 금액을 다시 입력해주세요"
      );
    }

    return money;
  };

  static buy(money) {
    this.verifyAmount(money);
    const lottoCount = calculateLottoCount(money);
    Console.print(`${lottoCount}개를 구매했습니다.`);
    const lottoNumberArr = getLottoNumbers(lottoCount);
    return lottoNumberArr;
  }
}

export default Lotto;
