import { Console } from "@woowacourse/mission-utils";
import { getLottoNumbers } from "./function/getLottoNumbers.js";
import { calculateLottoCount } from "./function/util/calculateLottoCount.js";
import { getPayLottoAmount } from "./function/getPayLottoAmount.js";
import { getBonusNumber } from "./function/getBonusNumber.js";
import { printWinningMoney } from "./function/util/printWinningMoney.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
    this.#duplicationValidate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #duplicationValidate(number) {
    number.forEach((el, index) => {
      if (el === number[index + 1]) {
        throw new Error("[ERROR] 중복값은 입력이 불가합니다.");
      }
    });
  }

  getWinNumberCount(lottos, bonusNumber) {
    let resultCount = [];

    lottos.forEach((lottoNums) => {
      let count = 0;
      let bonusCount = 0;

      lottoNums.forEach((el) => {
        this.#numbers.forEach((winNum) => {
          if (winNum === el) {
            count += 1;
          }
        });

        if (el === bonusNumber) {
          count += 1;
          bonusCount += 1;
        }
      });

      resultCount.push({ count: count, bonusCount: bonusCount });
    });

    return resultCount;
  }

  static verifyAmount(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 유효한 금액이 아닙니다. 다시 입력 해주세요.");
    }

    if (money % 1000 !== 0) {
      throw new Error(
        "[ERROR] 로또는 1000원 단위로 구입이 가능합니다. 금액을 다시 입력해주세요"
      );
    }

    return money;
  }

  static buyLotto(money, lottoCount) {
    this.verifyAmount(money);

    const lottoNumberArr = getLottoNumbers(lottoCount);

    return lottoNumberArr;
  }

  async printLottoResult(money, lottoNumber) {
    this.#validate(this.#numbers);

    const bonusCount = await getBonusNumber(this.#numbers);

    const winNumber = this.getWinNumberCount(lottoNumber, bonusCount);

    printWinningMoney(winNumber, money);
  }
}

export default Lotto;
