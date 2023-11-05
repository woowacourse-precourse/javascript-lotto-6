import { Console } from '@woowacourse/mission-utils';
import InputMessage from '../message/Input.js';
import { validateEmptyString } from '../utils/validators/index.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(InputMessage.PurchaseAmount);

    validateEmptyString(purchaseAmount);

    return purchaseAmount;
  },

  async readLottoWinningNumbers() {
    const lottoWinningNumbers = await Console.readLineAsync(InputMessage.winningNumbers);

    validateEmptyString(lottoWinningNumbers);

    return lottoWinningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요');

    validateEmptyString(bonusNumber);

    return bonusNumber;
  },
};

export default InputView;
