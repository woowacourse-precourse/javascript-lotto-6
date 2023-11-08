import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};
describe("구입금액 테스트", () => {
  test("구입금액이 숫자가 아니면 예외가 발생한다.", async () => {
    // given
    mockQuestions(['천원']);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("구입금액이 1000원 단위로 나누어 떨어지지 않으면 예외가 발생한다.", async () => {
    // given
    mockQuestions(['8888']);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("구입금액이 0원인 경우 예외가 발생한다.", async () => {
    // given
    mockQuestions(['0']);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});