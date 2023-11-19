import { OutputView } from '../view/index.js';
import {
  MESSAGE,
  RANK_MESSAGE,
  STATISTICS_MESSAGE,
} from '../constants/Message.js';

const OutputController = {
  printErrorMessage(error) {
    const { message } = error;
    OutputView.printMessage(message);
  },

  changeArrayToStringMessage(array) {
    return `[${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}, ${array[5]}]`;
  },

  /**
   *
   * @param {Lotto[]} lottos
   */
  printPurchasedLottos(lottos) {
    OutputView.printMessage(`\n${lottos.length}${MESSAGE.numberOfTickets}`);

    lottos.forEach((v) => {
      const message = this.changeArrayToStringMessage(v.getLottoNumbers());

      OutputView.printMessage(message);
    });
  },

  makeStatisticMessage(arg) {
    const { rank, number } = arg;
    return `${RANK_MESSAGE[rank]} - ${number}${STATISTICS_MESSAGE.correctUnit}`;
  },

  /**
   *
   * @param {{rank:string ,number:number }[]} result
   */
  printWinningResult(result) {
    result.forEach((v) => {
      const message = this.makeStatisticMessage(v);
      OutputView.printMessage(message);
    });
  },

  printRateOfReturn(number) {
    const message = `${STATISTICS_MESSAGE.rateOfReturn.header}${number}${STATISTICS_MESSAGE.rateOfReturn.unit}${STATISTICS_MESSAGE.rateOfReturn.footer}`;
    OutputView.printMessage(message);
  },

  printStatics(winningResult, rateOfReturn) {
    OutputView.printMessage(`\n${STATISTICS_MESSAGE.header}`);
    OutputView.printMessage(STATISTICS_MESSAGE.division);
    this.printWinningResult(winningResult);
    this.printRateOfReturn(rateOfReturn);
  },
};

export default OutputController;
