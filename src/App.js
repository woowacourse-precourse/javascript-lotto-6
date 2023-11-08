import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
class App {
  async play() {
    const input = await this.priceInput();
    const userLottoNumbers = this.getLottoNumbers(input);
    const [lottoNumbers, bonusNumber] = await this.inputLottoNumbers();
    const rate = this.compareLottoNumber(
      userLottoNumbers,
      lottoNumbers,
      bonusNumber
    );
    const rateOfReturn = this.markComma(rate, input);
    Console.print('총 수익률은 ' + rateOfReturn + '%입니다.');
  }
  markComma(rate, input) {
    return ((rate / input) * 100)
      .toFixed(1)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }
  async priceInput() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.');
    return this.validatePriceInput(input);
  }
  async validatePriceInput(input) {
    try {
      if (isNaN(input)) {
        throw new Error('[ERROR] 숫자만 입력해 주세요');
      }
      if (input % 1000 !== 0 || input <= 0) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요');
      }
      return input;
    } catch (error) {
      Console.print(error.message);
      return this.priceInput();
    }
  }
  getLottoNumbers(input) {
    const lottoNumbers = Number(input) / 1000;
    Console.print(lottoNumbers + '개를 구매했습니다.');
    let lotto = [];
    for (let i = 0; i < lottoNumbers; i++) {
      lotto.push(this.getLotto());
    }
    lotto.forEach((lo) => {
      Console.print(`[${lo.join(', ')}]`);
    });
    return lotto;
  }
  getLotto() {
    const number = Random.pickUniqueNumbersInRange(1, 45, 6);
    number.sort(this.compare);
    return number;
  }
  compare(a, b) {
    return a - b;
  }
  async inputLottoNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
    return this.setWinningNumber(input);
  }
  setWinningNumber(input) {
    try {
      const winningNumbers = input.split(',');
      const setWinningNumbers = this.validateLottoNumber(winningNumbers);
      const lotto = new Lotto(setWinningNumbers);
      const lottoNumbers = lotto.getNumbers();
      // const lottoNumbers = setWinningNumbers;
      return this.inputBonusNumber(lottoNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.inputLottoNumbers();
    }
  }
  validateLottoNumber(winningNumbers) {
    for (let i = 0; i < winningNumbers.length; i++) {
      this.checkNumbers(winningNumbers[i]);
    }
    return winningNumbers.map(Number);
  }
  checkNumbers(Numbers) {
    if (isNaN(Numbers)) {
      throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    }
    if (Number(Numbers) < 1 || Number(Numbers) > 45)
      throw new Error('[ERROR] 숫자는 1~45사이의 숫자만 입력 가능합니다.');
  }
  async inputBonusNumber(lottoNumbers) {
    try {
      const bonusNumber = await Console.readLineAsync(
        '보너스 번호를 입력해 주세요.'
      );
      this.checkNumbers(bonusNumber);
      return this.validateNumbersBonusNumber(lottoNumbers, bonusNumber);
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber(lottoNumbers);
    }
  }
  validateNumbersBonusNumber(lottoNumbers, bonusNumber) {
    try {
      if (lottoNumbers.includes(Number(bonusNumber)))
        throw new Error('[ERROR] 보너스 번호는 중복이 아니어야 합니다.');
      return [lottoNumbers, bonusNumber];
    } catch (error) {
      Console.print(error.message);
      return this.inputBonusNumber(lottoNumbers);
    }
  }
  compareLottoNumber(userLottoNumbers, lottoNumbers, bonusNumber) {
    const checkWinningNumbers = [];
    for (let i = 0; i < userLottoNumbers.length; i++) {
      let correctNumber = this.correctNumber(userLottoNumbers[i], lottoNumbers);
      checkWinningNumbers.push(
        this.correctBonusNumber(correctNumber, userLottoNumbers[i], bonusNumber)
      );
    }
    return this.getRate(checkWinningNumbers);
  }
  correctNumber(userLottoNumbers, lottoNumbers) {
    let num = 0;
    for (let i = 0; i < userLottoNumbers.length; i++) {
      if (lottoNumbers.includes(userLottoNumbers[i])) num++;
    }
    return num;
  }
  correctBonusNumber(correctNumber, userLottoNumbers, bonusNumber) {
    if (correctNumber === 4 && userLottoNumbers.includes(Number(bonusNumber))) {
      return correctNumber + 3;
    }
    return correctNumber;
  }
  getRate(checkWinningNumbers) {
    const rate = [];
    for (let i = 3; i < 8; i++) {
      rate.push(checkWinningNumbers.filter((e) => i === e).length);
    }
    this.printResult(rate);
    return this.rateOfReturn(rate);
  }
  printResult(rate) {
    // Console.print('당첨 통계');
    Console.print('3개 일치 (5,000원) - ' + rate[0] + '개');
    Console.print('4개 일치 (50,000원) - ' + rate[1] + '개');
    Console.print('5개 일치 (1,500,000원) - ' + rate[2] + '개');
    Console.print(
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ' + rate[4] + '개'
    );
    Console.print('6개 일치 (2,000,000,000원) - ' + rate[3] + '개');
  }
  rateOfReturn(rate) {
    let rateOfReturn = 0;
    rateOfReturn += rate[0] * 5000;
    rateOfReturn += rate[1] * 50000;
    rateOfReturn += rate[2] * 1500000;
    rateOfReturn += rate[4] * 30000000;
    rateOfReturn += rate[3] * 2000000000;
    return rateOfReturn;
  }
}
const app = new App();
app.play();

export default App;
