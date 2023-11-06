import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class GuessLotto {
  #guessNumbers = [];

  #guessBonus = null;

  #lottoPieces = 0;

  #lottoNumbers = [];

  get guessNumbers() {
    return this.#guessNumbers;
  }

  set guessNumbers(numbers) {
    this.#guessNumbers = numbers;
  }

  get guessBonus() {
    return this.#guessBonus;
  }

  set guessBonus(bonus) {
    this.#guessBonus = bonus;
  }

  get lottoPieces() {
    return this.#lottoPieces;
  }

  set lottoPieces(pieces) {
    this.#lottoPieces = pieces;
  }

  get lottoNumbers() {
    return this.#lottoNumbers;
  }

  set lottoNumbers(numbers) {
    this.#lottoNumbers = numbers;
  }

  async inputLottoNumber() {
    try {
      const personalLottoNumber =
        await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

      this.#guessNumbers = personalLottoNumber.split(',');
      const lotto = new Lotto(this.#guessNumbers);

      return this.#guessNumbers;
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
      throw new Error('[ERROR] 보너스 번호 입력이 잘못되었습니다.');
    }

    if (this.#guessNumbers.includes(number) || !Number.isInteger(+number)) {
      throw new Error('[ERROR] 보너스 번호 입력이 잘못되었습니다.');
    }
  }

  async buyLotto() {
    try {
      const inputMoney =
        await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
      if (Number.isNaN(+inputMoney) || inputMoney.trim() === '') {
        throw new Error('[ERROR] 구입 금액이 잘못되었습니다.\n');
      }
      this.#validatePurchaseAmount(+inputMoney);
      this.#lottoPieces = inputMoney / 1000;
      return this.#lottoPieces;
    } catch (error) {
      Console.print(error.message);
      return this.buyLotto();
    }
  }

  #validatePurchaseAmount(amount) {
    if (amount > 100000) {
      throw new Error(
        '[ERROR] 구입 금액이 잘못되었습니다. 구매 최대 금액은 100,000원입니다.\n',
      );
    }

    if (amount < 1000 || amount % 1000 !== 0) {
      throw new Error(
        '[ERROR] 구입 금액이 잘못되었습니다. 1,000원 단위로 입력해주세요.\n',
      );
    }
  }

  generateLottoNumber() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
    this.#lottoNumbers.push(lottoNumber);
    return `[${lottoNumber.join(', ')}]`;
  }
}

export default GuessLotto;
