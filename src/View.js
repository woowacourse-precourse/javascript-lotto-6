import { Console } from '@woowacourse/mission-utils';
import { WIN_PROMPT } from './lib/Prompt';

class View {
  async input(prompt) {
    const input = await Console.readLineAsync(prompt);
    return input;
  }

  printPurchaseResult(num, lottoArr) {
    this.lineBreak();
    Console.print(`${num}개를 구매했습니다.`);
    lottoArr.forEach(lotto => Console.print(`"[${lotto.join(', ')}]"`));
  }

  printLottoResult(cntArr, rate) {
    this.lineBreak();
    Console.print('당첨 통계');
    Console.print('---');
    cntArr.forEach((cnt, idx) => Console.print(`${WIN_PROMPT[idx]} ${cnt}개`));
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }

  lineBreak() {
    Console.print('');
  }
}

export default View;
