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
    this.#lottoList = [];
    this.#purchaseAmount = await InputView.readPurchaseAmount();
    const lottoCount = this.#purchaseAmount / PRICE_UNIT;
    for (let i = 0; i < lottoCount; i++) {
      const randomNumbers = this.getRandomNumbers();
      this.#lottoList.push(new Lotto(randomNumbers));
    }
    // OutputView.printLottoCount(this.#lottoList);
    // this.#lottoList.map(lotto => {
    //   OutputView.printLotto(lotto.numbers);
    // });
    this.#winningLotto = new Lotto(await InputView.readWinningNumbers());

    try {
      this.#bonusNumber = await InputView.readBonusNumbers();
      if (this.#winningLotto.numbers.includes(this.#bonusNumber)) {
        throw new Error(ERROR_LOTTO_REPEAT);
      }
      this.checkResult();
    } catch (error) {
      Console.print(error.message);
    }
  }

  getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedList = this.sortRandomNumbers(randomNumbers);
    return sortedList;
  }

  sortRandomNumbers(numbers) {
    const sortedList = numbers.sort((a, b) => a - b);
    return sortedList;
  }

  checkResult() {
    this.#result = {
      1: { count: 0, prize: 2_000_000_000 },
      2: { count: 0, prize: 30_000_000 },
      3: { count: 0, prize: 1_500_000 },
      4: { count: 0, prize: 50_000 },
      5: { count: 0, prize: 5_000 },
    };
    this.#lottoList.forEach(ticket => {
      const matchingNumbers = ticket.numbers.filter(number =>
        this.#winningLotto.numbers.includes(number),
      );
      console.log(matchingNumbers);

      if (matchingNumbers.length === 6) {
        this.#result[1].count++;
      } else if (matchingNumbers.length === 5 && ticket.numbers.includes(this.#bonusNumber)) {
        this.#result[2].count++;
      } else if (matchingNumbers.length === 5) {
        this.#result[3].count++;
      } else if (matchingNumbers.length === 4) {
        this.#result[4].count++;
      } else if (matchingNumbers.length === 3) {
        this.#result[5].count++;
      }
    });
    console.log(this.#result);
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
