import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import PROPMT_MESSAGE from '../constants/propmtMessage.js';
import ERROR_MESSAGE from '../constants/erroeMessage.js';
import LottoStore from '../models/LottoStore.js';
import LottoComparer from '../models/LottoComparer.js';
import LottoWinnerPrize from '../models/LottoWinnerPrize.js';
import LottoProfitCalculator from '../models/LottoProfitCalculator.js';
import Lotto from '../models/Lotto.js';

const { bonusNumber, winningNumber, purchasePrice } = PROPMT_MESSAGE;
const { purchaseInvalidAmount } = ERROR_MESSAGE;

class LottoController {
  // propmt
  purchasedPrice;

  purchasedAmount;

  // model
  lottoComparer;

  lottoWinnerPrize;

  // FINAL
  LOTTO_PRICE = 1000;

  constructor() {
    this.lottoWinnerPrize = new LottoWinnerPrize();
  }

  async startLotto() {
    this.purchasedPrice = await this.propmtPurchasedPrice();
    this.purchasedAmount = this.calculateAmount(
      this.purchasedPrice,
      this.LOTTO_PRICE,
    );
    this.createLottoDomain();
  }

  createLottoDomain() {
    const lottoStore = new LottoStore(this.purchasedAmount);
    const lottos = lottoStore.createLottoTickets();
    this.lottoComparer = new LottoComparer(lottos, this.lottoWinnerPrize);
  }

  async propmtPurchasedPrice() {
    const { readLineAsync } = InputView;
    const { printOutput } = OutputView;

    try {
      const price = await readLineAsync(purchasePrice);
      if (this.validatePrice(price, this.LOTTO_PRICE)) {
        throw new Error();
      }
      return price;
    } catch (error) {
      printOutput(purchaseInvalidAmount);
      return this.propmtPurchasedPrice();
    }
  }

  printTotalProfit() {
    const { printOutput } = OutputView;
    const lottoProfitCalculator = new LottoProfitCalculator(
      this.lottoWinnerPrize,
      this.purchasedPrice,
    );
    const profitRate = lottoProfitCalculator.rate();
    printOutput(`총 수익률은 ${profitRate}%입니다.`);
  }

  printPurchaseHistory() {
    const { printOutput } = OutputView;
    printOutput(`${this.purchasedAmount}개를 구매했습니다.`);

    this.lottoComparer.lottos.forEach(lotto => {
      const lottos = lotto.getNumbers();
      const formattedArray = `[${lottos.join(', ')}]`;
      printOutput(formattedArray);
    });
  }

  printWinningResult() {
    const { printOutput } = OutputView;
    const winningResult = Object.values(this.lottoComparer.lottoWinnerPrize);

    printOutput('당첨 통계');
    printOutput('---');

    winningResult.forEach(
      ({ count, prizeMoney, matchedNumbers, hasBonusNumber }) => {
        const bonusText = hasBonusNumber ? ', 보너스 볼 일치' : '';
        const printResult = `${matchedNumbers}개 일치${bonusText} (${prizeMoney.toLocaleString()}원) - ${count}개`;
        printOutput(printResult);
      },
    );
  }

  validatePrice(price, lottoPrice) {
    return price % lottoPrice !== 0 || price <= 0;
  }

  calculateAmount(price, lottoPrice) {
    return price / lottoPrice;
  }

  async setWinningNumbers() {
    const winningNumbers = await this.propmtWinningNumber();
    const bonusNumbers = await this.propmtBonusNumber();

    this.lottoComparer.WinningNumbers = new Lotto(winningNumbers);
    this.lottoComparer.bonusNumber = Number(bonusNumbers);
  }

  async propmtBonusNumber() {
    const { readLineAsync } = InputView;
    const bonusNumbers = await readLineAsync(bonusNumber);

    return bonusNumbers;
  }

  async propmtWinningNumber() {
    const { readLineAsync } = InputView;
    const winningNumbers = await readLineAsync(winningNumber);
    const numbersArray = winningNumbers.split(',').map(Number);

    return numbersArray;
  }

  compareLottoNumbers() {
    this.lottoComparer.setComparedLottoNumbers();
  }
}
export default LottoController;
