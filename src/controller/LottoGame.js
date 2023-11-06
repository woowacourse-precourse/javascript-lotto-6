import Lotto from '../model/Lotto.js';
import LottoList from '../model/LottoList.js';
import { inputMoney } from '../view/inputPrompt.js';
import {
  validateDivisible,
  validateNumber,
  validateEmpty,
} from '../utils/validateFn.js';
import {
  printBeforeResult,
  printBuyLottery,
  printErrorMessage,
  printMyBenefit,
  printWinningStatus,
} from '../view/outputPompt.js';
import WinningLotto from '../model/WinningLotto.js';

class LottoGame {
  #money = 0;
  #myLottos = new LottoList();
  #winningLotto = new WinningLotto();
  #rewardCount = {
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    '5b': 0,
  };

  async buyLotto() {
    await this.#setMoney();
    this.#setMyLottoList();
    printBuyLottery(this.#myLottos.getLottoCount());
    this.#myLottos.printMyLottery();
  }

  async #setMoney() {
    try {
      let input = await inputMoney();
      this.#validateMoney(input);
      this.#money = parseInt(input);
    } catch (error) {
      printErrorMessage(error);
      await this.#setMoney();
    }
  }

  #validateMoney(input) {
    validateEmpty(input);
    validateNumber(input);
    validateDivisible(input);
  }

  #setMyLottoList() {
    const amount = this.#money / 1000;
    for (let i = 0; i < amount; i++) {
      this.#myLottos.add(Lotto.setLottery());
    }
  }

  async drawLotto() {
    await this.#winningLotto.setWinningNumber();
    await this.#winningLotto.setBonusNumber();
  }

  async result() {
    printBeforeResult();
    this.#compareWinningNumber();
    printWinningStatus(this.#rewardCount);
    printMyBenefit(this.#calculateTotalBenefit());
  }

  #compareWinningNumber() {
    const myLottoList = this.#myLottos.getMyLottoList();
    const winningNumbers = this.#winningLotto.getWinningNumber();
    const bonusNumber = this.#winningLotto.getBonusNumber();

    myLottoList.forEach((lotto) => {
      const [matchCount, hasBonusNumber] = this.#matchingOneLottery(
        lotto.getLottery(),
        winningNumbers,
        bonusNumber,
      );
      this.#setRewardCount(matchCount, hasBonusNumber);
    });
  }

  #matchingOneLottery(lotto, winningNumbers, bonusNumber) {
    const matchCount = lotto.filter((num) =>
      winningNumbers.includes(num),
    ).length;
    const hasBonusNumber = lotto.some((num) => {
      return num === bonusNumber;
    });

    return [matchCount, hasBonusNumber];
  }

  #setRewardCount(matchCount, hasBonusNumber) {
    if (matchCount < 3 || matchCount > 6) return;

    if (matchCount === 5) {
      hasBonusNumber
        ? this.#rewardCount['5b']++
        : this.#rewardCount[matchCount]++;
    } else {
      this.#rewardCount[matchCount]++;
    }
  }

  #calculateTotalBenefit() {
    const myWinningMoney =
      5000 * this.#rewardCount['3'] +
      50000 * this.#rewardCount['4'] +
      1500000 * this.#rewardCount['5'] +
      30000000 * this.#rewardCount['5b'] +
      200000000 * this.#rewardCount['6'];

    const myThrowMoney = this.#money;
    const myBenefit = (myWinningMoney / myThrowMoney) * 100;

    return myBenefit.toLocaleString('ko-KR', { minimumFractionDigits: 1 });
  }
}

export default LottoGame;
