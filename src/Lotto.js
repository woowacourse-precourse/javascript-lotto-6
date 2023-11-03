/*
Lotto 클래스
  제공된 Lotto 클래스를 활용해 구현해야 한다.
  numbers의 # prefix를 변경할 수 없다.
  Lotto에 필드를 추가할 수 없다.

*/

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  //내가 입력한 로또 당첨 번호
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
