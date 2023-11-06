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
    this.handlePurchase(amount);
  }

  handlePurchase = (amount) => {
    this.#quantity = new Purchase(amount).getAmount();
    // if (isNaN(this.#quantity)) {
    //   throw new Error('[ERROR] 잘못된 값을 입력하였습니다.');
    // }
    OutputView.printQuantity(this.#quantity);
    this.#lottos = LottoMaker.generate(this.#quantity);
    OutputView.printLottos(this.#lottos);
    this.askWinningNumbers();
  };

  async askWinningNumbers() {
    this.winningNumbers = await InputView.readWinningNumbers();
    this.handleWinningNumbers(this.winningNumbers);
  }

  handleWinningNumbers = (numbers) => {
    const WINNING_LIST = numbers.split(',').map((number) => {
      return (number = parseInt(number, 10));
    });
    this.winningNumbers = new Lotto(WINNING_LIST).getWinningNumbers();
    this.askBonusNumber();
  };

  async askBonusNumber() {
    this.bonusNumber = await InputView.readBonusNumbers();
    this.handleBonusNumber(this.bonusNumber);
  }

  handleBonusNumber = (number) => {
    const BONUS_NUMBER = parseInt(number, 10);
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
