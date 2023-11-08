import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message';
import Validate from './Validate';

const LottoUi = {
  async inputPurchaseAmount() {
    try {
      const purchaseAmount = await Console.readLineAsync(MESSAGE.INPUT_MONEY);
      Validate.PurchaseAmount(Number(purchaseAmount));

      return Number(purchaseAmount);
    } catch (err) {
      Console.print(err.message);
      return await this.inputPurchaseAmount();
    }
  },

  async inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
      const winningNumbers = input.split(',').map((number) => Number(number));
      Validate.WinningNumbers(winningNumbers);

      return winningNumbers;
    } catch (err) {
      Console.print(err.message);
      return await this.inputWinningNumbers();
    }
  },

  async inputBonusNumber() {
    try {
      const bonusNumber = Number(
        await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER)
      );
      Validate.BonusNumber(bonusNumber);

      return bonusNumber;
    } catch (err) {
      Console.print(err.message);
      return await this.inputBonusNumber();
    }
  },

  printResultOfLotto(winningStatus, rateOfReturn) {
    this.printWinningStatus(winningStatus);
    this.printRateOfReturn(rateOfReturn);
  },

  printWinningStatus(winningStatus) {
    winningStatus.forEach((rank, idx) => {
      Console.print(`${MESSAGE.WINNING_STATICS[idx]} - ${rank}개`);
    });
  },

  printRateOfReturn(rateOfReturn) {
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  },

  alertFinishdrawLottos(purchaseAmount) {
    const numberOfLottos = purchaseAmount / 1000;
    Console.print(`${numberOfLottos}${MESSAGE.FINISH_DRAW_LOTTOS}`);
  },

  printPurchasedLottos(purchaseAmount, purchasedLottos) {
    this.alertFinishdrawLottos(purchaseAmount);

    purchasedLottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  },
};

export default Object.freeze(LottoUi);
