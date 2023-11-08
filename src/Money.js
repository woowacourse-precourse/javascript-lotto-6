import { MissionUtils } from "@woowacourse/mission-utils";

class Money {
  #money;

  constructor(numbers) {
    //this.#money = this.getMoney();
  }

  getMoney(){
    return this.#money;
  }

  setMoney(money){
    this.#money = money;
  }

  async inputMoney (callback) {
    const input = await MissionUtils.Console.readLineAsync('구매금액을 입력해 주세요.');
    this.setMoney(input);
    return this.checkMoney(input);
  }

  checkMoney (inputValue) {
    try {
      let numInput = parseInt(inputValue);
      if(inputValue == undefined || inputValue === '') throw new Error ('[ERROR] 입력값이 없습니다');
      else if(isNaN(inputValue)) throw new Error ('[ERROR] 숫자로 입력해주세요');
      else if(!Number.isInteger(numInput/1000)) throw new Error ('[ERROR] 1000단위로 입력해주세요');
      else if(numInput < 1000) throw new Error ('[ERROR] 1000원 이상의 금액을 입력해주세요');
      
      MissionUtils.Console.print(`${numInput/1000}개를 구매했습니다.`)

      return this.printRandumNum();
    } catch (error) {
        MissionUtils.Console.print(error);
        return this.inputMoney();
    }
  }


  // printRandumNum(arr,value,returnvalue) {
  //   MissionUtils.Consol.print(
  //     `${value}개를 구매했습니다.
  //     ${arr}`
  //   );
  //   return returnvalue;
  // }

  // setRandumNum(value) {
  //   let intValue = value / 1000;
  //   let objArr = new Array(intValue);
  //   for(let i = 0; i < intValue; i++) {
  //     let arr = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
  //     objArr.push(arr);
  //   }
  //   return this.printRandumNum(objArr,intValue,value);
  // }

}
export default Money;
