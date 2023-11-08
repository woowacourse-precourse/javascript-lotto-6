import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/Constants.js';
import LOTTO_PRIZE from '../constants/LottoPrize.js';
import MESSAGES from '../constants/Messages.js';
import { sortArray } from './arrayUtils.js';
import Validation from './Validation.js';

export const readPurchaseLottos = async () => {
  try {
    const purchaseAmount = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.PURCHASE_AMOUNT,
    );

    Validation.isValidInputPurchaseAmount(purchaseAmount);

    return Number(purchaseAmount) / CONSTANTS.LOTTO_PRICE;
  } catch (error) {
    Console.print(error.message);
    return readPurchaseLottos();
  }
};

export const readWinningNumbers = async () => {
  try {
    const winningNumbers = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.WINNING_NUMBERS,
    );

    Validation.isValidInputWinningNumbers(winningNumbers);

    return sortArray(winningNumbers.split(',').map(number => Number(number)));
  } catch (error) {
    Console.print(error.message);
    return readWinningNumbers();
  }
};

export const readBonusNumber = async winningNumbers => {
  try {
    const bonusNumber = await Console.readLineAsync(
      MESSAGES.INPUT_REQUEST.BONUS_NUMBER,
    );

    Validation.isValidInputBonusNumber(bonusNumber);
    Validation.bonusNumberIncludedWinningNumbers(bonusNumber, winningNumbers);

    return Number(bonusNumber);
  } catch (error) {
    Console.print(error.message);
    return readBonusNumber();
  }
};

export const printPurchaseLottoInfo = lottos => {
  const lottoCountMessage = `\n${lottos.length + MESSAGES.PURCHASE_COUNT}`;
  const lottoNumbers = lottos.map(lotto => lotto.getString());

  const messages = [lottoCountMessage, ...lottoNumbers];

  messages.forEach(message => Console.print(message));
};

export const printLottoResult = (matchCount, profitRate) => {
  const prizeText = Object.values(LOTTO_PRIZE).map(key => key.TEXT);
  const countMessages = prizeText
    .map((text, index) => `${text} - ${matchCount[index]}개`)
    .reverse();
  const profitRateMessage = MESSAGES.PROFIT_RESULT.join(`${profitRate}`);

  const messages = [MESSAGES.LOTTO_RESULT, ...countMessages, profitRateMessage];

  messages.forEach(message => Console.print(message));
};
