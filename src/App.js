import { Console } from '@woowacourse/mission-utils';
import Counter from './Counter.js';
import { INPUT_MESSAGES } from './constants/messages.js';

class App {
  async play() {
    const inputAmount = await Console.readLineAsync(INPUT_MESSAGES.inputAmount);
    const counter = new Counter(Number(inputAmount));
  }
}

export default App;
