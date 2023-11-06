import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }


  #duplicate(numbers) {
    //중복 확인
    let numberSet = new Set(numbers);
    if(numberSet.size<6){
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.")
    }
  }

  /**
   * 로또의 번호를 출력
   */
  print(){
    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  /**
   * 이 로또에 해당 번호가 존재여부 확인
   * @param {*} number 
   */
  have(number){
    if(this.#numbers.includes(number)){
      throw new Error("[ERROR] 중복된 숫자가 존재합니다.")
    }
  }

  getNumber(){
    return this.#numbers;
  }

  /**
   * 현재 로또의 정답과 보너스를 토대로 당첨금을 반환한다.
   
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원

   * @param {*} winNumber 당첨번호
   * @param {*} bonusNumber 보너스번호
   */
  winningCheck(winNumber,bonusNumber){
    let winCount = 0;
    let bonusCheck = false;
    for(let number of this.#numbers){
      if(winNumber.includes(number)){
        winCount++;
      }
    }
    if(winNumber.includes(bonusNumber)){
      bonusCheck = true;
    }
    return this.winningPrice(winCount,bonusCheck)
  }

  /**
   * 당첨갯수와 보너스 여부를 통해 받는 금액을 반환받는다.
   * @param {*} winCount 
   * @param {*} bonusCheck 
   * @returns 
   */
  winningPrice(winCount, bonusCheck){
    if(winCount<3) return 0;
    if(winCount===3) return 5000;
    if(winCount===4) return 50000;
    if(winCount===5&&bonusCheck) return 30000000;
    if(winCount===5) return 1500000
    if(winCount===6) return 2000000000;
  }
}

export default Lotto;
