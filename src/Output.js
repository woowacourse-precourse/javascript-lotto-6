import { Console } from '@woowacourse/mission-utils';

class Output {
  print(message) {
    Console.print(message);
  }

  buyLottoPrint(buyCount, message) {
    Console.print(`\n${buyCount}${message}`);
  }

  resultLottoPrint(matchesMessage, sameCount, countMessage) {
    Console.print(`${matchesMessage} ${sameCount}${countMessage}`);
  }

  resultRorPrint(rorMessage, ror, percentMessage) {
    Console.print(`${rorMessage}${ror}${percentMessage}`);
  }
}
export default Output;
