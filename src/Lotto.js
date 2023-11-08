import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    
    this.#numbers = this.getNumbers();
  }

  async getNumbers (callback) {
    const input = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
    return callback(this.checkNumbers(input));
  }

  checkNumbers (inputValue) {
    try {
      if(inputValue == undefined || inputValue === '') throw new Error ('[ERROR] 입력값이 없습니다');
      const splitValue = inputValue.split(',');
      const setValue = new Set (splitValue);
      const arrValue = [...setValue];
      if(arrValue.some((value)=>value === '')) throw new Error ('[ERROR] 입력값이 없습니다');
      if(arrValue.length !== 6 || arrValue.some((value)=>isNaN(value))) throw new Error ('[ERROR] 총 6개의 숫자를 입력해주세요.')
      if(arrValue.some((value)=>value > 45) || splitValue.some((value)=>value < 1)) throw new Error ('[ERROE] 1~45 사이의 숫자로만 입력해주세요');
      return arrValue;
    } catch (error) {
      MissionUtils.Console.print(error);
      return this.getNumbers();
    }
  }

}
export default Lotto;
