import { Console, Random } from '@woowacourse/mission-utils';
// import Lotto from './Lotto';
class App {
  async play() {
    const input = await this.priceInput();
    const userLottoNumbers = this.getLottoNumbers(input);
    const [lottoNumbers, bonusNumber] = await this.inputLottoNumbers();
    console.log(lottoNumbers, bonusNumber);
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
      Console.print(error);
      this.priceInput();
    }
  }
  getLottoNumbers(input) {
    const lottoNumbers = Number(input) / 1000;
    let lotto = [];
    for (let i = 0; i < lottoNumbers; i++) {
      lotto.push(this.getLotto());
    }
    Console.print(lotto);
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
    const winningNumbers = input.split(',');
    const setWinningNumbers = this.validateLottoNumber(winningNumbers);
    try {
      // const lotto = new Lotto(setWinningNumbers);
      // const lottoNumbers = lotto.getNumbers();
      const lottoNumbers = setWinningNumbers;
      return this.inputBonusNumber(lottoNumbers);
    } catch (error) {
      Console.print(error);
      this.inputLottoNumbers();
    }
  }
  validateLottoNumber(winningNumbers) {
    try {
      for (let i = 0; i < winningNumbers.length; i++) {
        this.checkNumbers(winningNumbers[i]);
      }
      return winningNumbers.map(Number);
    } catch (error) {
      Console.print(error);
      this.inputLottoNumbers();
    }
  }
  checkNumbers(Numbers) {
    if (isNaN(Numbers)) {
      throw new Error('[ERROR] 숫자만 입력 가능합니다.');
    }
    if (Number(Numbers) < 1 || Number(Numbers) > 45)
      throw new Error('[ERROR] 숫자는 1~45사이의 숫자만 입력 가능합니다.');
  }
  async inputBonusNumber(lottoNumbers) {
    const bonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.'
    );
    try {
      this.checkNumbers(bonusNumber);
      return this.validateNumbersBonusNumber(lottoNumbers, bonusNumber);
    } catch (error) {
      Console.print(error);
      this.inputBonusNumber(lottoNumbers);
    }
  }
  validateNumbersBonusNumber(lottoNumbers, bonusNumber) {
    try {
      if (lottoNumbers.includes(Number(bonusNumber)))
        throw new Error('[ERROR] 보너스 번호는 중복이 아니어야 합니다.');
      // console.log(lottoNumbers, bonusNumber);
      return [lottoNumbers, bonusNumber];
    } catch (error) {
      Console.print(error);
      this.inputBonusNumber(lottoNumbers);
    }
  }
}
const app = new App();
app.play();
export default App;
