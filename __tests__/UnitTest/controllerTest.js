import { GameController } from "../../src/controllers/GameController.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 로직 단위 테스트", () => {
  test("로또 티켓수 발행 테스트", async () => {

    const answers = [10, 20, 30, 40, 50, 15, 25, 35];
    for (let i = 0; i < answers.length; i++) {
      mockQuestions([answers[i] * 1000]);
      const result = await GameController.getLottoTiket();
      expect(result).toStrictEqual(answers[i]);
    }
  });

  test("로또 당첨 번호 리턴 테스트", async () => {

    const answers = ["1,2,3,4,5,6", "2,3,4,5,6,7", "3,4,5,6,7,8"];
    const results = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8],
    ];
    for (let i = 0; i < answers.length; i++) {
      mockQuestions([answers[i]]);
      const result = await GameController.getLottoWinningNumbers();
      expect(result).toStrictEqual(results[i]);
    }
  });

  test("로또 티켓별 번호 발행 테스트", async () => {

    const answers = [3, 5, 1, 2];
    for (let i = 0; i < answers.length; i++) {
      const results = await GameController.getLottoList(answers[i]);
      expect(results.length).toStrictEqual(answers[i]);
      results.forEach((result) => {
        expect(result.length).toStrictEqual(6);
      });
    }
  });
});
