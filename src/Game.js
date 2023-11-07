import InputView from './InputView.js';
import Purchase from './Purchase.js';
import OutputView from './OutputView.js';
import LottoMaker from './LottoMaker.js';
import Lotto from './Lotto.js';
import Bonus from './Bonus.js';
import Count from './Count.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Result from './Result.js';
import { OUTPUT } from './constants/messages.js';

class Game {
  #quantity;
  #lottos;
  winningNumbers;
  bonusNumber;

  constructor() {
    this.#quantity;
    this.#lottos;
    this.winningNumbers;
    this.bonusNumber;
  }

  async purchase() {
    const amount = await InputView.purchaseLotto();
    await this.handlePurchase(amount);
  }

  handlePurchase = async (amount) => {
    this.#quantity = new Purchase(amount).getAmount();
    OutputView.printQuantity(this.#quantity);
    this.#lottos = await LottoMaker.generate(this.#quantity);
    OutputView.printLottos(this.#lottos);
    await this.askWinningNumbers();
  };

  async askWinningNumbers() {
    this.winningNumbers = await InputView.readWinningNumbers();
    await this.handleWinningNumbers(this.winningNumbers);
  }

  handleWinningNumbers = async (numbers) => {
    this.winningNumbers = await new Lotto(numbers).getWinningNumbers();
    await this.askBonusNumber();
  };

  async askBonusNumber() {
    this.bonusNumber = await InputView.readBonusNumbers();
    await this.handleBonusNumber(this.bonusNumber);
  }

  handleBonusNumber = (number) => {
    const BONUS_NUMBER = Number(number);
    this.bonusNumber = new Bonus(BONUS_NUMBER, this.winningNumbers).getBonusNumber();

    this.getReward();
  };

  getReward() {
    const count = new Count(this.#lottos, this.winningNumbers, this.bonusNumber);

    this.setResult(count);
    this.getBenefit(count.totalReward);
  }

  setResult(count) {
    MissionUtils.Console.print(OUTPUT.RESULT_TITLE);

    Object.values(count.matchList).forEach((match, index) => {
      const result = new Result(match, count.matchMessageList[index], count.rewardList[index]);
      count.totalReward += result.totalReward;
    });
  }

  getBenefit(totalReward) {
    const benefit = ((totalReward / this.#quantity) * 100) / 1000;
    const benefitRate = Math.round(benefit * 10) / 10;

    this.setBenefit(benefitRate);
  }

  setBenefit(rate) {
    OutputView.printBenefitRate(rate);
  }
}

export default Game;
