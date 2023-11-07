import { Console, Random } from "@woowacourse/mission-utils";
import Result from "./MatchResult.js"
import UserInput from "./UserInput.js";

class App {
  async play() {
    const userInput = new UserInput();
    const money = await userInput.validMoney();
    
    let lottos = money / 1000;
    Console.print(`\n${lottos}개를 구매했습니다.`);
    
    const randomNumbers = this.setRandomNumber(lottos);
    const lotto = await userInput.getLottoNumber('\n당첨 번호를 입력해 주세요.\n');
    const returnLottoNumber = lotto.getNumber();
    const bonumNumber = await userInput.getBonusNumber(returnLottoNumber);

    Console.print('\n당첨 통계');
    Console.print('---');

    const result = new Result();
    const [matchThree, matchFour, matchFive, matchFiveBonus, matchSix] = result.matchNumber(randomNumbers, returnLottoNumber, bonumNumber);

    result.printPercentage(matchThree, matchFour, matchFive, matchFiveBonus, matchSix, money);
  }

  setRandomNumber(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      if (!randomNumbers.includes(numbers)) {
        numbers.sort((a, b) => a - b);
        randomNumbers.push(numbers);
      }
      Console.print(`[${numbers.join(', ')}]`);
    }
    return randomNumbers;
  }
}

export default App;