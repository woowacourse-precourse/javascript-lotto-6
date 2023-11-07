import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

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

describe("당첨 번호 생성", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("당첨 번호가 6개가 아닌 경우", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,6,8", "7"]);
    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("당첨 번호가 숫자가 아닌 경우", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,ㅂ", "7"]);
    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");
  });

  test("당첨 번호가 유효 범위 숫자가 아닌 경우", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,55", "7"]);
    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 1에서 45 사이에 숫자만 입력이 가능합니다.");
  });

  test("당첨 번호가 중복 된 경우", async () => {
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,5", "7"]);
    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR] 중복되지 않는 6개의 숫자로 입력해 주세요.");
  });
});
