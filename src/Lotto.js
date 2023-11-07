import { MissionUtils } from "@woowacourse/mission-utils";

const WINNING_PRICE = [5000, 50000, 1500000, 30000000, 2000000000];
const MAX_NUMBER = 45;
const MIN_NUMBER = 1;
const LOTTO_LENGTH = 6;
class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers) {
      this.#validate(numbers);
      this.#numbers = numbers;
    } else {
      //로또 번호 랜덤 생성
      this.#numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        MIN_NUMBER,
        MAX_NUMBER,
        LOTTO_LENGTH
      );
    }
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      }

      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw new Error("[ERROR] 1~45까지의 번호를 입력해 주세요");
      }
    });
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`);
    }
    if (numbers.length != new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복되서는 안됩니다.");
    }
  }

  //로또 번호를 반환한다.
  get_numbers() {
    return this.#numbers;
  }

  //당첨금액을 반환한다.
  get_price(winning_number, bonus_number) {
    const new_set = new Set([
      ...winning_number.get_numbers(),
      ...this.#numbers,
    ]);
    if (new_set.size == 6) {
      return WINNING_PRICE[4];
    } //6개번호 일치
    if (new_set.size == 7) {
      if (this.#numbers.includes(bonus_number)) {
        return WINNING_PRICE[3];
      } else {
        return WINNING_PRICE[2];
      } //5개+보너스번호
    }
    if (new_set.size == 8) {
      return WINNING_PRICE[1];
    } //4개번호일치
    if (new_set.size == 9) {
      return WINNING_PRICE[0];
    } //3개번호일치
    return 0;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
