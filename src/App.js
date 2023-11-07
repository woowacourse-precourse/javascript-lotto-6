import { Console, Random } from '@woowacourse/mission-utils';
class App {
  async play() {
    const input = await this.priceInput();
  }
  async priceInput() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.');
    return this.validatePriceInput(input);
  }
  async validatePriceInput(input) {
    try {
      if (isNaN(input)) throw new Error('[ERROR] 숫자만 입력해 주세요');
      if (input % 1000 !== 0 || input <= 0)
        throw new Error('[ERROR] 1000원 단위로 입력해주세요');
    } catch (error) {
      Console.print(error);
      // this.priceInput();
    }
  }
}
const app = new App();
app.validatePriceInput('12345');
export default App;
