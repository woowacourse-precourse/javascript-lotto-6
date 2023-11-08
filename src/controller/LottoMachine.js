import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import LottoPlayer from '../model/LottoPlayer.js';
import Lotto from '../Lotto.js';
import OutputView from '../view/OutputView.js';
import { LOTTO_MACHINE_RULES, LOTTO_RULES } from '../constants/Rules.js';
import { ERROR_MESSAGE } from '../constants/Messages.js';

export default class LottoMachine {
  #player;

  #winningNumbers;

  #bonusNumber;

  #INFINITE;

  constructor() {
    this.#INFINITE = true;
    this.#bonusNumber = 0;
  }

  async run() {
    this.#player = new LottoPlayer(await this.#getPurchaseAmount());
    this.#makeLottoNumbers(this.#player.getPurchaseAmount());
    OutputView.printLottoTickets(this.#player.getLottoTickets());
    this.#winningNumbers = await this.#getWinningNumbers();
    this.#bonusNumber = await this.#getBonusNumber();
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
    while (this.#INFINITE) {
      try {
        const purchaseAmountInput = await InputView.readPurchaseAmount();
        const parsePurchaseAmount = Number(purchaseAmountInput);

        this.#purchaseAmountValidate(parsePurchaseAmount);

        return parsePurchaseAmount;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  #purchaseAmountValidate(purchaseAmount) {
    if (purchaseAmount % LOTTO_MACHINE_RULES.inputUnit !== 0) {
      throw new Error(ERROR_MESSAGE.unit);
    }
  }

  async #getWinningNumbers() {
    OutputView.printNewLine();
    while (this.#INFINITE) {
      try {
        const winningNumbersInput = await InputView.readWinningNumbers();

        return new Lotto(winningNumbersInput.split(',').map((number) => Number(number)));
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async #getBonusNumber() {
    OutputView.printNewLine();
    while (this.#INFINITE) {
      try {
        const bonusNumberInput = await InputView.readBonusNumber();
        const parseBonusNumber = Number(bonusNumberInput);

        this.#bonusNumberValidate(parseBonusNumber);

        return parseBonusNumber;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  #bonusNumberValidate(bonusNumber) {
    const ONLY_DIGIT_PATTERN = /^\d+$/;

    if (!ONLY_DIGIT_PATTERN.test(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.notNumber);
    }

    if (this.#winningNumbers.getNumbers().includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.duplication);
    }

    if (bonusNumber < LOTTO_RULES.minNumber || bonusNumber > LOTTO_RULES.maxNumber) {
      throw new Error(ERROR_MESSAGE.lottoNumber.notInRange);
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
    const rankCountsObjectEntries = Object.entries(this.#player.getRankCounts()).reverse();

    OutputView.printwinningStats();
    rankCountsObjectEntries.forEach(([rank, counts]) => {
      OutputView.printCorrectCounts(rank, counts);
    });

    this.#player.calculateWinningAmount();
  }

  #calculateProfit() {
    const roundProfit = ((this.#player.getWinningAmount() / this.#player.getPurchaseAmount()) * 100).toFixed(1);

    OutputView.printProfit(roundProfit);
  }
}
