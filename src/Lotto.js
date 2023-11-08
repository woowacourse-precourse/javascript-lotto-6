import { Console } from '@woowacourse/mission-utils';
// 기능3의 당첨 번호 입력 조건
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.validatefigure(numbers);
    this.validateint(numbers);
    this.validateduplication(numbers);
    this.#numbers = numbers;
  }

  //조건1. 로또 번호 6개(선조건)
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  //조건2. 로또 번호 범위(1~45)
  validatefigure(numbers) {
    if (numbers.filter((x) => x < 1 || x > 45).length > 0) {
      throw new Error(`[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`);
    }
  }

  //조건3. 입력은 정수형
  validateint(numbers) {
    if (numbers.filter((x) => isNaN(x)).length > 0) {
      throw new Error('[ERROR] 로또 번호는 정수형이어야 합니다.');
    }
  }

  // 조건4. 요소중복
  validateduplication(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 번호가 중복되었습니다.');
    }
  }
  //당첨번호 입력조건(조건1,조건2,조건3,조건4) 정리
  async lottoplay() {
    try {
      const lottoinput = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n',
      );
      this.numbers = lottoinput.split(',').map((x) => parseInt(x.trim()));
      this.#validate(this.numbers);
      this.validatefigure(this.numbers);
      this.validateint(this.numbers);
      this.validateduplication(this.numbers);
    } catch (error) {
      Console.print(error.message);
      await this.lottoplay();
    }
  }
}

export default Lotto;
