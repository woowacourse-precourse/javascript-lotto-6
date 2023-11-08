import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {

    const lottoNumber = await this.buyLottoNumber();
    const lottoArr = this.makeLotto(lottoNumber);

    const winnerNumber = await this.setWinnerNumber();
    const bonusNumber = await this.setBonusNumber(winnerNumber);

    const totalArr = this.totalPrize(lottoArr, winnerNumber, bonusNumber);
    this.totalPrint(totalArr);

    const earingRate = this.getEarningRate(totalArr, lottoNumber * 1000);
    Console.print(`총 수익률은 ${earingRate}%입니다.`);

    return;
  }
  async buyLottoNumber() {
    let price = await Console.readLineAsync('구입금액을 입력해 주세요.'); 
    price = Number(price);

    if (Boolean(price % 1000) || price === 0) throw new Error("[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.");
    if (isNaN(price)) throw new Error("[ERROR] 숫자만 입력을 해야 합니다.");


    let LottoNumber = price / 1000;
    return LottoNumber;
  }
  async setWinnerNumber() {
    let winnerNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    winnerNumber = winnerNumber.trim().split(',');
    winnerNumber = winnerNumber.map(element => Number(element));

    if (winnerNumber.length !== 6) throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    const set = new Set(winnerNumber);
    if(set.size !== winnerNumber.length) throw new Error("[ERROR] 중복된 번호가 포함되어 있습니다. "); 


    return winnerNumber;
  }
  async setBonusNumber(winnerNumber) {
    let bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.');
    bonusNumber = Number(bonusNumber);

    if(bonusNumber < 1 || bonusNumber > 45) throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    const found = winnerNumber.find((element) => element === bonusNumber);
    if(found === bonusNumber) throw new Error("[ERROR] 당첨 번호와 중복된 숫자입니다.");

    return bonusNumber;
  }
  makeLotto(buyLottoNumber) {
    Console.print(`${buyLottoNumber}개를 구매했습니다.`);

    let lottoArr = [];
    for(let i = 0; i< buyLottoNumber; i++) {
      let lottoNumber = Random.pickUniqueNumbersInRange(1,45, 6);
      lottoNumber.sort((a,b) => a - b);

      lottoArr.push(new Lotto(lottoNumber));
    }

    for(let i = 0; i< buyLottoNumber; i++) Console.print(lottoArr[i].numbers);

    return lottoArr;
  }
  totalPrize(lottoArr, winnerNumber, bonusNumber) {
    let sum = [0,0,0,0,0];
    let take = [0,0,0,0,0];
    for(let i = 0; i < lottoArr.length; i++) {
      take = lottoArr[i].prizeResult(winnerNumber, bonusNumber);
      sum = sum.map((x,y) => x + take[y]);
    }

    return sum;
  }
  totalPrint(totalArr) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${totalArr[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${totalArr[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${totalArr[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalArr[3]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${totalArr[4]}개`);

    return;
  }
  getEarningRate(totalArr, lottoPrice) {
    const sumProfits = totalArr[0] * 5000
    + totalArr[1] * 50000
    + totalArr[2] * 1500000
    + totalArr[3] * 30000000
    + totalArr[4] * 200000000;

    let earingRate = ((sumProfits / lottoPrice) * 100);

    return earingRate.toFixed(1);
  }
}

export default App;
