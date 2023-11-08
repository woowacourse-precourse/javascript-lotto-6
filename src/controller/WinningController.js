import CONSTRAINTS from '../constants/Constraints';
import Validation from '../model/Validation';
import Winning from '../model/Winning';
import Input from '../views/Input';
import Output from '../views/Output';

class WinningController {
  #winningNumber;

  #bonusNumber;

  #winning;

  #lottos;

  constructor(lottos) {
    this.#winning = new Winning();
    this.#lottos = lottos;
  }

  async inputLottoNumbers() {
    const winning = (await Input.readWinningNumbers()).split(',');
    const bonus = await Input.readBonusNumber();
    const validation = new Validation([...winning, bonus].map(Number));
    try {
      Validation.validateLottoLength(winning);
      validation.validateLotto();
    } catch (err) {
      Output.printErrorMessage(err.message);
      await this.inputNumbers();
    }
    this.#winningNumber = winning.map(Number);
    this.#bonusNumber = Number(bonus);
  }

  async result() {
    Output.printStatistic();
    this.#lottos.forEach((lotto) => {
      this.produceStatistics(lotto.getNumbers());
    });
    Output.printWinningResult(this.#winning.getWinningResult());
    Output.printPlusRatio(this.calculatePlusRatio());
  }

  produceStatistics(lottoNumbers) {
    const matchCount = this.#matchWinningNumber(lottoNumbers);
    const rank = this.calculateRank(matchCount, lottoNumbers);
    if (rank !== 'fail') {
      this.#winning.setWinningResult(rank);
    }
  }

  calculatePlusRatio() {
    return (
      (this.#winning.getWinningTotalPrice() /
        (this.#lottos.length * CONSTRAINTS.PRICE_UNIT)) *
      100
    );
  }

  calculateRank(matchCount, lottoNumbers) {
    switch (matchCount) {
      case 6:
        return 'first';
      case 5:
        if (this.#matchBonusNumber(lottoNumbers)) return 'second';
        return 'third';
      case 4:
        return 'fourth';
      case 3:
        return 'fifth';
      default:
        return 'fail';
    }
  }

  #matchWinningNumber(lottoNumbers) {
    let matchCount = 0;
    lottoNumbers.forEach((number) => {
      if (this.#winningNumber.includes(number)) matchCount += 1;
    });
    return matchCount;
  }

  #matchBonusNumber(lottoNumbers) {
    return lottoNumbers.includes(this.#bonusNumber);
  }
}
export default WinningController;
