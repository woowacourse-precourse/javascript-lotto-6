import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_NUMBER_RANGE, TOTAL_LOTTO_NUMBERS } from "./constants/constants";
import Validator from "./validator/Validator";
import Output from "./view/Output";


// @NOTE - 로또 발행 및 로또 개수 출력
class LottoTickets {
  #money
  #boughtTickets

  constructor(money) {
    this.#validate(money)
    this.#money = money
    this.#boughtTickets = Number(money) / 1000
    this.tickets = []
  }

  #validate(money) {
    this.validator = new Validator();
    const ERROR_MESSAGE = this.validator.isMoneyValid(money);

    if (ERROR_MESSAGE) {
      MissionUtils.Console.print(ERROR_MESSAGE)
      return;
    }
  }

  publishTickets() {
    Array(this.#boughtTickets).fill().map(() => {
      const LOTTO = this.generateOneLotto();
      this.addToTickets(LOTTO)
    });
  }

  generateOneLotto() {
    const { MAX_NUMBER, MIN_NUMBER } = LOTTO_NUMBER_RANGE

    const RANDOMS = MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, TOTAL_LOTTO_NUMBERS);
    return String(RANDOMS).split(',').map(Number)
  }

  addToTickets(lotto) {
    const LOTTOS = this.tickets
    LOTTOS.push(lotto)
    this.tickets = LOTTOS
  }

  returnTickets() {
    return this.tickets
  }

  returnMoney() {
    this.#money = Number(this.#money);

    if (/^[1-9]\d*$/.test(this.#money)) {
      this.output = new Output();
      this.output.print(this.#money)
      return true
    }
    return false
  }
}

export default LottoTickets;