import { Console } from '@woowacourse/mission-utils';
import InputMessage from '../message/Input.js';

const InputView = {
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(InputMessage.PurchaseAmount);

    return purchaseAmount;
  },

  async readLottoWinningNumbers() {
    const lottoWinningNumbers = await Console.readLineAsync(InputMessage.winningNumbers);

    return lottoWinningNumbers;
  },
};

export default InputView;
