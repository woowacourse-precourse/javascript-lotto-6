import { Random } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import LottoPlayer from '../model/LottoPlayer.js';
import Lotto from '../Lotto.js';
import OutputView from '../view/OutputView.js';
import { LOTTO_RULES, MATCHES_TO_RANK, WINNING_RANK_TO_PRIZE } from '../constants/Rules.js';

export default class LottoMachine {
  #player;

  #winningNumbers;

  #bonusNumber;

  #MINIMUM_WINNING_COUNT;

  #INPUT_UNIT;

  constructor() {
    this.#MINIMUM_WINNING_COUNT = 3;
    this.#INPUT_UNIT = 1000;
  }

  async run() {
    await this.#makeLottos();
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

    const sortNumbers = this.#sortLottoNumbers(pickRandomUniqueNumbers);

    return new Lotto(sortNumbers);
  }

  #sortLottoNumbers(lottoNumbers) {
    const sortLottoNumbers = lottoNumbers.sort((number1, number2) => number1 - number2);
    return sortLottoNumbers;
  }

  async #makeLottos() {
    const purchaseAmount = await this.#getPurchaseAmount();
    const lottoTicketCount = purchaseAmount / this.#INPUT_UNIT;

    // 추후 예외 처리 분리 예정
    if (purchaseAmount % this.#INPUT_UNIT !== 0) {
      throw new Error('[ERROR] 1,000원 단위의 금액을 입력하세요.');
    }

    this.#player = new LottoPlayer(purchaseAmount);

    for (let i = 1; i <= lottoTicketCount; i += 1) {
      this.#player.setLottoTickets(this.#makeOneLotto());
    }

    OutputView.printNewLine();
  }

  async #getPurchaseAmount() {
    const purchaseAmountInput = await InputView.readPurchaseAmount();
    return Number(purchaseAmountInput);
  }

  async #getWinningNumbers() {
    const winningNumbersInput = await InputView.readWinningNumbers();
    return new Lotto(winningNumbersInput.split(',').map((number) => Number(number)));
  }

  async #getBonusNumber() {
    const bonusNumberInput = await InputView.readBonusNumber();
    return Number(bonusNumberInput);
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
