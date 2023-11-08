import Lotto from "../src/game/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6, 7]]);
    expect(() => {  
      new Lotto();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    mockRandoms([[1, 2, 3, 4, 5, 5]]);
    expect(() => {
      new Lotto();
    }).toThrow("[ERROR]");
  });

  test("로또 번호를 오름차순으로 정렬하여 출력한다.", () => {
    mockRandoms([[5, 6, 2, 4, 1, 3]]);
    const lotto = new Lotto();
    const result = lotto.getNumbers();

    expect(result).toContainEqual(1, 2, 3, 4, 5, 6);
  });

  // TEST 이후, checkLottoRank 함수의 return값 없앰.
  /*
  test("로또의 결과를 출력한다.", () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 17],
      [1, 2, 3, 4, 5, 19],
      [1, 2, 3, 4, 36, 17],
      [1, 2, 3, 28, 36, 17],
      [1, 2, 9, 28, 36, 17],
      [1, 12, 9, 28, 36, 17]
    ]);

    const result = [];
    for (let i = 0; i < 7; i++){
      const lotto = new Lotto();
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 17;
      result.push(lotto.checkLottoRank(winningNumbers, bonusNumber));
    }

    expect(result).toContainEqual(1,2,3,4,5,0,0);
  });
  */

});
