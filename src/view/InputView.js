import { Console } from '@woowacourse/mission-utils';
import { LOTTO_NOTIFICATION_MESSAGE } from '../constants/LottoMessage.js';

const readLine = (message) => Console.readLineAsync(message);

export const readLottoSeedMoney = () =>
  readLine(LOTTO_NOTIFICATION_MESSAGE.enterLottoSeedMoney);

export const readLottoMainNumbers = () =>
  readLine(LOTTO_NOTIFICATION_MESSAGE.enterLottoWinningNumber);

export const readLottoBonusNumber = () =>
  readLine(LOTTO_NOTIFICATION_MESSAGE.enterLottoWinningBonusNumber);
