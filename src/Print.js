import { Console } from "@woowacourse/mission-utils";
const print = {
  maxLottoNumber(maxNumber) {
    printMessage(`${maxNumber}개를 구매했습니다.`)
  }  
}

function printMessage(message) {
  Console.print(message);
}

export default print