/* eslint-disable default-case */
import Lotto from './Lotto.js';
import { Console } from '@woowacourse/mission-utils';

class App {


  async play() {
    inputAmount();
  
  }
}

const inputAmount = async() => {
  const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  try {
    if (isNaN(input)) throw new Error('[ERROR]');
    if ((input % 1000) !== 0) throw new Error('[ERROR]');
  } catch {
    Console.print('[ERROR]');
    return inputAmount();
  }
  return input;
}

const app = new App();
app.play();

export default App;
