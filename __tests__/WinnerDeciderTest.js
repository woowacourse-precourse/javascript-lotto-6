import {MissionUtils} from "@woowacourse/mission-utils";
import WinnerDecider from "../src/module/model/WinnerDecider.js"
import WinNumber from "../src/module/model/WinNumber.js";
import LottoGenerator from "../src/module/model/LottoGenerator.js";
import Bonus from "../src/module/model/Bonus.js";

const mockFN = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
}

describe('당첨 판독기 클래스 테스트', () => {
  test('로또 번호와 당첨 번호가 주어졌을 때, 이를 대조하여 당첨 번호를 판별한다.', () => {
    const counter = 7;
    const numbers = [1,2,3,4,5,6];
    const bonus = 7;
    const testNumber = [
      [1,2,3,4,5,6], // six
      [1,2,3,4,5,7], // bonus
      [1,2,3,4,5,8], // five
      [1,2,3,4,9,10], // four
      [1,2,3,9,10,11], // three
      [1,8,7,10,11,12], // zero
      [1,2,3,7,12,13], // three
    ];
    const answer = {
      zero: 1,
      three: 2,
      four: 1,
      five: 1,
      bonus: 1,
      six: 1,
    }

    mockFN(testNumber);

    const winNumber = new WinNumber(numbers);
    const bonus2 = new Bonus(bonus);
    const lottos = new LottoGenerator(counter);
    const test = new WinnerDecider(winNumber.numbers, bonus2.bonusNumber, lottos.lottoList);

    expect(test.score).toEqual(answer);
  });
});
