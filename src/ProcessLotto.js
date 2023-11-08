import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoError from './error/LottoError.js';

class ProcessLotto {
  #winningNumber = [];

  #winningBonus = null;

  #lottoPieces = 0;

  #guessNumbers = [];

  getWinningNumber() {
    return this.#winningNumber;
  }

  setWinningNumber(numbers) {
    this.#winningNumber = numbers;
  }

  getWinningBonus() {
    return this.#winningBonus;
  }

  setWinningBonus(bonus) {
    this.#winningBonus = bonus;
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
      const lottoNum =
        await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

      this.setWinningNumber(lottoNum.split(','));

      const lotto = new Lotto(this.#winningNumber);

      return this.#winningNumber;
    } catch (error) {
      Console.print(error.message);
      return this.inputLottoNumber();
    }
  }

  async inputBonusNumber() {
    try {
      this.setWinningBonus(
        await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'),
      );
      this.validateBonusNumber(this.#winningBonus);
      return this.#winningBonus;
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber();
    }
  }

  validateBonusNumber(number) {
    if (!Number.isInteger(Number(number))) {
      throw new LottoError(LottoError.ERROR_MSG.bonus);
    }

    const intBonus = parseInt(number, 10);
    if (Number.isNaN(intBonus) || intBonus < 1 || intBonus > 45) {
      throw new LottoError(LottoError.ERROR_MSG.bonus);
    }

    if (this.#winningNumber.includes(String(intBonus))) {
      throw new LottoError(LottoError.ERROR_MSG.bonus);
    }
  }

  async buyLotto() {
    try {
      const money = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
      const intMoney = parseInt(money, 10);
      if (Number.isNaN(intMoney) || !Number.isInteger(Number(money))) {
        throw new LottoError(LottoError.ERROR_MSG.notMoney);
      }
      this.#validatePurchaseAmount(intMoney);
      this.setLottoPieces(intMoney / 1000);
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

export default ProcessLotto;
