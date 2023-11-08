import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("보너스 번호 입력 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["8000", "1,2,3,4,5,6", "one"]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["8000", "1,2,3,4,5,6", "50"]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.", async () => {
    // given
    mockQuestions(["8000", "1,2,3,4,5,6", "1"]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});