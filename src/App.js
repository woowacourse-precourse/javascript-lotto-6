import Input from './view/Input.js';
import InputError from './domain/InputError.js';
import Output from './view/Output.js';
import LottoMachine from './domain/LottoMachine.js';
import Statistics from './Statistics.js';

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
    Output.printLottoList(lottoList);
    await this.getWinningAndBonusNum(lottoList);
  }

  async getWinningAndBonusNum(lottoList) {
    const winningNumberStr = await Input.getWinningNumber();
    const winningNumber = [];
    winningNumberStr.split(',').map((num) => {
      winningNumber.push(Number(num));
    });
    const bonusNumber = await Input.getBonusNumber();

    this.getStatisticsResult(winningNumber, bonusNumber, lottoList);
  }

  getStatisticsResult(winningNumber, bonusNumber, lottoList) {
    LottoMachine.getStatisticsResult(winningNumber, bonusNumber, lottoList);
  }
}

export default App;
