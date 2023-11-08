import { INPUT_MESSAGE, LOTTO, WINNING_NUMBER_DELIMITER } from './constant/index.js';
import { Lotto, LottoCalculator, LottoValidation } from './domain/index.js';
import { Input, Output } from './view/index.js';

class App {
  #winningNumbers;
  #bonusNumber;
  #lottos;
  async play() {
    await this.purchase();
    await this.draw();
    await this.lookup();
  }

  async purchase() {
    const amount = await Input.readLineLoop(INPUT_MESSAGE.AMOUNT_TO_BUY, LottoValidation.amount);
    const lottos = Lotto.createLottos(amount);
    this.#lottos = lottos;

    Output.purchasedLottosNumber(lottos);
  }

  async draw() {
    const winningNumbers = await Input.readLineLoop(INPUT_MESSAGE.WINNING_NUMBER, LottoValidation.winningNumbers);
    this.#winningNumbers = winningNumbers.split(WINNING_NUMBER_DELIMITER).map(Number);

    const validateBonus = (input) => LottoValidation.bonus(this.#winningNumbers, Number(input));
    const bonusNumber = await Input.readLineLoop(INPUT_MESSAGE.BONUS_NUMBER, validateBonus);
    this.#bonusNumber = Number(bonusNumber);
  }

  async lookup() {
    const statistics = LottoCalculator.calculateStatistics(this.#lottos, this.#winningNumbers, this.#bonusNumber);
    Output.printStatistics(statistics);

    const lottoPurchaseAmount = this.#lottos.length * LOTTO.PRICE;
    const profitRate = LottoCalculator.calculateProfitRate(statistics, lottoPurchaseAmount);
    Output.profitRate(profitRate);
  }
}

export default App;
