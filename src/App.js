import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async play() {
    const input = await this.priceInput();
    this.getLottoNumbers(input);
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
}
const app = new App();
app.play();
export default App;
