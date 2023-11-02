import { print } from "./util/output.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.printLottos(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  printLottos(){
    print(this.#numbers);
  }

  getPrizeCount(userNumbers){
    let count = 0;
    userNumbers.forEach((userNumber)=>{
      if(this.#numbers.includes(userNumber)) count++;
    });

    return count;
  }
}

export default Lotto;
