import { MissionUtils } from "@woowacourse/mission-utils";

class Bonus {
  #bonus;

  constructor(numbers) {
    this.#bonus = this.getBonus();
  }

  async getBonus () {
    const input = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해주세요.');
    return this.checkBonus(input);
  }

  checkBonus (inputValue) {
    try {
      if(inputValue == undefined || inputValue === '') throw new Error ('[ERROR] 입력값이 없습니다');
      if(isNaN(inputValue)) throw new Error ('[ERROR] 숫자로 입력해주세요');
      if(inputValue > 45 || inputValue < 1) throw new Error ('[ERROR] 1~45 사이의 숫자로만 입력해주세요');
      const numbers = this.checkNumbers();
      if(numbers.indexOf(inputValue)>0) throw new Error ('[ERROR] 당첨번호와 중복되지 않은 수로 입력해주세요');
      return inputValue;
    } catch (error) {
      MissionUtils.Console.print(error);
      return this.getBonus();
    }
  }
}
export default Bonus;
