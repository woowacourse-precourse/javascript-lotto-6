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

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 중복된 번호는 입력할 수 없습니다.');
    }
  }

  // TODO: 추가 기능 구현

  checkLotteryResult(lottoNum, BounsNum) {
    const sortedUserNumbers = this.#numbers.sort((a, b) => a - b);
    const result = sortedUserNumbers.filter((num) => lottoNum.includes(num));

    if (result.length === 5 && sortedUserNumbers.includes(BounsNum)) {
      return '2nd';
    }

    return result.length;
  }
}

export default Lotto;
