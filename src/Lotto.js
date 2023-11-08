import { MissionUtils, Random, Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers; // 로또 번호 배열을 숨김 필드로 사용

  constructor(numbers) {
    this.#validate(numbers); // 생성자에서 로또 번호 유효성 검사
    this.#numbers = numbers; // 유효한 로또 번호 배열을 할당
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers; // 로또 번호 배열 반환
  }

  // 추가 기능 구현: 당첨 번호와 맞는 숫자 수를 계산
  getMatchedNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number));
  }

  // 추가 기능 구현: 보너스 번호와 일치하는지 확인
  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  // 추가 기능 구현: 1부터 45 범위에서 중복되지 않는 6개의 랜덤 숫자 생성
  static generateNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    );
    return randomNumbers;
  }
}

export default Lotto;
