import { Console, Random } from '@woowacourse/mission-utils';

class GuessLotto {
  #guessNumbers;

  #guessBonus;

  #lottoPieces;

  #lottoNumbers;

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

  constructor() {
    this.#guessNumbers = [];
    this.#guessBonus = null;
    this.#lottoPieces = 0;
    this.#lottoNumbers = [];
  }

  async inputLottoNumber() {
    const personalLottoNumber =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    this.#guessNumbers = personalLottoNumber.split(',');
    return this.#guessNumbers;
  }

  async inputBonusNumber() {
    this.#guessBonus = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    return this.#guessBonus;
  }

  async buyLotto() {
    const lottoPurchaseMoney =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    if (Number.isNaN(+lottoPurchaseMoney) || lottoPurchaseMoney.trim() === '')
      throw new Error('[ERROR] 구입 금액이 잘못되었습니다.');

    if (+lottoPurchaseMoney > 100000)
      throw new Error(
        '[ERROR] 구입 금액이 잘못되었습니다. 구매 최대 금액은 100,000원입니다.',
      );

    if (+lottoPurchaseMoney < 1000 || lottoPurchaseMoney % 1000 !== 0)
      throw new Error(
        '[ERROR] 구입 금액이 잘못되었습니다. 1,000원 단위로 입력해주세요.',
      );

    this.#lottoPieces = lottoPurchaseMoney / 1000;
    return this.#lottoPieces;
  }

  generateLottoNumber() {
    let lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber = lottoNumber.sort((a, b) => a - b);
    this.#lottoNumbers.push(lottoNumber);
    return lottoNumber;
  }
}

export default GuessLotto;
