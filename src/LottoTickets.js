import { MissionUtils } from '@woowacourse/mission-utils';
import {
  LOTTO_NUMBER_RANGE,
  TOTAL_LOTTO_NUMBERS
} from './constants/constants.js';
import Validator from './validator/Validator.js';
import Lotto from './Lotto.js';

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
    this.printTicketGuide();

    let isLooping = this.#boughtTickets;
    while (isLooping > 0) {
      const LOTTO = this.generateOneLotto();
      const VALIDATED_LOTTO = new Lotto(LOTTO).returnOneLotto();

      this.printLotto(VALIDATED_LOTTO);
      this.tickets.push(VALIDATED_LOTTO);

      isLooping -= 1;
    }

    return this.tickets;
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

    printTicketGuide() {
    MissionUtils.Console.print(`${this.#boughtTickets}개를 구매했습니다.`);
  }

  printLotto(lotto) {
    MissionUtils.Console.print(`[${lotto.join(', ')}]`);
  }

  returnMoney() {
    return Number(this.#money);
  }
}

export default LottoTickets;
