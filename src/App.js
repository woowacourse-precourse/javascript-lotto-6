import LottoMachine from './LottoMachine';
import InputView from './view/InputView';
import OutputView from './view/OutputView';
import { CONSTANT } from './constants/constants';

class App {
  #lottoMachine;
  #matchPrizes;

  constructor() {
    this.#lottoMachine = new LottoMachine();
    this.#matchPrizes = {
      threeMatch: {
        count: CONSTANT.INITIAL_MATCH_COUNT,
        prize: CONSTANT.THREE_MATCH_PRIZE,
        text: CONSTANT.THREE_MATCH_TEXT,
      },
      fourMatch: {
        count: CONSTANT.INITIAL_MATCH_COUNT,
        prize: CONSTANT.FOUR_MATCH_PRIZE,
        text: CONSTANT.FOUR_MATCH_TEXT,
      },
      fiveMatch: {
        count: CONSTANT.INITIAL_MATCH_COUNT,
        prize: CONSTANT.FIVE_MATCH_PRIZE,
        text: CONSTANT.FIVE_MATCH_TEXT,
      },
      fiveMatchWithBonus: {
        count: CONSTANT.INITIAL_MATCH_COUNT,
        prize: CONSTANT.FIVE_MATCH_WITH_BONUS_PRIZE,
        text: CONSTANT.FIVE_MATCH_WITH_BONUS_TEXT,
      },
      sixMatch: {
        count: CONSTANT.INITIAL_MATCH_COUNT,
        prize: CONSTANT.SIX_MATCH_PRIZE,
        text: CONSTANT.SIX_MATCH_TEXT,
      },
    };
  }

  #setMatchCount() {
    const {
      threeMatchCount,
      fourMatchCount,
      fiveMatchCount,
      fiveMatchWithBonusCount,
      sixMatchCount,
    } = this.#lottoMachine.getCompareResult();

    this.#matchPrizes.threeMatch.count = threeMatchCount;
    this.#matchPrizes.fourMatch.count = fourMatchCount;
    this.#matchPrizes.fiveMatch.count = fiveMatchCount;
    this.#matchPrizes.fiveMatchWithBonus.count = fiveMatchWithBonusCount;
    this.#matchPrizes.sixMatch.count = sixMatchCount;
  }

  async play() {
    await this.#requestUserMoney();
    this.#lottoMachine.issueLottos();
    this.#printLottos();
    await this.#requestWinningNumbers();
    await this.#requestBonusNumbers();
    this.#lottoMachine.compareLottosWithWinningNumber();
    this.#printResult();
  }

  async #requestUserMoney() {
    let isVaildMoney = false;

    while (!isVaildMoney) {
      try {
        const money = await InputView.getMoney();
        this.#lottoMachine.setMoney(money);
        isVaildMoney = true;
      } catch (errorMessage) {
        OutputView.printError(errorMessage);
      }
    }
  }

  #printLottos() {
    const purchaseCount = this.#lottoMachine.getPurchaseCount();
    OutputView.printPurchaseCount(purchaseCount);

    for (let i = 0; i < purchaseCount; i++) {
      const lotto = this.#lottoMachine.getLotto(i);
      OutputView.printLotto(lotto);
    }
  }

  async #requestWinningNumbers() {
    let isVaildWinningNumber = false;

    while (!isVaildWinningNumber) {
      try {
        const winningNumbers = await InputView.getWinningNumber();
        this.#lottoMachine.setWinningNumbers(winningNumbers);
        isVaildWinningNumber = true;
      } catch (errorMessage) {
        OutputView.printError(errorMessage);
      }
    }
  }

  async #requestBonusNumbers() {
    let isVaildBonusNumber = false;

    while (!isVaildBonusNumber) {
      try {
        const bonusNumber = await InputView.getBonusNumber();
        this.#lottoMachine.setBonusNumber(bonusNumber);
        isVaildBonusNumber = true;
      } catch (errorMessage) {
        OutputView.printError(errorMessage);
      }
    }
  }

  #printResult() {
    OutputView.printMatchResult();
    OutputView.printSeparator();
    this.#printCompareResult();
    this.#printProfit();
  }

  #printCompareResult() {
    this.#setMatchCount();

    for (const matchType in this.#matchPrizes) {
      const { text, prize, count } = this.#matchPrizes[matchType];
      OutputView.printPrizeResult(text, prize, count);
    }
  }

  #printProfit() {
    const money = this.#lottoMachine.getMoney();
    const lottoPrize = this.#lottoMachine.getLottoPrize();
    const profitRate = (lottoPrize / money) * 100;
    const roundedProfitRate = profitRate.toFixed(1); //Math.round(profitRate * 100) / 100;

    OutputView.printTotalProfitRate(roundedProfitRate);
  }
}

export default App;
