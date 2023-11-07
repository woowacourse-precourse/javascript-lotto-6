import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Bonus from "../src/Bonus.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("당첩 번호 예외 테스트", () => {
  test("당첨 번호 숫자가 6개가 넘어가면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["1000", "1,2,3,4,5,6,7"]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("당첨 번호 숫자가 6개가 안되면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["1000", "1,2,3,4,5"]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["1000", "1,2,3,4,5,5"]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("당첨 번호에 1~45 사이의 숫자가 아니면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["1000", ["1,2,3,4,5,50"]]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([[["1000", "1,2,3,4,$,6"]], [["1000", "1,2, , 3, 4,5"]]])(
    "당첨 번호에 숫자가 아닌 값이 들어있으면 예외가 발생한다.",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});

describe("보너스 번호 예외 테스트", () => {
  test("보너스 번호가 숫자가 아니면 에외가 발생한다.", () => {
    expect(() => {
      new Bonus(["1,2,3,4,5,6", "a"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첩 번호와 중복이면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(["1,2,3,4,5,6", "1"]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(["1,2,3,4,5,6", "50"]);
    }).toThrow("[ERROR]");
  });
});
