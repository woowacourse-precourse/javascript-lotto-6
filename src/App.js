import Input from './view/Input.js';
import InputError from './domain/InputError.js';
import Output from './view/Output.js';
import LottoMachine from './domain/LottoMachine.js';

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
    return await InputError.checkWinningNumInputError(numbers);
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
    return await InputError.checkBonusNumInputError(number, winningNumber);
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
