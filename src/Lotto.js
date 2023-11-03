import validation from "./utils/valiidation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR]1~45 사이로 입력해주세요.");
      }
    });
    //겹치는 숫자 있을 때 => 재활용 필요
    validation.hasSameNumber(numbers);
  }

  //기본 숫자 검사받기
  checkValidation() {
    this.#validate(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
