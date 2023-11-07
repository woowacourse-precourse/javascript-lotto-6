import { MissionUtils } from '@woowacourse/mission-utils';
import LottoTicket from '../Model/LottoTicket.js';
import Interface from '../View/Interface.js';
import Printer from '../View/Printer.js';
import ValidatorFactory from '../Validator/index.js';
import Lotto from '../Lotto.js';

function numOfPurchase(payment) {
  return Number(payment) / 1000;
}

function lottoNumbers() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
}

function createLottoTicket(amount) {
  return Array.from({ length: amount }, () => []).map(() => {
    const lotto = new Lotto(lottoNumbers());
    return lotto;
  });
}

class TicketMachine {
  constructor() {
    this.validator = ValidatorFactory.initialize('payment');
  }

  async buyTicket() {
    const lottoTicket = LottoTicket.getInstance();
    try {
      const payment = await Interface.requestPayment();
      const vertifiedPayment = this.validator.evaluate(payment);
      const ticket = createLottoTicket(numOfPurchase(vertifiedPayment));
      lottoTicket.saveSpecificTypeData('ticket', ticket);
    } catch (error) {
      Printer.print('[ERROR]');
      Printer.print(error);
      await this.buyTicket();
    }
  }
}

export default TicketMachine;
