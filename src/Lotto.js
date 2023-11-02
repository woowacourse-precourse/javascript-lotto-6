class Lotto {
  #numbers;

  constructor(numbers, purchaseAmount, bonusNumber) {
    this.#validate(numbers, purchaseAmount, bonusNumber);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    // 중복 예외
    if (new Set(numbers).sizs !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }

    // 1~45 범위 벗어낫을 때
    for (const number of numbers) {
      if (number > 45 || number < 1) {
        throw new Error('[ERROR] 로또 번호는 1~45 사이로 입력해주세요.');
      }
    }

    // 보너스 번호가 1~45 범위 벗어낫을 때
    if (bonusNumber > 45 || bonusNumber < 1) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이로 입력해주세요.');
    }

    // 보너스 번호를 여러개 입력했을 때
    if (bonusNumber.length > 1) {
      throw new Error('[ERROR] 보너스 번호는 하나만 입력해주세요.');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
