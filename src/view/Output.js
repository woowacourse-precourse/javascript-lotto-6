import { Console } from "@woowacourse/mission-utils";
const print = {
  maxLottoNumber(maxNumber) {
    printMessage(`${maxNumber}개를 구매했습니다.`)
  },
  lottoNumber(array) {
    array.map(numbers => printArray(numbers))
  } 
}

export function printArray(array) {
  printMessage(`[${array.join(', ')}]`);
}

function printMessage(message) {
  Console.print(message);
}

export default print