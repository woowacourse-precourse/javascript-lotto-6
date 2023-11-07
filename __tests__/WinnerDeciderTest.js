import {MissionUtils} from "@woowacourse/mission-utils";
import WinnerDecider from "../src/module/model/WinnerDecider.js"

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

    const test = new WinnerDecider(counter, numbers, bonus);

    expect(test.score).toEqual(answer);
  });

  test('보너스 점수를 제대로 파악하는지 체크한다.', () => {
    const testNumber = [[1,2,3,4,5,7]];
    const count = 1;
    const bonus = 7;
    const numbers = [1,2,3,4,5,6];

    mockFN(testNumber);

    const test = new WinnerDecider(count, numbers, bonus);

    expect(test.score.bonus).toEqual(1);
  })
});