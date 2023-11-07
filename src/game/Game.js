import InputView from '../view/InputView.js';
import Purchase from '../domain/Purchase.js';
import OutputView from '../view/OutputView.js';
// import Lotto from '../domain/Lotto.js';
// import Bonus from '../domain/Bonus.js';
// import Count from '../domain/Count.js';
// import { MissionUtils } from '@woowacourse/mission-utils';
// import Result from '../domain/Result.js';
// import { OUTPUT } from '../constants/messages.js';
import Lottos from '../domain/Lottos.js';
import WinningNumber from '../domain/WinningNumber.js';
import BonusNumber from '../domain/BonusNumber.js';
import Rank from '../domain/Rank.js';

class Game {
  #quantity;
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #winningStatistic;
  #revenueRate;

  constructor() {
    // this.#quantity;
    // this.#lottos;
    // this.#winningNumbers;
    // this.#bonusNumber;
  }

  async playGame() {
    await this.#purchase();
  }

  async #purchase() {
    const amount = await InputView.purchaseLotto();
    await this.#handlePurchase(amount);
  }

  #handlePurchase = async (amount) => {
    this.#quantity = new Purchase(amount);
    this.#lottos = new Lottos(this.#quantity.getAmount());
    OutputView.printPurchaseAmount(this.#quantity.getAmount());
    OutputView.printLottos(this.#lottos.getLottos());
    await this.#askWinningNumbers();
  };

  async #askWinningNumbers() {
    const winningNumber = await InputView.readWinningNumbers();
    this.#winningNumbers = new WinningNumber(winningNumber);
    await this.#askBonusNumber();
  }

  // #handleWinningNumbers = async (numbers) => {
  //   this.#winningNumbers = await new Lotto(numbers).getWinningNumbers();
  //   await this.#askBonusNumber();
  // };

  async #askBonusNumber() {
    const bonusNumber = await InputView.readBonusNumbers(this.#winningNumbers.getWinningNumber());
    this.#bonusNumber = new BonusNumber(bonusNumber);
    this.#winningStatistic = new Rank(this.#lottos.getLottos());
    this.#displayResult();
  }

  #displayResult() {
    const winningStatistic = this.#winningStatistic.getRankStatistic({
      winningNumber: this.#winningNumbers.getWinningNumber(),
      bonusNumber: this.#bonusNumber.getBonusNumber(),
    });
    OutputView.printResultStatistic(winningStatistic);
    this.#revenueRate = this.#quantity.getRevenueRate(winningStatistic);
    OutputView.printRevenueResult(this.#revenueRate);
    return;
  }

  // #handleBonusNumber = (number) => {
  //   const BONUS_NUMBER = Number(number);
  //   this.#bonusNumber = new Bonus(BONUS_NUMBER, this.#winningNumbers).getBonusNumber();

  //   this.#getReward();
  // };

  // #getReward() {
  //   const count = new Count(this.#lottos, this.#winningNumbers, this.#bonusNumber);

  //   this.#setResult(count);
  //   this.#getBenefit(count.totalReward);
  // }

  // #setResult(count) {
  //   MissionUtils.Console.print(OUTPUT.RESULT_TITLE);

  //   Object.values(count.matchList).forEach((match, index) => {
  //     const result = new Result(match, count.matchMessageList[index], count.rewardList[index]);
  //     count.totalReward += result.totalReward;
  //   });
  // }

  // #getBenefit(totalReward) {
  //   const benefit = ((totalReward / this.#quantity) * 100) / 1000;
  //   const benefitRate = Math.round(benefit * 10) / 10;

  //   this.#setBenefit(benefitRate);
  // }

  // #setBenefit(rate) {
  //   OutputView.printBenefitRate(rate);
  // }
}

export default Game;
