import { Random } from '@woowacourse/mission-utils';
import { NUMBER, PRIZE_AMOUNTS } from '../utils/Constans';
import Lotto from './Lotto';

class UserLottoModel {
  #lottoTickets;

  constructor() {
    this.#lottoTickets = [];
  }

  generateLottoTicket(inputNum) {
    const tickets = this.#calculateNumberOfTickets(inputNum);
    for (let index = NUMBER.ZERO; index < tickets; index++) {
      const ticket = this.#generateRandomNumber();
      this.#lottoTickets.push(new Lotto(ticket));
    }
  }

  #calculateNumberOfTickets(inputNum) {
    return inputNum / PRIZE_AMOUNTS.TICKET_PRICE_AMOUNT;
  }

  #generateRandomNumber(){
    return Random.pickUniqueNumbersInRange(NUMBER.ONE, NUMBER.FORTY_FIVE, NUMBER.SIX)
  }

  getLottoTickets() {
    return this.#lottoTickets.map(lotto => lotto.getLottoNumber());
  }
}

export default UserLottoModel;