import { Console } from '@woowacourse/mission-utils';

class GuessLotto {
  #guessNumbers;

  #guessBonus;

  constructor() {
    this.#guessNumbers = [];
    this.#guessBonus = null;
  }

  async inputLottoNumber() {
    const personalLottoNumber =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    this.#guessNumbers = personalLottoNumber.split(',');
    return this.#guessNumbers;
  }

  async inputBonusNumber() {
    this.#guessBonus =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    return this.#guessBonus;
  }
}

export default GuessLotto;
