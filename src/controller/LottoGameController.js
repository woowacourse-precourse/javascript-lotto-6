import Lotto from '../Lotto.js';
import Money from '../model/Money.js';
import InputValidator from '../validator/InputValidator.js';
import formatLottoNumbers from '../utils/formatLottoNumbers.js';
import { MESSAGE } from '../constants/messages.js';
import { GAME_RULE } from '../constants/gameRule.js';

class LottoGameController {
  #moneyInstance;

  constructor({
    lottoResult,
    lottoTickets,
    randomNumberGeneration,
    inputView,
    outputView,
  }) {
    this.lottoResult = lottoResult;
    this.lottoTickets = lottoTickets;
    this.randomNumberGeneration = randomNumberGeneration;
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    await this.buyLottos();
    this.printMyLottos();

    await this.setLottoNumbers();
    this.printStats();
  }

  async setLottoNumbers() {
    await this.setWinningNumbers();
    await this.setBonusNumber();
  }

  generateMatchResults(winningMatchCounts, hasBonusMatches) {
    return winningMatchCounts.map((winningCount, i) => ({
      count: winningCount,
      hasBonusNumber: hasBonusMatches[i],
    }));
  }

  async setWinningNumbers() {
    while (true) {
      try {
        this.lottoResult.setWinningNumbers(await this.getWinningNumbers());
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }
  }

  async setBonusNumber() {
    while (true) {
      try {
        this.lottoResult.setBonusNumber(await this.getBonusNumber());
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }
  }

  printMyLottos() {
    const loopCount = this.#moneyInstance.getPurchaseCount();
    Array.from({ length: loopCount }).forEach(() => {
      const lotto = this.createLottoInstance();
      this.addLottoTicket(lotto);
      this.outputView.print(formatLottoNumbers(lotto.getLottoNumbers()));
    });
  }

  addLottoTicket(lottoInstance) {
    this.lottoTickets.addLotto(lottoInstance);
  }

  createLottoInstance() {
    return new Lotto(this.generateLottoNumbers().sort((a, b) => a - b));
  }

  async createMoneyInstance() {
    const money = await this.getPurchaseAmount();
    return new Money(money);
  }

  async setMoney() {
    this.#moneyInstance = await this.createMoneyInstance();
  }

  async buyLottos() {
    while (true) {
      try {
        await this.setMoney();
        this.printPurchaseCount();
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }
  }

  async getPurchaseAmount() {
    const money = Number(await this.inputView.getUserInputAsync(MESSAGE.INPUT));
    InputValidator.validateMoney(money);
    return money;
  }

  printPurchaseCount() {
    const purchaseCount = this.#moneyInstance.getPurchaseCount();
    this.outputView.print(`\n${purchaseCount}${MESSAGE.BUY}`);
  }

  generateLottoNumbers() {
    return this.randomNumberGeneration.generateLottoNumber();
  }

  async getWinningNumbers() {
    const winningNumbers = await this.inputView.getUserInputAsync(
      MESSAGE.WIN_NUMBER,
    );
    InputValidator.validateWinningNumbers(
      winningNumbers.split(GAME_RULE.SEPARATOR),
    );
    return winningNumbers.split(GAME_RULE.SEPARATOR).map(Number);
  }

  async getBonusNumber() {
    const bonusNumber = await this.inputView.getUserInputAsync(
      MESSAGE.BONUS_NUMBER,
    );
    InputValidator.validateBonusNumber(bonusNumber);
    InputValidator.validateLottoNumbers(
      bonusNumber,
      this.lottoResult.getWinningNumbers(),
    );
    return Number(bonusNumber);
  }

  printStats() {
    this.outputView.print(MESSAGE.WINNING_STATS);

    const winningMatchCounts = this.getWinningNumberMatchCounts();
    const hasBonusMatches = this.hasBonusNumberMatches();
    const matchResults = this.generateMatchResults(
      winningMatchCounts,
      hasBonusMatches,
    );

    this.lottoResult.setMatchCount(matchResults);
    const userMoney = this.#moneyInstance.getMoney();
    const prizeMoney = this.lottoResult.getPrizeMoney();

    const profit = this.lottoResult.getProfit(userMoney, prizeMoney);

    this.outputView.printLottoResult(this.lottoResult.getMatchCount());
    this.outputView.printTotalProfit(profit);
  }

  getWinningNumberMatchCounts() {
    const winningNumberMatchCounts =
      this.lottoTickets.getWinningNumberMatchCount(
        this.lottoResult.getWinningNumbers(),
      );
    return winningNumberMatchCounts;
  }

  hasBonusNumberMatches() {
    const hasBonusMatch = this.lottoTickets.includesBonusNumber(
      this.lottoResult.getBonusNumber(),
    );
    return hasBonusMatch;
  }
}

export default LottoGameController;
