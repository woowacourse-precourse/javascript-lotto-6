import { Console } from '@woowacourse/mission-utils';

class InputView {
  async getInput(message) {
    return Console.readLineAsync(`${message}\n`);
  }

  printError(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
  }

  printNumLottoTickets(numLottoTickets) {
    Console.print(`\n${numLottoTickets}개를 구매했습니다.`);
  }

  printGetNumbers(numbers) {
    Console.print(numbers);
  }

  printMessage(message) {
    Console.print(message);
  }
}

export default InputView;
