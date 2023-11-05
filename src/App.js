import UserInput from './view/userInput.js';
import Purchase from './controller/Purchase.js';
import Calculate from './model/Calculate.js';
import Result from './view/Result.js';

class App {
  constructor() {
    this.UserInput = new UserInput();
  }

  async play() {
    // 구매 금액
    const amount = await this.UserInput.RequestAmount();

    // 로또 발행
    const purchase = new Purchase(amount);
    const arrays = purchase.public();

    // 로또 번호 입력
    const numbers = await this.UserInput.RequestNumbers();

    // 보너스 번호 입력
    const bonus = await this.UserInput.RequestBonus(numbers);

    // 계산하기
    const calculate = new Calculate(amount, numbers, arrays, bonus);
    // 발행된 로또마다 몇개가 맞았는지 체크
    const count = calculate.count();
    // 결과 값 체크
    const collected = await calculate.collect(count);
    // 결과 값에 따른 수익률 체크
    const rated = calculate.rate(collected);

    new Result(collected, rated);
  }
}

export default App;
