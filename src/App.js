import { Console } from '@woowacourse/mission-utils';
import { isValidLottoAmountInput } from './Utils/validation.js';
import { pickRandomLottoNumbers } from './utils/random.js';
import InputView from './view/inputView.js';
import OutputView from './view/OutputView.js';
import Lotto from './Lotto.js';

class App {
  async play() {
    const lottoAmount = await this.getLottoAmount();
    const lottoCount = this.getLottoCount(lottoAmount);
    const lottoTickets = this.getLottoTickets(lottoCount);

    OutputView.printLottoTicketCount(lottoCount);
    OutputView.printLottoTickets(lottoTickets);
  }

  async getLottoAmount() {
    let lottoAmount;

    while (true) {
      try {
        lottoAmount = await InputView.readLottoAmount();

        if (!isValidLottoAmountInput(lottoAmount)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        } else {
          return lottoAmount;
        }
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  getLottoCount(amount) {
    return parseInt(amount / 1000);
  }

  getLottoTickets(count) {
    const lottoTickets = [];

    for (let i = 0; i < count; i++) {
      lottoTickets.push(this.getLottoNumbers());
    }

    return lottoTickets;
  }

  getLottoNumbers() {
    const lottoNumbers = pickRandomLottoNumbers();
    const lotto = new Lotto(lottoNumbers);

    return lotto;
  }
}

export default App;
