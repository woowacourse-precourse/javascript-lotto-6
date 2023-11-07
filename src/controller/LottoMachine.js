import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import LottoPlayer from '../model/LottoPlayer.js';
import Lotto from '../Lotto.js';
import OutputView from '../view/OutputView.js';
import { LOTTO_MACHINE_RULES, LOTTO_RULES, MATCHES_TO_RANK, WINNING_RANK_TO_PRIZE } from '../constants/Rules.js';
import { ERROR_MESSAGE } from '../constants/Messages.js';

export default class LottoMachine {
  #player;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#bonusNumber = 0;
  }

  async run() {
    this.#player = new LottoPlayer(await this.#getPurchaseAmount());
    this.#makeLottoNumbers(this.#player.getPurchaseAmount());
    OutputView.printLottoTickets(this.#player.getLottoTickets());
    this.#winningNumbers = await this.#getWinningNumbers();
    OutputView.printNewLine();
    this.#bonusNumber = await this.#getBonusNumber();
    OutputView.printNewLine();
    this.#findMatchCount();
    this.#calculateWinningStats();
    this.#calculateProfit();
  }

  #makeOneLotto() {
    // 추후 리팩토링 시 분리 고려
    const pickRandomUniqueNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_RULES.minNumber,
      LOTTO_RULES.maxNumber,
      LOTTO_RULES.pickCount,
    );

    const sortNumbers = this.#getAscendingOrderedNumbers(pickRandomUniqueNumbers);

    return new Lotto(sortNumbers);
  }

  #getAscendingOrderedNumbers(numbers) {
    return numbers.sort((number1, number2) => number1 - number2);
  }

  #makeLottoNumbers(purchaseAmount) {
    const lottoTicketCount = purchaseAmount / LOTTO_MACHINE_RULES.inputUnit;

    for (let i = 1; i <= lottoTicketCount; i += 1) {
      this.#player.setLottoTickets(this.#makeOneLotto());
    }

    OutputView.printNewLine();
  }

  async #getPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmountInput = await InputView.readPurchaseAmount();
        const parsePurchaseAmount = Number(purchaseAmountInput);
        await this.#purchaseAmountValidate(parsePurchaseAmount);

        return parsePurchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async #purchaseAmountValidate(purchaseAmount) {
    if (purchaseAmount % LOTTO_MACHINE_RULES.inputUnit !== 0) {
      throw new Error(ERROR_MESSAGE.unit);
    }
  }

  async #getWinningNumbers() {
    while (true) {
      try {
        const winningNumbersInput = await InputView.readWinningNumbers();

        return new Lotto(winningNumbersInput.split(',').map((number) => Number(number)));
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async #getBonusNumber() {
    while (true) {
      try {
        const bonusNumberInput = await InputView.readBonusNumber();
        this.#bonusNumberValidate(bonusNumberInput);

        return Number(bonusNumberInput);
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  #bonusNumberValidate(bonusNumberInput) {
    const ONLY_DIGIT_PATTERN = /^\d+$/;

    if (!ONLY_DIGIT_PATTERN.test(bonusNumberInput)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }

    if (this.#winningNumbers.getNumbers().includes(Number(bonusNumberInput))) {
      throw new Error(ERROR_MESSAGE.duplication);
    }
  }

  #findMatchCount() {
    this.#player.getLottoTickets().forEach((lotto) => {
      const matchCount = lotto
        .getNumbers()
        .filter((number) => this.#winningNumbers.getNumbers().includes(number)).length;

      if (LOTTO_MACHINE_RULES.minimumWiningCount <= matchCount) {
        this.#player.setRankCounts(matchCount, !!this.#bonusNumber);
      }
    });
  }

  #calculateWinningStats() {
    OutputView.printwinningStats();
    const rankCountsObjectEntries = Object.entries(this.#player.getRankCounts()).reverse();
    rankCountsObjectEntries.forEach(([rank, counts]) => {
      OutputView.printCorrectCounts(rank, MATCHES_TO_RANK[rank], WINNING_RANK_TO_PRIZE[rank], counts);
    });
  }

  #calculateProfit() {
    const roundProfit = ((this.#player.getWinningAmount() / this.#player.getPurchaseAmount()) * 100).toFixed(1);
    OutputView.printProfit(roundProfit);
  }
}
