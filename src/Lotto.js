/* eslint-disable class-methods-use-this */
import { Console, MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers; // 로또번호 입력값 배열, 여기가 필드

  constructor(numbers) {
    this.#validate(numbers);
    this.duplCheckOfWinngNum(numbers);
    this.validateNumRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현

  async playy() {
    this.duplCheckOfWinngNum();
    this.#validate(this.#numbers);
  }

  // 정답 숫자 입력 범위 확인
  validateNumRange(inputNum) {
    const MIN_NUM = 1;
    const MAX_NUM = 45;
    inputNum.forEach((number) => {
      if (number < MIN_NUM || MAX_NUM < number) {
        throw new Error(`[ERROR] 숫자 범위는 1~45 사이입니다.`);
      }
    });
  }

  // 정답 숫자 중복 확인.
  duplCheckOfWinngNum(numbers) {
    Console.print(numbers);
    const setWinningNum = new Set(numbers);
    if (numbers.length !== setWinningNum.size) {
      throw new Error(`[ERROR] 당첨 번호는 중복될 수 없습니다.`);
    }
  }
}

export default Lotto;

// 모듈 받는 곳에서 구현해야 하나?
// const lottoNum = async function getWinningNum() {
//  const getNum =
//    await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
//  const winningNum = String(getNum).split(','); // 문자열 형태

//  return winningNum; // 문자열 상태
// };

// const lottoNum = [1, 2, 3, 4, 5, 5];

// const lotto = new Lotto(lottoNum);
// lotto.playy();
