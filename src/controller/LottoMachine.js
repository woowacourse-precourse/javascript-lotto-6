import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import LottoPlayer from '../model/LottoPlayer.js';
import Lotto from '../Lotto.js';
import OutputView from '../view/OutputView.js';
import { LOTTO_RULES, MATCHES_TO_RANK, WINNING_RANK_TO_PRIZE } from '../constants/Rules.js';

export default class LottoMachine {
  #purchaseAmount;
  #player;
  #winningNumbers;
  #bonusNumber;
  #MINIMUM_WINNING_COUNT;
  #INPUT_UNIT;

  constructor() {
    this.#purchaseAmount = 0;
    this.#MINIMUM_WINNING_COUNT = 3;
    this.#INPUT_UNIT = 1000;
  }

  async run() {
    await this.#getPurchaseAmount();
    this.#makeLottos(this.#purchaseAmount);
    OutputView.printLottoTickets(this.#player.getLottoTickets());
    await this.#getWinningNumbers();
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

    const sortNumbers = this.#sortLottoNumbers(pickRandomUniqueNumbers);

    return new Lotto(sortNumbers);
  }

  #sortLottoNumbers(lottoNumbers) {
    const sortLottoNumbers = lottoNumbers.sort((number1, number2) => number1 - number2);
    return sortLottoNumbers;
  }

  #makeLottos(purchaseAmount) {
    const lottoTicketCount = purchaseAmount / this.#INPUT_UNIT;
    this.#player = new LottoPlayer(purchaseAmount);

    for (let i = 1; i <= lottoTicketCount; i += 1) {
      this.#player.setLottoTickets(this.#makeOneLotto());
    }

    OutputView.printNewLine();
  }

  async #getPurchaseAmount() {
    try {
      const purchaseAmountInput = await InputView.readPurchaseAmount();
      const parsePurchaseAmount = Number(purchaseAmountInput);
      await this.#purchaseAmountValidate(parsePurchaseAmount);
      this.#purchaseAmount = purchaseAmountInput;
    } catch (e) {
      Console.print(e.message);
      await this.#getPurchaseAmount();
    }
  }

  async #purchaseAmountValidate(purchaseAmount) {
    if (purchaseAmount % this.#INPUT_UNIT !== 0) {
      throw new Error('[ERROR] 1,000원 단위만 입력 가능합니다.');
    }
  }

  async #getWinningNumbers() {
    try {
      const winningNumbersInput = await InputView.readWinningNumbers();
      this.#winningNumbers = new Lotto(winningNumbersInput.split(',').map((number) => Number(number)));
    } catch (e) {
      Console.print(e.message);
      await this.#getWinningNumbers();
    }
  }

  async #getBonusNumber() {
    try {
      const bonusNumberInput = await InputView.readBonusNumber();
      const ONLY_DIGIT_PATTERN = /^\d+$/;

      if (!ONLY_DIGIT_PATTERN.test(bonusNumberInput)) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
      }

      if (this.#winningNumbers.getNumbers().includes(Number(bonusNumberInput))) {
        throw new Error('[ERROR] 당첨 숫자에 포함되지 않은 숫자를 입력하세요.');
      }
      this.#bonusNumber = Number(bonusNumberInput);
    } catch (e) {
      Console.print(e.message);
      await this.#getBonusNumber();
    }
  }

  #findMatchCount() {
    this.#player.getLottoTickets().forEach((lotto) => {
      const isIncludedBonusNumber = lotto.getNumbers().includes(this.#bonusNumber);
      const correctCount = lotto
        .getNumbers()
        .filter((number) => this.#winningNumbers.getNumbers().includes(number)).length;

      if (correctCount >= this.#MINIMUM_WINNING_COUNT) {
        this.#player.setRankCounts(correctCount, isIncludedBonusNumber);
      }
    });
  }

  #calculateWinningStats() {
    OutputView.printwinningStats();
    const rankCountsObjectEntries = Object.entries(this.#player.getRankCounts()).reverse();
    rankCountsObjectEntries.forEach(([rank, counts]) => {
      if (rank === '2') {
        OutputView.printCorrectCountsContainBonusBall(MATCHES_TO_RANK[rank], WINNING_RANK_TO_PRIZE[rank], counts);
      } else {
        OutputView.printCorrectCounts(MATCHES_TO_RANK[rank], WINNING_RANK_TO_PRIZE[rank], counts);
      }
    });
  }

  #calculateProfit() {
    const roundProfit = ((this.#player.getWinningAmount() / this.#player.getPurchaseAmount()) * 100).toFixed(1);
    OutputView.printProfit(roundProfit);
  }
}
