import Lotto from '../Lotto.js';
import InputValidator from '../validator/InputValidator.js';
import formatLottoNumbers from '../utils/formatLottoNumbers.js';
import formatLottoMatchResults from '../utils/formatLottoMatchResults.js';
import { MESSAGE } from '../constants/messages.js';
import { GAME_RULE } from '../constants/gameRule.js';

class LottoGameController {
  constructor({
    money,
    lottoResult,
    lottoTickets,
    randomNumberGeneration,
    inputView,
    outputView,
  }) {
    this.money = money;
    this.lottoResult = lottoResult;
    this.lottoTickets = lottoTickets;
    this.randomNumberGeneration = randomNumberGeneration;
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    await this.#buyLottos();
    this.#printMyLottos();
    await this.#setLottoNumbers();
    this.#printGameResult();
  }

  async #setLottoNumbers() {
    await this.#setWinningNumbers();
    await this.#setBonusNumber();
  }

  async #getUserInputAndSet(setterFn, getterCallback) {
    while (true) {
      try {
        setterFn(await getterCallback());
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }
  }

  async #setWinningNumbers() {
    await this.#getUserInputAndSet(
      this.lottoResult.setWinningNumbers.bind(this.lottoResult),
      this.#getWinningNumbers.bind(this),
    );
  }

  async #setBonusNumber() {
    await this.#getUserInputAndSet(
      this.lottoResult.setBonusNumber.bind(this.lottoResult),
      this.#getBonusNumber.bind(this),
    );
  }

  #printMyLottos() {
    const loopCount = this.money.getPurchaseCount();
    Array.from({ length: loopCount }).forEach((_, i) => {
      this.#addLottoTicket();
      const lottoInstance = this.lottoTickets.getLottoTicket(i);
      this.outputView.print(
        formatLottoNumbers(lottoInstance.getLottoNumbers()),
      );
    });
  }

  #createLottoInstance() {
    return new Lotto(this.#generateLottoNumbers().sort((a, b) => a - b));
  }

  #addLottoTicket() {
    const lotto = this.#createLottoInstance();
    this.lottoTickets.addLotto(lotto);
  }

  async #buyLottos() {
    while (true) {
      try {
        const money = await this.#getPurchaseAmount();
        this.money.setMoney(money);
        this.#printPurchaseCount();
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }
  }

  async #getPurchaseAmount() {
    const money = Number(await this.inputView.getUserInputAsync(MESSAGE.INPUT));
    InputValidator.validateMoney(money);

    return money;
  }

  #printPurchaseCount() {
    const purchaseCount = this.money.getPurchaseCount();
    this.outputView.print(`\n${purchaseCount}${MESSAGE.BUY}`);
  }

  #generateLottoNumbers() {
    return this.randomNumberGeneration.generateLottoNumber();
  }

  async #getWinningNumbers() {
    const winningNumbers = await this.inputView.getUserInputAsync(
      MESSAGE.WIN_NUMBER,
    );
    InputValidator.validateWinningNumbers(
      winningNumbers.split(GAME_RULE.SEPARATOR),
    );

    return winningNumbers.split(GAME_RULE.SEPARATOR).map(Number);
  }

  async #getBonusNumber() {
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

  #printGameResult() {
    this.outputView.print(MESSAGE.WINNING_STATS);
    this.#calcLottoMatchResult();
    this.outputView.printLottoResult(this.lottoResult.getMatchCount());
    this.#printProfit();
  }

  #printProfit() {
    const purchaseAmount = this.money.getMoney();
    const profit = this.lottoResult.getProfit(purchaseAmount);
    this.outputView.printTotalProfit(profit);
  }

  #calcLottoMatchResult() {
    const winningMatchCounts = this.#getWinningNumberMatchCounts();
    const hasBonusMatches = this.#hasBonusNumberMatches();
    const matchResults = formatLottoMatchResults(
      winningMatchCounts,
      hasBonusMatches,
    );
    this.lottoResult.setMatchCount(matchResults);
  }

  #getWinningNumberMatchCounts() {
    const winningNumberMatchCounts =
      this.lottoTickets.getWinningNumberMatchCount(
        this.lottoResult.getWinningNumbers(),
      );

    return winningNumberMatchCounts;
  }

  #hasBonusNumberMatches() {
    const hasBonusMatch = this.lottoTickets.includesBonusNumber(
      this.lottoResult.getBonusNumber(),
    );

    return hasBonusMatch;
  }
}

export default LottoGameController;
