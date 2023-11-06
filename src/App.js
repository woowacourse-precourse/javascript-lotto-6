/* eslint-disable max-lines-per-function */
import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import PlayLottery from './Controller/playLottery.js';

class App {
  constructor() {
    this.PlayLottery = new PlayLottery();
  }

  async play() {
    await this.PlayLottery.getLotteryResult();
    // const payAmount = await new Read().answer('구입금액을 입력해주세요.');
    // const purchaseQuantity = Number(payAmount) / 1000;
    // if (Number.isNaN(purchaseQuantity)) {
    //   Console.print('[ERROR] 잘못된 입력 값입니다.');
    //   return;
    // }
    // Console.print(`${purchaseQuantity}개를 구매했습니다.`);
    // const lottoNumbers = Array.from({ length: purchaseQuantity }, () => {
    //   const random = Random.pickUniqueNumbersInRange(1, 45, 6);
    //   return random.sort((a, b) => a - b);
    // });
    // // 각 로또 번호를 콘솔 출력
    // lottoNumbers.forEach((el) => Console.print(`[${el.join(', ')}]`));
    // const userNumber = await this.read.answer('당첨 번호를 입력해 주세요.\n');
    // const result = userNumber.split(',').map(Number);
    // Console.print(`숫자야${result}`);
    // const lotto = new Lotto(result);
    // const BonusNumber = await Console.readLineAsync(
    //   '보너스 번호를 입력해 주세요.\n'
    // );
    // const stats = {
    //   3: '3개 일치 (5,000원)',
    //   4: '4개 일치 (50,000원)',
    //   5: '5개 일치 (1,500,000원)',
    //   '2nd': '5개 일치, 보너스 볼 일치 (30,000,000원)',
    //   6: '6개 일치 (2,000,000,000원)',
    // };
    // const initialLottoStats = Object.keys(stats).reduce((acc, key) => {
    //   acc[stats[key]] = 0;
    //   return acc;
    // }, {});
    // lottoNumbers.forEach((lottoNum) => {
    //   const sameCount = lotto.checkLotteryResult(lottoNum, Number(BonusNumber));
    //   if (sameCount > 2) initialLottoStats[stats[sameCount]] += 1;
    // });
    // let getMoneyAmount = 0;
    // Object.keys(initialLottoStats).forEach((el) => {
    //   const regex1 = /\(([^)]+)\)/;
    //   const splitAmount = el.match(regex1)[0];
    //   Console.print(`${splitAmount}`);
    //   const moneyAmount = splitAmount.replace(/[^0-9]/g, '');
    //   getMoneyAmount += moneyAmount * initialLottoStats[el];
    //   Console.print(`${el} - ${initialLottoStats[el]}개`);
    // });
    // Console.print(
    //   `총 수익률은 ${parseFloat(
    //     ((getMoneyAmount / payAmount) * 100).toFixed(2)
    //   )}%입니다.`
    // );
  }
}

export default App;
