import { PRICE_UNIT, Random, ERROR_LOTTO_TYPE, ERROR_LOTTO_REPEAT, Console } from './Constant';
import InputView from './InputView';
import Lotto from './Lotto';
import OutputView from './OutputView';

class LottoGame {
  #purchaseAmount;
  #lottoList;
  #winningLotto;
  #bonusNumber;
  #result;
  #prize;

  async gameStart() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
    const count = this.getLottoCount();
    this.#lottoList = await this.getRandomLottoList(count);

    this.printLottoListInfo();

    this.#winningLotto = await this.getWinningLotto();
    this.#bonusNumber = await this.getBonusNumber();

    this.initResult();
    await this.checkResult();
    this.#prize = await this.calculateRevenuRate();
    this.printResult();
  }

  getLottoCount() {
    const lottoCount = Math.floor(this.#purchaseAmount / PRICE_UNIT);
    return lottoCount;
  }

  async getRandomLottoList(count) {
    const lottoList = [];
    for (let i = 0; i < count; i++) {
      const randomNumbers = await this.getRandomNumbers();
      lottoList.push(new Lotto(randomNumbers));
    }
    return lottoList;
  }

  async getRandomNumbers() {
    const randomNumbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedList = randomNumbers.sort((a, b) => a - b);
    return sortedList;
  }

  printLottoListInfo() {
    OutputView.printLottoCount(this.#lottoList);
    this.#lottoList.forEach(lotto => {
      OutputView.printLotto(lotto.numbers);
    });
  }

  async getWinningLotto() {
    const inputWinningLotto = await InputView.readWinningNumbers();
    return new Lotto(inputWinningLotto);
  }

  async getBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumbers();
      this.repeatCheckValidator(bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }

  repeatCheckValidator(bonusNumber) {
    if (this.#winningLotto.numbers.includes(bonusNumber)) {
      throw new Error(ERROR_LOTTO_REPEAT);
    }
  }

  initResult() {
    this.#result = {
      1: { count: 0, prize: 5_000 },
      2: { count: 0, prize: 50_000 },
      3: { count: 0, prize: 1_500_000 },
      4: { count: 0, prize: 30_000_000 },
      5: { count: 0, prize: 2_000_000_000 },
    };
  }

  async checkResult() {
    for (const ticket of this.#lottoList) {
      const matchingNumbers = this.getMatchingNumbers(ticket);
      this.countLotto(matchingNumbers, ticket);
    }
  }

  getMatchingNumbers(ticket) {
    const matchingNumbers = ticket.numbers.filter(number =>
      this.#winningLotto.numbers.includes(number),
    );
    return matchingNumbers;
  }

  countLotto(matchingNumbers, ticket) {
    if (matchingNumbers.length === 6) {
      this.#result[5].count++;
    } else if (matchingNumbers.length === 5 && ticket.numbers.includes(this.#bonusNumber)) {
      this.#result[4].count++;
    } else if (matchingNumbers.length === 5) {
      this.#result[3].count++;
    } else if (matchingNumbers.length === 4) {
      this.#result[2].count++;
    } else if (matchingNumbers.length === 3) {
      this.#result[1].count++;
    }
  }

  printResult() {
    OutputView.printResultStastics(this.#result);
    OutputView.printRevenueRate(this.#prize);
  }

  async calculateRevenuRate() {
    const sumPrize = this.getSumPrize();
    const ratePrize = (sumPrize / this.#purchaseAmount) * 100;
    return ratePrize.toFixed(1);
  }

  getSumPrize() {
    let prize = 0;
    Object.keys(this.#result).forEach(rank => {
      prize += this.#result[rank].count * this.#result[rank].prize;
    });
    return prize;
  }

  get lottoList() {
    return this.#lottoList;
  }

  get winningLotto() {
    return this.#winningLotto;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  get result() {
    return this.#result;
  }
}

export default LottoGame;
