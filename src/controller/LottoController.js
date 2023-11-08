import LottoModel from '../model/LottoModel.js';
import Lotto from '../Lotto.js';
import validation from '../utils/validation.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';
import { PRIZE_AMOUNTS } from '../constants/constants.js';

class LottoController {
  #Lotto;

  #LottoModel;

  constructor() {
    this.count = 0;
    this.lottoNumbersList = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  async getPurchaseAmount() {
    try {
      const input = await inputView.purchaseAmount();
      validation.validatePurchaseAmount(input);
      const count = input / 1000;
      this.count = count;
      this.#LottoModel = new LottoModel(count);
    } catch (error) {
      outputView.printError(error.message);
      await this.getPurchaseAmount();
    }
  }

  printLottoNumbers() {
    outputView.printPurchaseSummary(this.count);
    const lottoNumbersList = this.#LottoModel.generateLottoNumbers();
    lottoNumbersList.map((list) => outputView.printLottoNumbersList(list));
    this.lottoNumbersList = lottoNumbersList;
  }

  async getWinningNumbers() {
    try {
      const input = await inputView.winningNumbers();
      validation.validateWinningNumbers(input);
      const numbers = input.split(',').map(Number);
      this.#Lotto = new Lotto(numbers);
      this.winningNumbers = this.#Lotto.getWinningNumbers();
    } catch (error) {
      outputView.printError(error.message);
      await this.getWinningNumbers();
    }
  }

  async getBonusNumber() {
    try {
      const input = await inputView.bonusNumber();
      const parsedInput = parseInt(input, 10);
      validation.validateBonusNumber(parsedInput, this.winningNumbers);
      this.bonusNumber = parsedInput;
    } catch (error) {
      outputView.printError(error.message);
      await this.getBonusNumber();
    }
  }

  calculateMatchCount() {
    this.lottoNumbersList.forEach((list) => {
      const correctCnt = this.countCorrectNumbers(list);
      this.updateResult(correctCnt, list);
    });
  }

  countCorrectNumbers(list) {
    return this.winningNumbers.reduce(
      (correctCnt, number) =>
        list.includes(number) ? correctCnt + 1 : correctCnt,
      0,
    );
  }

  updateResult(correctCnt, list) {
    if (correctCnt === 6) {
      this.result[1] += 1;
    } else if (correctCnt === 5 && list.includes(this.bonusNumber)) {
      this.result[2] += 1;
    } else if (correctCnt === 5) {
      this.result[3] += 1;
    } else if (correctCnt === 4) {
      this.result[4] += 1;
    } else if (correctCnt === 3) {
      this.result[5] += 1;
    }
  }

  printResult() {
    outputView.printTitle();
    const ranks = Object.keys(this.result)
      .map(Number)
      .sort((a, b) => b - a);
    ranks.forEach((rank) => {
      outputView.printResult(parseInt(rank, 10), this.result[rank]);
    });
  }

  calculateProfitRate() {
    const ticketPrice = 1000;
    const totalInvestment = this.count * ticketPrice;

    const totalPrize = Object.keys(this.result).reduce((total, rank) => {
      const rankCount = this.result[rank];
      const prizeAmount = PRIZE_AMOUNTS[rank];
      return total + rankCount * prizeAmount;
    }, 0);

    const profitRate = (totalPrize / totalInvestment) * 100;
    const roundedProfitRate = Math.round(profitRate * 100) / 100;
    outputView.printProfitRate(roundedProfitRate);
  }
}

export default LottoController;
