class Lotto {
  #numbers;

  constructor(numbers) {
    //this.#validate(numbers);
    this.#numbers = numbers;
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   }
  // }

  // TODO: 추가 기능 구현

  // 로또 번호 생성
  generateLottoNumbers() {}

  // 당첨 통계 계산
  calculatePrizes() {}

  // 상금 반환
  getPrizeAmount() {}
}

export default Lotto;
