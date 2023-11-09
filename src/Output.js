import { Console } from '@woowacourse/mission-utils';

class Output {
  static print(message) {
    Console.print(message);
  }

  static buyLottoPrint(buyCount, message) {
    Console.print(`\n${buyCount}${message}`);
  }

  static resultLottoPrint(matchesMessage, sameCount, countMessage) {
    Console.print(`${matchesMessage} ${sameCount}${countMessage}`);
  }

  static resultRorPrint(rorMessage, ror, percentMessage) {
    Console.print(`${rorMessage}${ror}${percentMessage}`);
  }
}
export default Output;
