class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set([...numbers]).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않는 6개의 숫자입니다.');
    }
  }

  // TODO: 추가 기능 구현

  // LOTTO번호 오름차순으로 정렬하기
  sortLottoNumbers() {
    this.#numbers.sort((a, b) => a - b);
    return this;
  }

  getLottoTicket() {
    return [...this.#numbers];
  }
}

export default Lotto;
