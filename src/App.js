import { Console } from '@woowacourse/mission-utils';
import inputPrice from './input/inputPrice.js';

class App {
  async play() {
    this.price = await inputPrice();
    Console.print(this.price);
  }
}

export default App;
