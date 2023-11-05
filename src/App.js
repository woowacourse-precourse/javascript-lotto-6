import { Random } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './constants/messages.js';
import { MAGIC_NUMBER } from './constants/magicNumber.js';
import View from './View.js';
import TicketMachine from './TicketMachine.js';
import Lotto from './Lotto.js';
import Validator from './utils/Validator.js';

class App {
  #state = { ticktes: null };

  buyTickets(purchaseAmount) {
    Validator.checkPurchaseAmount(purchaseAmount);

    this.ticketMachine = new TicketMachine({
      purchaseAmount,
      getTickets: purchasedTicktesCount => {
        this.#state.ticktes = Array.from(
          { length: purchasedTicktesCount },
          () =>
            Random.pickUniqueNumbersInRange(
              MAGIC_NUMBER.MIN_NUMBER,
              MAGIC_NUMBER.MAX_NUMBER,
              MAGIC_NUMBER.LOTTO_NUMBER_COUNT,
            ),
        );
        View.printPurchasedTicketsInfo(
          purchasedTicktesCount,
          this.#state.ticktes,
        );
      },
    });
  }

  setlottoNumbers(lottoNumbers) {
    const lottoNumbersArray = lottoNumbers.split(',').map(Number);

    Validator.checkLottoNumbers(lottoNumbersArray);

    this.lotto = new Lotto(lottoNumbersArray);
  }

  async play() {
    const purchaseAmount = await View.getUserInput(
      INFO_MESSAGE.PURCHASE_AMOUNT_ASK_MESSAGE,
    );
    this.buyTickets(purchaseAmount);

    const lottoNumbers = await View.getUserInput(
      INFO_MESSAGE.LOTTO_NUMBERS_ASK_MESSAGE,
    );
    this.setlottoNumbers(lottoNumbers);

    const bonusNumber = await View.getUserInput(
      INFO_MESSAGE.BONUS_NUMBER_ASK_MESSAGE,
    );
  }
}

export default App;
