import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sort_num(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[Error] 로또 번호는 중복이 없어야 합니다.');
    }

    if(numbers.some(num => num < 1 || num > 45)) {
      throw new Error('[Error] 로또 번호는 1과 45 사이의 값이어야 합니다.');
    }
    
  }
  // TODO: 추가 기능 구현
  //로또 번호 정렬
  #sort_num(numbers) {
    numbers.sort((a, b) => a - b);
  }
  //로또 번호 출력
  print_num() {
    MissionUtils.Console.print(this.#numbers);
  }
  //로또 번호 일치 여부

  

}

export default Lotto;
