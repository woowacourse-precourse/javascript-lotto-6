import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { PRINT_MESSAGE, INPUT_MESSAGE } from './message';
import Validate from './Validate';
import { CONSTANT } from './constant';

class App {
  constructor() {
    this.lottoRandomNumber = [];
    this.lottoTicket;
    this.countNumber = CONSTANT.ZERO;
    this.validate = new Validate();
  }

  getLottoTicket(lottoPurchaseAmount) {
    return Number(lottoPurchaseAmount / 1000);
  }

  makeRandomNumber() {
    return Random.pickUniqueNumbersInRange(CONSTANT.NUMBER_MIN_RANGE, CONSTANT.NUMBER_MAX_RANGE, CONSTANT.NUMBER_MAX_LENGTH);
  }

  pushArray(randomNumberArray) { 
    this.lottoRandomNumber.push(randomNumberArray);
  }

  removeSpace(lottoArray) {
    const arrayString = lottoArray.join(', ');
    return '[' + arrayString + ']';
  }

  printLottoArray() { //test code 없음
    this.lottoRandomNumber.forEach(lottoArray => {
      const string = this.removeSpace(lottoArray);
      Console.print(string);
    });
  }

  printLottoResult(lottoResult, lottoRate) { //test code 없음
    Console.print(PRINT_MESSAGE.MATCH_STATS);
    Console.print(PRINT_MESSAGE.LINE);
    Console.print(PRINT_MESSAGE.THREE_MATCHES(lottoResult[0]));
    Console.print(PRINT_MESSAGE.FOUR_MATCHES(lottoResult[1]));
    Console.print(PRINT_MESSAGE.FIVE_MATCHES(lottoResult[2]));
    Console.print(PRINT_MESSAGE.FIVE_BONUS(lottoResult[3]));
    Console.print(PRINT_MESSAGE.SIX_MATCHES(lottoResult[4]));
    Console.print(PRINT_MESSAGE.TOTAL_RATE(lottoRate));
  }

  getLottoNumberArray(userLottoNumber) { //test code 없음
    return userLottoNumber.split(',').map(value => Number(value));
  }

  sortNumber(randomNumberArray) {
    randomNumberArray.sort(function (a, b) {
      return a - b;
    });
    return randomNumberArray;
  }

  printPurchaseAmount(lottoTicket) { //test code 없음
    Console.print(PRINT_MESSAGE.PURCHASE(lottoTicket));
  }

  makeLottoNumberArray(){
    while (this.countNumber < this.lottoTicket) {
      let randomNumberArray = this.makeRandomNumber();
      randomNumberArray = this.sortNumber(randomNumberArray);
      this.pushArray(randomNumberArray);
      this.countNumber += CONSTANT.ONE;
    }
  }

  async play() {
    try {
      const lottoPrice = await Console.readLineAsync(INPUT_MESSAGE.PRICE);
      this.validate.checkLottoPrice(lottoPrice);
      this.lottoTicket = this.getLottoTicket(lottoPrice);
      this.printPurchaseAmount(this.lottoTicket);
      this.makeLottoNumberArray();
      this.printLottoArray();
      const userLottoNumber = await Console.readLineAsync(
        INPUT_MESSAGE.MATCH_NUMBERS,
      );
      const userBonusNumber = await Console.readLineAsync(
        INPUT_MESSAGE.BONUS_NUMBER,
      );
      this.validate.checkBonusNumber(userBonusNumber);
      const lottoNumberArray = this.getLottoNumberArray(userLottoNumber);
      const lotto = new Lotto(lottoNumberArray);
      let lottoResult = lotto.compareLottoNumbers(
        this.lottoRandomNumber,
        userLottoNumber,
        userBonusNumber,
      );
      const lottoRate = lotto.getLottoRate(lottoResult, lottoPrice);
      this.printLottoResult(lottoResult, lottoRate);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
