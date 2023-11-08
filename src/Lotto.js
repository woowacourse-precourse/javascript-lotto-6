import { Random, Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, CONSOLE_MESSAGE } from "./Constant";

class Lotto {
  #numbers;
  #account;

  constructor(numbers) {
    this.#validateMoney(numbers);
    this.#account = numbers / 1000;
    this.#numbers = this.#generateLottoNumbers(this.#account);
    this.#validate(numbers);
  }
  // App에서 받은 금액이 1000원 단위인지 검증한다.
  // 검증이 완료되면 금액만큼 로또 개수를 구매하고, 로또 번호를 생성한다.
  #validateMoney(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_PRICE);
    } else {
      this.#account = numbers / 1000;
      Console.print(`${this.#account}${CONSOLE_MESSAGE.ANSWER_LOTTO_ACCONT}`);
    }
  }
  // 검증이 완료되면 1~45 수의 중복되지 않는 로또 번호 6개를 생성한다.
  #generateLottoNumbers(account) {
    const totalLottoNumbers = [];
    while (totalLottoNumbers.length < account) {
      const lottoNumber = [];
      Random.pickUniqueNumbersInRange(1, 45, 6).forEach((number) => {
        if (!lottoNumber.includes(number)) {
          lottoNumber.push(number);
        }
      });
      totalLottoNumbers.push(lottoNumber);
    }

    return totalLottoNumbers;
  }

  async showLottoNumbers() {
    Console.print(...this.#numbers);
  }
  // 당첨 번호를 입력 받을 때 6개의 숫자인지 검증한다.
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NUMBER_NOT_SIX);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
