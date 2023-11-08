import { MissionUtils } from "@woowacourse/mission-utils";

class Money {
  #money;

  constructor(numbers) {
    this.#money = this.getMoney();
  }

  async getMoney (callback) {
    const input = await MissionUtils.Console.readLineAsync('구매금액을 입력해 주세요.');
    return callback(this.checkMoney(input));
  }

  checkMoney (inputValue) {
    try {
      if(inputValue == undefined || inputValue === '') throw new Error ('[ERROR] 입력값이 없습니다');
      if(isNaN(inputValue)) throw new Error ('[ERROR] 숫자로 입력해주세요');
      let numInput = parseInt(inputValue);
      if(!Number.isInteger(numInput/1000)) throw new Error ('[ERROR] 1000단위로 입력해주세요');
      if(numInput < 1000) throw new Error ('[ERROR] 1000원 이상의 금액을 입력해주세요');
      return numInput;
    } catch (error) {
        MissionUtils.Console.print(error);
        return this.getMoney();
    }
  }

}
export default Money;
