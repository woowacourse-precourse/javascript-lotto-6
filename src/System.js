import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_MESSAGE } from "./constants/constants";
import Lotto from "./Lotto";

class System {
  async getMoney() {
    let money = 0;
    while (true) {
      try {
        const inputMoney = await this.#getInputMoney();
        money = Number(inputMoney);
        this.#validateMoney(money);
        this.#validateMoneyFormat(money);

        break;
      } catch (error) {
        await Console.print(error.message);
      }
    }

    return money;
  }

  // 사용자로부터 금액을 입력받는 부분
  async #getInputMoney() {
    const inputMoney = await Console.readLineAsync(INPUT_MESSAGE.money);
    return inputMoney;
  }

  // 금액의 유효성을 검사하는 부분
  #isMoneyInvalid(inputMoney) {
    return Object.is(inputMoney, NaN);
  }

  // 금액의 유효성을 검사하는 부분
  #validateMoney(money) {
    if (this.#isMoneyInvalid(money)) {
      throw new Error(ERROR_MESSAGE.invalidMoneyError);
    }
  }

  // 금액이 1000원 단위인지 검사하는 부분
  #isAmountInValid(money) {
    return money % 1000 !== 0 || money < 1000;
  }

  // 금액이 1000원 단위인지 검사하는 부분
  #validateMoneyFormat(money) {
    if (this.#isAmountInValid(money)) {
      throw new Error(ERROR_MESSAGE.moneyFormatErrorMessage);
    }
  }

  async getLottoCount(money) {
    return Math.floor(money / 1000);
  }

  generateLottoNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(randomNumbers);
  }

  saveLottoNumbers() {
    let lotto;
    while (true) {
      lotto = this.generateLottoNumbers();
      try {
        lotto.duplicate(); // 중복 검사를 실행하여 중복이 있으면 예외가 발생
        break;
      } catch (error) {
        console.error(error.message); // 중복이 있으면 예외 메시지를 출력
      }
    }

    return lotto;
  }

  async purchaseLottos(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lotto = this.saveLottoNumbers();
      lottos.push(lotto);
    }
    return lottos;
  }

  async getLotto() {
    let lottoNumbers = [];
    let lotto;
    while (true) {
      const inputLotteNumbers = await Console.readLineAsync(
        INPUT_MESSAGE.lottoNumber
      );
      lottoNumbers = inputLotteNumbers.split(",").map(Number);
      try {
        lotto = new Lotto(lottoNumbers);
        lotto.duplicate();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return [lottoNumbers, lotto];
  }

  async getBonusNumber(lotto) {
    let bonusNumber = 0;
    let lottoNumbersSet = new Set();
    while (true) {
      const inputBonusNumber = await Console.readLineAsync(
        INPUT_MESSAGE.bonusNumber
      );
      bonusNumber = Number(inputBonusNumber);
      lottoNumbersSet = new Set(lotto.getNumbers());
      try {
        this.isDuplicateLottoNumber(bonusNumber, lottoNumbersSet);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return [bonusNumber, lottoNumbersSet];
  }

  isDuplicateLottoNumber(bonusNumber, lottoNumbersSet) {
    if (lottoNumbersSet.has(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.duplicateLottoNumber);
    }
  }
}

export default System;
