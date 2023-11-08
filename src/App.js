import InputView from './view/InputView.js'
import OutputView from './view/OutputView.js';

import Lotto from './Lotto.js';
import LottoManager from './LottoManager.js';
import PrizeMoneyManager from './PrizeMoneyManager.js';

import LottoTypeConversion from './util/LottoTypeConversion.js';
import Validator from './util/validator.js';

class App {
  constructor() {
    this.LottoManager = new LottoManager();
  }

  async play() {
    try {
      const buyLotto = await InputView.buyLotto();
      Validator.numberType(buyLotto);
      Validator.buyLottoMinimumOrder(buyLotto);
      Validator.buyLottoUnit(buyLotto);

      return this.issueLotto(buyLotto);
    } catch(error) {
      OutputView.error(error);

      return this.play();
    }
  }

  issueLotto(buyLotto) {
    const lottoTicket = this.LottoManager.lottoTicketExchange(buyLotto);
    OutputView.buyLotto(lottoTicket);

    this.LottoManager.issueLotto(Lotto.generateLottos(lottoTicket));
    this.LottoManager.getLottos().map((lotto) => OutputView.issuedLotto(LottoTypeConversion.issuedLotto(lotto)));
    
    return this.getWinningNumbers(buyLotto);
  }

  async getWinningNumbers(buyLotto) {
    try {
      const userWinningNumbers = await InputView.winningNumber();
      Validator.winningNumbersType(userWinningNumbers);
      Validator.commaSeparatedWinningNumbers(userWinningNumbers);

      const winningNumbers = new Lotto(LottoTypeConversion.winningNumbers(userWinningNumbers)).getNumbers();

      return this.getBounsNumber(buyLotto, winningNumbers);
    } catch(error) {
      OutputView.error(error);

      return this.getWinningNumbers(buyLotto);
    }
  }

  async getBounsNumber(buyLotto, winningNumbers) {
    try {
      const bonusNumber = await InputView.bonusNumber();
      Validator.numberType(bonusNumber);
      Lotto.validateLottoNumber(bonusNumber);
      Lotto.validateBonusNumberInWinningNumber(winningNumbers, bonusNumber);

      return this.drawLotto(buyLotto, winningNumbers, bonusNumber);
    } catch(error) {
      OutputView.error(error);

      return this.getBounsNumber(buyLotto, winningNumbers);
    }
  }

  drawLotto(buyLotto, winningNumbers, bonusNumber) {
    const prizeMoneyManager = new PrizeMoneyManager();

    this.LottoManager.drawingLotto(LottoTypeConversion.Numbers(winningNumbers, bonusNumber));

    const totalMoney = prizeMoneyManager.calculateTotalPrizeMoney(this.LottoManager.getRanks());
    const earningsPercen = prizeMoneyManager.calculateEarningsPercent(totalMoney, buyLotto);

    return this.result(earningsPercen);
  }

  result(earningsPercen) {
    OutputView.result(this.LottoManager.getRanks(), LottoTypeConversion.NumberCommas(earningsPercen));
  }
}

export default App;
