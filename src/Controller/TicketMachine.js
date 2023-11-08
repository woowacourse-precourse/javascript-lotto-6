import { MissionUtils } from '@woowacourse/mission-utils';
import LottoTicket from '../Model/LottoTicket.js';
import Interface from '../View/Interface.js';
import ValidatorFactory from '../Validator/index.js';
import Lotto from '../Lotto.js';

// 티켓 머신 모듈
class TicketMachine {
  #validator;
  constructor() {
    this.#validator = ValidatorFactory.initialize('payment');
  }

  async buyTicket() {
    const lottoTicket = LottoTicket.getInstance();
    try {
      const payment = await Interface.requestPayment();
      const vertifiedPayment = this.#validator.evaluate(payment);

      const ticket = this.createLottoTicket(this.numOfPurchase(vertifiedPayment));
      lottoTicket.saveSpecificTypeData('ticket', ticket);
    } catch (error) {
      throw new Error(error);
    }
  }
  // 티켓 머신 클래스에 대한 유틸리티 함수들
  createLottoTicket(amount) {
    return Array.from({ length: amount }, () => []).map(() => {
      const lotto = new Lotto(this.lottoNumbers());
      return lotto;
    });
  }
  lottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  numOfPurchase(payment) {
    return Number(payment) / 1000;
  }
}

export default TicketMachine;
