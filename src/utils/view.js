import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/Constants.js';
import LOTTO_PRIZE from '../constants/LottoPrize.js';
import MESSAGES from '../constants/Messages.js';
import { sortArray } from './arrayUtils.js';
import validation from './validation.js';

const view = {
  async readPurchaseLottos() {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.PURCHASE_AMOUNT,
    );

    validation.isValidInputPurchaseAmount(purchaseAmount);

    return Number(purchaseAmount) / CONSTANTS.LOTTO_PRICE;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.WINNING_NUMBERS,
    );

    validation.isValidInputWinningNumbers(winningNumbers);

    return sortArray(winningNumbers.split(',').map(number => Number(number)));
  },

  async readBonusNumber(winningNumbers) {
    const bonusNumber = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.BONUS_NUMBER,
    );

    validation.isValidInputBonusNumber(bonusNumber);
    validation.bonusNumberIncludedWinningNumbers(bonusNumber, winningNumbers);

    return Number(bonusNumber);
  },

  printPurchaseLottoInfo(lottos) {
    const lottoCountMessage = `\n${lottos.length + MESSAGES.PURCHASE_COUNT}`;
    const lottoNumbers = lottos.map(lotto => lotto.getString());

    const messages = [lottoCountMessage, ...lottoNumbers];

    messages.forEach(message => Console.print(message));
  },

  printLottoResult(matchCount) {
    const prizeText = Object.values(LOTTO_PRIZE).map(prize => prize.TEXT);
    const countMessages = prizeText
      .map((text, index) => `${text} - ${matchCount[index]}개`)
      .reverse();

    const messages = [MESSAGES.LOTTO_RESULT, ...countMessages];

    messages.forEach(message => Console.print(message));
  },
};

export default view;
