import { Console } from '@woowacourse/mission-utils';
import { PROMPT, WIN_PROMPT } from '../lib/Prompt.js';

class View {
  async input(prompt) {
    const input = await Console.readLineAsync(prompt);
    return input;
  }

  printPurchaseResult(num, lottoArr) {
    Console.print(PROMPT.purchase(num));
    lottoArr.forEach(lotto => Console.print(`[${lotto.join(', ')}]`));
  }

  printLottoResult(cntArr, rate) {
    Console.print(PROMPT.result);
    Console.print('---');
    cntArr.forEach((cnt, idx) => Console.print(`${WIN_PROMPT[idx]} ${cnt}개`));
    Console.print(PROMPT.returnRate(rate));
  }
}

export default View;
