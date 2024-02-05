class Lotto {
  // number의 # prefix 변경 금지
  // Lotto에 필드 추가 금지
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  // TODO: 추가 기능 구현
  getLottoNumber(){
    return this.#numbers;
  }

}

export default Lotto;
