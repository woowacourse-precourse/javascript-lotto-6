import { INPUT_MESSAGE, WINNING_NUMBER_DELIMITER } from './constant/index.js';
import { Lotto, LottoCalculator, LottoValidation } from './domain/index.js';
import { Input, Output } from './view/index.js';

class App {
  #winningNumbers;
  #bonusNumber;
  #lottos;
  async play() {
    const amount = await Input.readLineLoop(INPUT_MESSAGE.AMOUNT_TO_BUY, LottoValidation.amount);
    const lottos = Lotto.createLottos(amount);
    this.#lottos = lottos;
    Output.purchasedLottosNumber(lottos);

    const winningNumbers = await Input.readLineLoop(INPUT_MESSAGE.WINNING_NUMBER, LottoValidation.winningNumbers);
    this.#winningNumbers = winningNumbers.split(WINNING_NUMBER_DELIMITER).map(Number);

    const validateBonus = (input) => LottoValidation.bonus(this.#winningNumbers, Number(input));
    const bonusNumber = await Input.readLineLoop(INPUT_MESSAGE.BONUS_NUMBER, validateBonus);
    this.#bonusNumber = Number(bonusNumber);

    const statistics = LottoCalculator.calculateStatistics(lottos, this.#winningNumbers, this.#bonusNumber);
    Output.printStatistics(statistics);
    const profitRate = LottoCalculator.calculateProfitRate(statistics, amount);
    Output.profitRate(profitRate);
  }
}

export default App;
