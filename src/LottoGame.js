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
    await this.getPurchaseAmount();
    const count = await this.getLottoCount();
    await this.getRandomLottoList(count);

    this.printLottoListInfo();

    await this.getWinningLotto();
    await this.getBonusNumber();

    await this.checkResult();
    this.#prize = await this.calculateRevenuRate();
    this.printResult();
  }

  async getPurchaseAmount() {
    this.#purchaseAmount = await InputView.readPurchaseAmount();
  }

  async getLottoCount() {
    const lottoCount = await (this.#purchaseAmount / PRICE_UNIT);
    return lottoCount;
  }

  async getRandomLottoList(count) {
    this.#lottoList = [];

    for (let i = 0; i < count; i++) {
      const randomNumbers = await this.getRandomNumbers();
      this.#lottoList.push(new Lotto(randomNumbers));
    }
  }

  async getRandomNumbers() {
    const randomNumbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedList = await this.sortRandomNumbers(randomNumbers);
    return sortedList;
  }

  async sortRandomNumbers(numbers) {
    const sortedList = await numbers.sort((a, b) => a - b);
    return sortedList;
  }

  printLottoListInfo() {
    OutputView.printLottoCount(this.#lottoList);
    this.#lottoList.map(lotto => {
      OutputView.printLotto(lotto.numbers);
    });
  }

  async getWinningLotto() {
    const inputWinningLotto = await InputView.readWinningNumbers();
    this.#winningLotto = new Lotto(inputWinningLotto);
  }

  async getBonusNumber() {
    try {
      this.#bonusNumber = await InputView.readBonusNumbers();
      if (this.#winningLotto.numbers.includes(this.#bonusNumber)) {
        throw new Error(ERROR_LOTTO_REPEAT);
      }
    } catch (error) {
      Console.print(error.message);
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
    await this.initResult();
    await this.#lottoList.forEach(async ticket => {
      const matchingNumbers = await this.getMatchingNumbers(ticket);
      await this.countLotto(matchingNumbers);
    });
  }

  async getMatchingNumbers(ticket) {
    const matchingNumbers = await ticket.numbers.filter(number =>
      this.#winningLotto.numbers.includes(number),
    );
    return matchingNumbers;
  }

  countLotto(matchingNumbers) {
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
    const sumPrize = await this.getSumPrize();
    const ratePrize = (await (sumPrize / this.#purchaseAmount)) * 100;
    return ratePrize.toFixed(1);
  }

  async getSumPrize() {
    let prize = 0;
    await Object.keys(this.#result).map(rank => {
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
