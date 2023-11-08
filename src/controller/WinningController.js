import Validation from '../model/Validation';
import Winning from '../model/Winning';
import Input from '../views/Input';
import Output from '../views/Output';

class WinningController {
  #winningNumber;

  #bonusNumber;

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
    this.#winningNumber = winning;
    this.#bonusNumber = bonus;
  }

  async produceStatistics() {
    Output.printStatistic();
  }

  calculateRank() {
    const winning = new Winning();
    if (this.#isFirstRank()) {
      winning.setWinningResult();
    }
  }

  #isFirstRank(lottoNumbers) {
    return this.#winningNumber.every((number) => lottoNumbers.includes(number));
  }

}
export default WinningController;
