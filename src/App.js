import { Random, Console } from '@woowacourse/mission-utils';
import {
  LOTTO_PRICE,
  LOTTO_NUMBER_RANGE,
  LOTTO_NUMBER_COUNT,
  PRINT_MESSAGE,
  REQUEST_MESSAGE,
  VALIDATION_ERRORS_MESSAGE,
  regexNumber,
} from './Constants.js';

class App {
  async play() {
    const money = await this.getMoney();
    const lottoCount = money / LOTTO_PRICE;
    const lottos = this.buyLotto(lottoCount);
    this.printLotto(lottos, lottoCount);
  }

  // 1. 로또 구입금액 입력받기
  async getMoney() {
    while (true) {
      try {
        const money = await Console.readLineAsync(REQUEST_MESSAGE.PUT_MONEY);
        return this.isValidMoney(money) && money;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  isValidMoney(money) {
    const moneyNumber = Number(money);
    if (!money) throw new Error(VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT);
    if (!regexNumber.test(money))
      throw new Error(VALIDATION_ERRORS_MESSAGE.NOT_ONLY_NUMBER);
    if (moneyNumber < LOTTO_PRICE)
      throw new Error(VALIDATION_ERRORS_MESSAGE.INCORRECT_AMOUNT);
    if (moneyNumber % LOTTO_PRICE !== 0) {
      throw new Error(VALIDATION_ERRORS_MESSAGE.INCORRECT_AMOUNT);
    }

    return true;
  }

  // 2. 구입금액에 해당하는 만큼 로또를 발행
  buyLotto(lottoCount) {
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_RANGE.MIN,
        LOTTO_NUMBER_RANGE.MAX,
        LOTTO_NUMBER_COUNT.LOTTO,
      );
      lottos.push(lotto.sort((a, b) => a - b));
    }

    return lottos;
  }

  // 3. 발행한 로또 수량 및 번호를 출력
  printLotto(lottos, lottoCount) {
    const message = PRINT_MESSAGE(lottoCount);
    Console.print(message.lottoQuantity);

    lottos.forEach((lotto) => {
      const formattedLotto = `[${lotto.join(', ')}]`; // 배열을 문자열로 변환, 공백 추가
      Console.print(formattedLotto);
    });
  }
}

export default App;
