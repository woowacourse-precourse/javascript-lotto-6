import { PRICE_UNIT, Random, ERROR_LOTTO_TYPE, ERROR_LOTTO_REPEAT, Console } from './Constant';
import InputView from './InputView';
import Lotto from './Lotto';
import OutputView from './OutputView';

class LottoGame {
  #purchaseAmount;
  #lottoList;
  #winningLotto;
  #bonusNumber;

  async gameStart() {
    this.#lottoList = [];
    this.#purchaseAmount = await InputView.readPurchaseAmount();
    const lottoCount = this.#purchaseAmount / PRICE_UNIT;
    for (let i = 0; i < lottoCount; i++) {
      const randomNumbers = this.getRandomNumbers();
      this.#lottoList.push(new Lotto(randomNumbers));
    }
    OutputView.printLottoCount(this.#lottoList);
    this.#lottoList.map(lotto => {
      OutputView.printLotto(lotto.numbers);
    });
    this.#winningLotto = new Lotto(await InputView.readWinningNumbers());

    try {
      this.#bonusNumber = await InputView.readBonusNumbers();
      if (this.#winningLotto.numbers.includes(this.#bonusNumber)) {
        throw new Error(ERROR_LOTTO_REPEAT);
      }
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

  get lottoList() {
    return this.#lottoList;
  }

  get winningLotto() {
    return this.#winningLotto;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoGame;
