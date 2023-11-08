import Lotto from "../../src/Lotto.js";
import Game from "../../src/Model/Game.js";

describe("로또 추첨 과정 테스트", () => {
  test("Test 1. 로또가 자신의 번호와 당첨 번호, 보너스 번호를 비교하여 번호 일치 개수, 보너스 일치 여부를 반환한다.", () => {
    const numbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
      [1, 2, 7, 8, 9, 10]
    ];

    const results = [
      {
        cnt: 6,
        bonus: false
      },
      {
        cnt: 5,
        bonus: true
      },
      {
        cnt: 5,
        bonus: false
      },
      {
        cnt: 4,
        bonus: false
      },
      {
        cnt: 3,
        bonus: false
      },
      {
        cnt: 2,
        bonus: false
      }
    ];

    const luckyNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    numbers.forEach((number, index) => {
      const lotto = new Lotto(number);
      const result = lotto.match(luckyNumbers, bonusNumber);
      expect(result).toEqual(results[index]);
    });
  });

  test("Test 2. 일치하는 번호 갯수, 보너스 번호 일치 여부에 따라 등수를 반환한다.", () => {
    const inputs = [
      { cnt: 6, bonus: false },
      { cnt: 5, bonus: true },
      { cnt: 5, bonus: false },
      { cnt: 4, bonus: false },
      { cnt: 3, bonus: false },
      { cnt: 2, bonus: false }
    ];

    const outputs = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      undefined
    ];

    inputs.forEach((input, index) => {
      const { cnt, bonus } = input;
      const game = new Game([], [], 0);
      const result = game.calculateRank(cnt, bonus);
      expect(result).toBe(outputs[index]);
    });
  });

  test("Test 3. 로또 번호, 당첨 번호, 보너스 번호를 비교하여 결과를 반환한다.", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 7, 8, 9])
    ];

    const luckyNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const outputs = {
      first: 1,
      second: 1,
      third: 0,
      fourth: 0,
      fifth: 1
    };

    const game = new Game(lottos, luckyNumbers, bonusNumber);
    const result = game.play();
    expect(result).toEqual(outputs);
  });
})