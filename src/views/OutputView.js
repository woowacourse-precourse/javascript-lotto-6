import { Console } from '@woowacourse/mission-utils';
import MessageFormat from '../MessageFormat.js';
import { MESSAGE } from '../constants.js';
class OutputView {
  #lottos;
  #result;
  #rateOfReturn;
  get lottos() {
    return this.#lottos;
  }
  get result() {
    return this.#result;
  }
  get rateOfReturn() {
    return this.#rateOfReturn;
  }
  set lottos(lottos) {
    this.#lottos = lottos;
  }
  set result(result) {
    this.#result = result;
  }
  set rateOfReturn(rateOfReturn) {
    this.#rateOfReturn = rateOfReturn;
  }

  printLottos = () => {
    Console.print(MessageFormat.lottoCount(this.lottos.length));
    this.lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  };
  printResult = () => {
    Console.print(MESSAGE.result);
    this.result.reverse().forEach(rank => {
      Console.print(`${rank.message} - ${rank.count}개`);
    });
  };
  printRateOfReturn = () => {
    Console.print(MessageFormat.rateOfReturn(this.rateOfReturn));
  };
}
export default OutputView;
