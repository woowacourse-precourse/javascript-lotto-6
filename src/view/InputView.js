import { Console } from '@woowacourse/mission-utils';
import { LOTTO_NOTIFICATION_MESSAGE } from '../constants/LottoMessage.js';
import validateLottoBonusNumber from '../validator/LottoBonusNumberValidator.js';
import validateLottoSeedMoney from '../validator/LottoSeedMoneyValidator.js';
import validateLottoNumbers from '../validator/LottoNumbersValidator.js';

const readLine = async (message, validate) => {
  const input = await Console.readLineAsync(message);
  validate(input);
  return input;
};

export const readLottoSeedMoney = () =>
  readLine(
    LOTTO_NOTIFICATION_MESSAGE.enterLottoSeedMoney,
    validateLottoSeedMoney
  );

export const readLottoMainNumbers = () =>
  readLine(
    LOTTO_NOTIFICATION_MESSAGE.enterLottoWinningNumber,
    validateLottoNumbers
  );

export const readLottoBonusNumber = (lottoNumbers) =>
  readLine(LOTTO_NOTIFICATION_MESSAGE.enterLottoWinningBonusNumber, (input) =>
    validateLottoBonusNumber(input, lottoNumbers)
  );
