import { Console } from "@woowacourse/mission-utils";

class WinningNumbers {
    constructor(numbers) {
      this.validate(numbers);
      this.value = numbers;
    }
    validate(numbers){
      let words = String(numbers).split(',');
      if(Object.values(words).length!=6){
        throw new Error('[ERROR] 당첨 번호는 6자리만 가능합니다.');
      }
    }
}
export default WinningNumbers;