import { Console } from '@woowacourse/mission-utils';

class GuessLotto {
  constructor() {
    this.guessNumbers = [];
  }

  async inputLottoNumber() {
    const personalLottoNumber =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    this.guessNumbers = personalLottoNumber.split(',');
    return this.guessNumbers;
  }
}

export default GuessLotto;
