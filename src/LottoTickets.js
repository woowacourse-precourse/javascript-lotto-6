import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER_RANGE, TOTAL_LOTTO_NUMBERS } from './constants/constants';
import Validator from './validator/Validator';
import Lotto from './Lotto';

// @NOTE - 로또 발행 및 로또 개수 출력
class LottoTickets {
  #money;
  #boughtTickets;

  constructor(money) {
    this.#money = Number(money);
    this.#validate();
    this.#boughtTickets = Number(money) / 1000;
    this.tickets = [];
  }

  #validate() {
    Validator.isMoneyValid(this.#money);
  }

  publishTickets() {
    MissionUtils.Console.print(`${this.#boughtTickets}개를 구매했습니다.`);

    let tickets = this.#boughtTickets;
    while (tickets > 0) {
      const LOTTO = this.generateOneLotto();
      const VALIDATED_LOTTO = new Lotto(LOTTO).returnOneLotto();
      this.printLotto(VALIDATED_LOTTO);
      this.tickets.push(VALIDATED_LOTTO);
      tickets -= 1;
    }

    return this.tickets;
  }

  printLotto(lotto) {
    MissionUtils.Console.print(`[${lotto.join(', ')}]`);
  }

  generateOneLotto() {
    const { MAX_NUMBER, MIN_NUMBER } = LOTTO_NUMBER_RANGE;

    const RANDOMS = MissionUtils.Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      TOTAL_LOTTO_NUMBERS
    );
    return String(RANDOMS).split(',').map(Number);
  }

  returnMoney() {
    return Number(this.#money);
  }
}

export default LottoTickets;
