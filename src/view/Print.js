import { Console } from '@woowacourse/mission-utils';

class Print {
  #message;
  constructor(message) {
    this.#message = message;
  }

  print() {
    Console.print(this.#message);
  }
}

export default Print;
