import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoError from './error/LottoError.js';

class GuessLotto {
  #winningNumbers = [];

  #guessBonus = null;

  #lottoPieces = 0;

  #guessNumbers = [];

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  setWinningNumbers(numbers) {
    this.#winningNumbers = numbers;
  }

  getGuessBonus() {
    return this.#guessBonus;
  }

  setGuessBonus(bonus) {
    this.#guessBonus = bonus;
  }

  getLottoPieces() {
    return this.#lottoPieces;
  }

  setLottoPieces(pieces) {
    this.#lottoPieces = pieces;
  }

  getGuessNumbers() {
    return this.#guessNumbers;
  }

  setGuessNumbers(numbers) {
    this.#guessNumbers = numbers;
  }

  async inputLottoNumber() {
    try {
      const personalLottoNumber =
        await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

      this.#winningNumbers = personalLottoNumber.split(',');
      const lotto = new Lotto(this.#winningNumbers);

      return this.#winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return this.inputLottoNumber();
    }
  }

  async inputBonusNumber() {
    try {
      this.#guessBonus = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n',
      );
      this.validateBonusNumber(this.#guessBonus);
      return this.#guessBonus;
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber();
    }
  }

  validateBonusNumber(number) {
    if (Number.isNaN(+number) || +number < 1 || +number > 45) {
      throw new LottoError(LottoError.ERROR_MSG.bonus);
    }

    if (this.#winningNumbers.includes(number) || !Number.isInteger(+number)) {
      throw new LottoError(LottoError.ERROR_MSG.bonus);
    }
  }

  async buyLotto() {
    try {
      const money = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
      const intMoney = parseInt(money, 10);
      if (Number.isNaN(intMoney)) {
        throw new LottoError(LottoError.ERROR_MSG.notMoney);
      }
      this.#validatePurchaseAmount(intMoney);
      this.#lottoPieces = intMoney / 1000;
      return this.#lottoPieces;
    } catch (error) {
      Console.print(error.message);
      return this.buyLotto();
    }
  }

  #validatePurchaseAmount(amount) {
    if (amount > 100000) {
      throw new LottoError(LottoError.ERROR_MSG.moneyMax);
    }

    if (amount < 1000 || amount % 1000 !== 0) {
      throw new LottoError(LottoError.ERROR_MSG.moneyAmount);
    }
  }

  generateLottoNumber() {
    const guessNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
    this.#guessNumbers.push(guessNumber);
    return `[${guessNumber.join(', ')}]`;
  }
}

export default GuessLotto;
