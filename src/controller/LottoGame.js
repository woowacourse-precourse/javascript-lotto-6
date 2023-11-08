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
  #myWinningMoney = 0;

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

  getMoney() {
    return this.#money;
  }

  #validateMoney(input) {
    validateEmpty(input);
    validateNumber(input);
    validateDivisible(input);
  }

  /**
   * 입력받은 돈의 액수에 비례해 로또리스트에 로또 추가
   */
  #setMyLottoList() {
    const amount = this.#money / 1000;
    for (let i = 0; i < amount; i++) {
      this.#myLottos.add(Lotto.setLottery());
    }
  }

  getMyLottos() {
    return this.#myLottos;
  }

  /**
   * 당첨번호와 보너스번호 입력
   */
  async drawLotto() {
    await this.#winningLotto.setWinningNumber();
    await this.#winningLotto.setBonusNumber();
  }

  getWinningLotto() {
    return this.#winningLotto;
  }

  /**
   * 당첨된 로또 계산 및 통계 출력
   */
  async result() {
    printBeforeResult();
    this.#compareWinningNumber();
    printWinningStatus(this.#rewardCount);
    printMyBenefit(this.#calculateTotalBenefit());
  }

  /**
   * 매칭된 갯수와 보너스 넘버 매칭 유무를 바탕으로 rewardCount set
   */
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

  getRewardCount() {
    return this.#rewardCount;
  }

  /**
   * 한개의 로또와 당첨번호,보너스 번호를 비교
   * @param {number[]} lotto 한개의 로또
   * @param {number[]} winningNumbers 입력된 당첨 번호
   * @param {number} bonusNumber 입력된 보너스 번호
   * @returns 매칭된 로또 번호 갯수, 보너스 번호 매칭 유무 반환
   */
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
    this.#myWinningMoney =
      5000 * this.#rewardCount['3'] +
      50000 * this.#rewardCount['4'] +
      1500000 * this.#rewardCount['5'] +
      30000000 * this.#rewardCount['5b'] +
      200000000 * this.#rewardCount['6'];

    const myThrowMoney = this.#money;
    const myBenefit = (this.#myWinningMoney / myThrowMoney) * 100;

    return myBenefit.toLocaleString('ko-KR', { minimumFractionDigits: 1 });
  }

  getMyWinningMoney() {
    return this.#myWinningMoney;
  }
}

export default LottoGame;
