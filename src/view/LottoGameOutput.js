import ConsoleOutput from '../console/ConsoleOutput.js';
import FORMATTING_MESSAGE from '../constants/FormattingMessage.js';
import MESSAGE from '../constants/Message.js';

class LottoGameOutput {
  static showAllIssuedLottoTickets(lottoTickets) {
    ConsoleOutput.output(
      `${lottoTickets.length}${FORMATTING_MESSAGE.IS_NUM_OF_PURCHASE_LOTTO_TICKETS}`,
    );

    const eachLotto = lottoTickets.map((lotto) => lotto.getLottoNumbers());

    eachLotto.forEach((numbers) => {
      ConsoleOutput.output(`[${numbers.join(', ')}]`);
    });
  }

  static showLottoStatistics() {
    ConsoleOutput.output(MESSAGE.SHOW_LOTTO_WIN_STATISTICS);
  }

  static showFifthStatistics(count) {
    ConsoleOutput.output(
      `${FORMATTING_MESSAGE.NUM_OF_FIFTH_PLACE_IS}${count}${FORMATTING_MESSAGE.EA}`,
    );
  }

  static showFourthStatistics(count) {
    ConsoleOutput.output(
      `${FORMATTING_MESSAGE.NUM_OF_FOURTH_PLACE_IS}${count}${FORMATTING_MESSAGE.EA}`,
    );
  }

  static showThirdStatistics(count) {
    ConsoleOutput.output(
      `${FORMATTING_MESSAGE.NUM_OF_THIRD_PLACE_IS}${count}${FORMATTING_MESSAGE.EA}`,
    );
  }

  static showSecondStatistics(count) {
    ConsoleOutput.output(
      `${FORMATTING_MESSAGE.NUM_OF_SECOND_PLACE_IS}${count}${FORMATTING_MESSAGE.EA}`,
    );
  }

  static showFirstStatistics(count) {
    ConsoleOutput.output(
      `${FORMATTING_MESSAGE.NUM_OF_FIRST_PLACE_IS}${count}${FORMATTING_MESSAGE.EA}`,
    );
  }

  static showReturnRate(rate) {
    ConsoleOutput.output(
      `${FORMATTING_MESSAGE.TOTAL_RETRUN_RATE_IS}${rate}${FORMATTING_MESSAGE.PERSENT}`,
    );
  }
}

export default LottoGameOutput;
