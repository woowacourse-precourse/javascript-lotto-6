/**
 * Lotto 클래스는 어떤 기능을 하는 클래스인가 ?

* 로또를 추상화한 클래스로 쓰자-> 그럼 너무 인스턴스가 많아지는데 ? 괜찮나?

 * 로또는 6개의  중복 되지 않는 번호를 가진다
 * 당첨번호와 보너스 번호를 통해서 본인의 번호를 비교 후 결과를 반환한다.
 *기능목록
  1. 자신의 번호반환 ❌
  2.당첨번호 와 보너스번호 비교 

  
 */

class Lotto {
  //생성자로 6개의 숫자를 한번에 받고 갯수 확인후 numbers에 저장한다. numbers는 private이다.
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      //TODO 에러 처리로 다시 입력 받도록 한다.
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (!hasNoDuplicates(numbers)) throw new Error("[ERROR] 중복된 숫자가 있습니다.");
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

const hasNoDuplicates = (array) => {
  const uniqueArray = [...new Set(array)];
  return array.length === uniqueArray.length;
};

export default Lotto;
