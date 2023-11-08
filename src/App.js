import Input from './view/Input.js';
import InputError from './domain/InputError.js';
import Output from './view/Output.js';
import LottoMachine from './domain/LottoMachine.js';
import Statistics from './Statistics.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const purchasePrice = await Input.getLottoPurchasePrice();
    await this.checkPriceInputError(purchasePrice);
  }

  async checkPriceInputError(purchasePrice) {
    const result = await InputError.checkPriceInputError(purchasePrice);
    result === true
      ? await this.printLottoCount(purchasePrice)
      : await this.play();
  }

  async printLottoCount(purchasePrice) {
    const count = await LottoMachine.getLottoCount(purchasePrice);
    await Output.printLottoCount(count);
    await this.generateLotto(count);
  }

  async generateLotto(count) {
    const lottoList = await LottoMachine.generateLotto(count);
    await Output.printLottoList(lottoList);
    await this.getWinningNumber(lottoList);
  }
  async getWinningNumber(lottoList) {
    const winningNumberStr = await Input.getWinningNumber();
    await this.convertWinningNumber(winningNumberStr, lottoList);
  }
  async convertWinningNumber(winningNumberStr, lottoList) {
    const winningNumber = [];

    winningNumberStr.split(',').map((num) => {
      winningNumber.push(Number(num));
    });
    (await this.validateWinningNumber(winningNumberStr))
      ? await this.getBonusNum(winningNumber, lottoList)
      : await this.getWinningNumber(lottoList);
  }
  async validateWinningNumber(numbers) {
    try {
      numbers.split(',').map((num) => {
        num.split('').forEach((ele) => {
          if (!/[0-9]/.test(ele)) throw new Error('[ERROR] 숫자가 아닙니다.');
        });
      });
      if (numbers.split(',').length !== 6) {
        throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
      }
      numbers.split(',').forEach((number) => {
        if (!Number(number) >= 1 && Number(number) <= 45)
          throw new Error(
            '[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.'
          );
      });
      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  async getBonusNum(winningNumber, lottoList) {
    const bonusNumber = await Input.getBonusNumber();
    await this.getValidateBonusNum(bonusNumber, winningNumber, lottoList);
  }

  async getValidateBonusNum(bonusNumber, winningNumber, lottoList) {
    (await this.validateBonusNum(bonusNumber, winningNumber))
      ? await this.getStatisticsResult(winningNumber, bonusNumber, lottoList)
      : await this.getBonusNum(winningNumber, lottoList);
  }

  async validateBonusNum(number, winningNumber) {
    try {
      number.split('').forEach((ele) => {
        if (!/[0-9]/.test(ele))
          throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
      });
      if (Number(number) < 1 || Number(number) > 45)
        throw new Error(
          '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.'
        );
      if (winningNumber.includes(Number(number)))
        throw new Error('[ERROR] 당첨 번호와 같습니다.');

      return true;
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }
  async getStatisticsResult(winningNumber, bonusNumber, lottoList) {
    await LottoMachine.getStatisticsResult(
      winningNumber,
      bonusNumber,
      lottoList
    );
  }
}

export default App;
