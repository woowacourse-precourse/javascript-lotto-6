import InputController from './InputController.js';
import ComputerOutput from '../view/ComputerOutput.js';
import Generator from '../model/Generator.js';
import { print } from '../utils/missionUtils.js';
import LottoStatistics from '../utils/LottoStatistics.js';

class Controller {
  constructor() {
    this.lottoStatistics = new LottoStatistics();
  }

  async run() {
    const getPrice = await InputController.getPriceControl();
    const generator = new Generator(getPrice);
    const lottoNumbers = generator.generateLottoNumbers();
    print('');
    ComputerOutput.printLottoTicketCount(lottoNumbers.length);
    ComputerOutput.printLottoNumbers(lottoNumbers);
    print('');
    const getWinningNumbers = await InputController.getWinningNumbersControl();
    print('');
    const getBonusNumber =
      await InputController.getBonusNumberControl(getWinningNumbers);
    const rankCounts = this.lottoStatistics.resultLottoRank(
      lottoNumbers,
      getWinningNumbers,
      getBonusNumber,
    );
    print('');
    const profitability =
      this.lottoStatistics.calculateProfitPercentage(getPrice);
    ComputerOutput.printWinningStats(rankCounts, profitability);
  }
}

export default Controller;
