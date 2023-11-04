import ConsoleOutput from '../console/ConsoleOutput.js';
import FORMATTING_MESSAGE from '../constants/FormattingMessage.js';

class LottoGameOutput {
  static purchaseAmountError(error) {
    ConsoleOutput.output(error.message);
  }

  static showAllIssuedLottoTickets(lottoTickets) {
    ConsoleOutput.output(
      `${lottoTickets.length}${FORMATTING_MESSAGE.IS_NUM_OF_PURCHASE_LOTTO_TICKETS}`,
    );

    const eachLotto = lottoTickets.map((lotto) => lotto.getLottoNumbers());

    eachLotto.forEach((numbers) => {
      ConsoleOutput.output(numbers);
    });
  }
}

export default LottoGameOutput;
