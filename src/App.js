import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class App {
  constructor() {
    this.lottoRandomNumber = [];
    this.lottoTicket;
    this.countNumber = 0;
    this.lotto;
  }

  getLottoTicket(lottoPurchaseAmount) {
    // test code
    return Number(lottoPurchaseAmount / 1000);
  }

  checkLottoPrice(lottoPrice) {
    // test code
    let alphabetPattern = /[a-zA-Z]/;
    if(alphabetPattern.test(lottoPrice)) throw new Error('[ERROR] 숫자만 입력하세요.');
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
    if(userBonusNumber === '') throw new Error('[ERROR] 숫자를 입력해주세요.');
    if(isNaN(userBonusNumber)) throw new Error('[ERROR] 숫자만 입력해주세요.');
    if(1>Number(userBonusNumber) || Number(userBonusNumber)>45) throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  }

  async play() {
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
    const lottoNumberArray = userLottoNumber.split(',').map((value) => Number(value));
    this.lotto = new Lotto(lottoNumberArray);
  }
}

export default App;
