import { Console } from '@woowacourse/mission-utils';

class InputView {
  getUserInputAsync(message) {
    return Console.readLineAsync(message);
  }
}

export default InputView;
