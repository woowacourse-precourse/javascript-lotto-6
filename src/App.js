import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { ERROR_MESSAGE, PRINT_MESSAGE, INPUT_MESSAGE } from './message';

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
    if (isNaN(lottoPrice)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    if (lottoPrice < 1000) throw new Error(ERROR_MESSAGE.MIN_PRICE);
    if (lottoPrice % 1000 !== 0) throw new Error(ERROR_MESSAGE.THOUSAND_UNIT);
  }

  makeRandomNumber() {
    // test code
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  pushArray(randomNumberArray) {
    // test code
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

  checkBonusNumber(userBonusNumber) {
    // test code
    if (userBonusNumber === '') throw new Error(ERROR_MESSAGE.NUMBER_EMPTY);
    userBonusNumber = Number(userBonusNumber);
    if (isNaN(userBonusNumber)) throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    if (1 > userBonusNumber || userBonusNumber > 45)
      throw new Error(ERROR_MESSAGE.RANGE_BONUS);
  }

  printLottoResult(lottoResult, lottoRate) {
    Console.print(PRINT_MESSAGE.MATCH_STATS);
    Console.print(PRINT_MESSAGE.LINE);
    Console.print(PRINT_MESSAGE.THREE_MATCHES(lottoResult[0]));
    Console.print(PRINT_MESSAGE.FOUR_MATCHES(lottoResult[1]));
    Console.print(PRINT_MESSAGE.FIVE_MATCHES(lottoResult[2]));
    Console.print(PRINT_MESSAGE.FIVE_BONUS(lottoResult[3]));
    Console.print(PRINT_MESSAGE.SIX_MATCHES(lottoResult[4]));
    Console.print(PRINT_MESSAGE.TOTAL_RATE(lottoRate));
  }

  getLottoNumberArray(userLottoNumber) {
    return userLottoNumber.split(',').map(value => Number(value));
  }

  sortNumber(randomNumberArray) {
    // test code
    randomNumberArray.sort(function (a, b) {
      return a - b;
    });
    return randomNumberArray;
  }

  printPurchaseAmount(lottoTicket) {
    Console.print(PRINT_MESSAGE.PURCHASE(lottoTicket));
  }

  async play() {
    try {
      const lottoPrice = await Console.readLineAsync(INPUT_MESSAGE.PRICE);
      this.checkLottoPrice(lottoPrice);
      this.lottoTicket = this.getLottoTicket(lottoPrice);
      this.printPurchaseAmount(this.lottoTicket);

      while (this.countNumber < this.lottoTicket) {
        let randomNumberArray = this.makeRandomNumber();
        randomNumberArray = this.sortNumber(randomNumberArray);
        this.pushArray(randomNumberArray);
        this.countNumber += 1;
      }
      this.printLottoArray();
      const userLottoNumber = await Console.readLineAsync(
        INPUT_MESSAGE.MATCH_NUMBERS,
      );
      const userBonusNumber = await Console.readLineAsync(
        INPUT_MESSAGE.BONUS_NUMBER,
      );
      this.checkBonusNumber(userBonusNumber);
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
