import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "./input";


class Validation extends Input {

  checkMoney (inputValue) {
    try {
      if(inputValue == undefined || inputValue === '') throw new Error ('[ERROR] 입력값이 없습니다');
      if(isNaN(inputValue)) throw new Error ('[ERROR] 숫자로 입력해주세요');
      if(Number.inInteger(inputValue/1000)) throw new Error ('[ERROR] 1000단위로 입력해주세요');
      if(inputValue < 1000) throw new Error ('[ERROR] 1000원 이상의 금액을 입력해주세요');
      return inputValue;
    } catch (error) {
        MissionUtils.Console.print(error);
    }
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
    }
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
    }
  }
}
  
  export default Validation;