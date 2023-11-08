import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Lotto from "../src/Lotto.js";
import publishService from "../src/services/publishService.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 발행 테스트", () => {
  test("구입 금액에 따른 로또 수량 검증", () => {
    // given
    const price = 8000;

    // when
    const result = publishService.calculateAmount(price);

    // then
    expect(result).toBe(8);
  });

  test("로또 객체 생성 검증", () => {
    // given
    const input = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ];
    const output = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([2, 3, 4, 5, 6, 7]),
    ];

    // when
    const result = publishService.createLottos(input);

    // then
    expect(result).toStrictEqual(output);
  });
});
