import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class App {
  constructor() {
    this.lottoRandomNumber = [];
    this.lottoTicket;
    this.countNumber = 0;
  }

  getLottoTicket(lottoPurchaseAmount) {
    // test code
    return Number(lottoPurchaseAmount / 1000);
  }

  checkLottoPrice(lottoPrice) {
    // test code
    lottoPrice = Number(lottoPrice);
    if(isNaN(lottoPrice)) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    if (lottoPrice < 1000)
      throw new Error('[ERROR] 로또 최소 구입 금액은 1000원입니다.');
    if (Number(lottoPrice) % 1000 !== 0)
      throw new Error('[ERROR] 금액은 1,000원 단위로 입력해주세요.');
  }

  makeRandomNumber() {
    // test code
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  pushArray(randomNumberArray) {
    this.lottoRandomNumber.push(randomNumberArray);
  }

  removeSpace(lottoArray) {
    // test code
    const arrayString = lottoArray.join(', ');
    return '[' + arrayString + ']';
  }

  printLottoArray() {
    this.lottoRandomNumber.forEach(lottoArray => {
      const string = this.removeSpace(lottoArray);
      Console.print(string);
    });
  }

  checkBonusNumber(userBonusNumber){
    if(userBonusNumber === '') throw new Error('[ERROR] 숫자를 입력하세요.');
    userBonusNumber = Number(userBonusNumber);
    if(isNaN(userBonusNumber)) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    if(1>userBonusNumber || userBonusNumber>45) throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  }

  printLottoResult(lottoResult, lottoRate){
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${lottoResult[0]}개\n`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult[1]}개\n`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult[2]}개\n`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult[3]}개\n`);
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult[4]}개\n`);
    Console.print(`총 수익률은 ${lottoRate}%입니다.`);
  }

  getLottoNumberArray(userLottoNumber){
    return userLottoNumber.split(',').map((value) => Number(value));
  }

  async play() {
    try{
      const lottoPrice =
      await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
      this.checkLottoPrice(lottoPrice);
      this.lottoTicket = this.getLottoTicket(lottoPrice);
      Console.print(`${this.lottoTicket}개를 구매했습니다.`);

      while (this.countNumber < this.lottoTicket) {
        const randomNumberArray = this.makeRandomNumber();
        this.pushArray(randomNumberArray);
        this.countNumber += 1;
      }
      this.printLottoArray();
      const userLottoNumber =
        await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      const userBonusNumber =
        await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      this.checkBonusNumber(userBonusNumber);
      const lottoNumberArray = this.getLottoNumberArray(userLottoNumber);
      const lotto = new Lotto(lottoNumberArray);
      let lottoResult = lotto.compareLottoNumbers(this.lottoRandomNumber, userLottoNumber, userBonusNumber);
      const lottoRate = lotto.getLottoRate(lottoResult, lottoPrice);
      this.printLottoResult(lottoResult, lottoRate);
    }catch(error){
      Console.print(error.message);
    }
  }
}

export default App;
