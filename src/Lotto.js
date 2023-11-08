import { LOTTO_RANGE, ERROR_MESSAGE, PRIZE_MESSAGE } from "./constants/constants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;

  }

  #validate(numbers) {
    // 입력받은 로또가 6개 이상일 경우 오류 출력
    if (numbers.length !== LOTTO_RANGE.lottoMaxLength) {
      throw new Error(ERROR_MESSAGE.lottoCount);
    }
    // 입력받은 로또가 45이상일 경우 오류 출력
    numbers.map((x) => {
      if (x > 45) {
        throw new Error(ERROR_MESSAGE.lottoRange);
      }
    });
    // 입력받은 로또 중 중복이 있을 경우 오류 출력
    const set = new Set(numbers);
    if(numbers.length !== set.size) {
      throw new Error(ERROR_MESSAGE.lottoDuplication);
    }
  }

  // TODO: 추가 기능 구현

  // 당첨번호랑 비교하는 용도로 사용할 함수.
  compareLotto(arr) {
    let resArr = arr.filter(x => this.#numbers.includes(x));
    return resArr;
  }
}

export default Lotto;
