import { Console } from '@woowacourse/mission-utils';
import { LOTTO_NOTIFICATION_MESSAGE } from '../constants/LottoMessage.js';

/**
 * @public
 * @param message
 * @returns {string}
 */
const readLine = (message) => Console.readLineAsync(message);

/**
 * @returns {string}
 */
export const readLottoSeedMoney = () =>
  readLine(LOTTO_NOTIFICATION_MESSAGE.enterLottoSeedMoney);

/**
 * @returns {string}
 */
export const readLottoMainNumbers = () =>
  readLine(LOTTO_NOTIFICATION_MESSAGE.enterLottoWinningNumber);

/**
 * @returns {string}
 */
export const readLottoBonusNumber = () =>
  readLine(LOTTO_NOTIFICATION_MESSAGE.enterLottoWinningBonusNumber);
