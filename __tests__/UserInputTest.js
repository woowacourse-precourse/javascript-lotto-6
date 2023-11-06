import UserInput from "../src/UserInput.js";
import MESSAGES from "../src/constants/Messages.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("사용자 입력 관련 예외 테스트", () => {
  test.each([[["천원"]], [["1111"]]])(
    "구입 금액에 숫자가 아닌 입력 또는 1000단위가 아닌 숫자가 들어올 경우 예외가 발생한다.",
    async (input) => {
      const user = new UserInput();

      mockQuestions(input);

      await expect(user.getPrice()).rejects.toThrow(
        MESSAGES.ERROR.INVALID_PRICE
      );
    }
  );

  test("구입 금액이 10만원을 넘을 경우 예외가 발생한다.", async () => {
    const user = new UserInput();
    const input = ["200000"];

    mockQuestions(input);

    await expect(user.getPrice()).rejects.toThrow(MESSAGES.ERROR.EXCEED_PRICE);
  });

  test("당첨 번호에 숫자가 아닌 입력이 들어오면 예외가 발생한다.", async () => {
    const user = new UserInput();
    const input = ["1,2,abc"];

    mockQuestions(input);

    await expect(user.getWinningNumber()).rejects.toThrow(
      MESSAGES.ERROR.PLEASE_ONLY_NUMBER
    );
  });

  test("당첨 번호가 6개가 아닌 경우 예외가 발생한다.", async () => {
    const user = new UserInput();
    const input = ["1,2,3,4,5"];

    mockQuestions(input);

    await expect(user.getWinningNumber()).rejects.toThrow(
      MESSAGES.ERROR.INVAILD_LOTTO_LENGTH
    );
  });

  test("당첨 번호의 범위가 1~45가 아닌 경우 예외가 발생한다", async () => {
    const user = new UserInput();
    const input = ["1,2,3,4,0,9"];

    mockQuestions(input);

    await expect(user.getWinningNumber()).rejects.toThrow(
      MESSAGES.ERROR.INVAILD_LOTTO_NUMBER
    );
  });

  test("당첨 번호에 중복된 번호가 있을 경우 예외가 발생한다", async () => {
    const user = new UserInput();
    const input = ["1,2,3,3,4,5"];

    mockQuestions(input);

    await expect(user.getWinningNumber()).rejects.toThrow(
      MESSAGES.ERROR.DUPLICATE_LOTTO_NUMBER
    );
  });

  test("보너스 번호에 숫자가 아닌 입력이 들어오면 예외가 발생한다.", async () => {
    const user = new UserInput();
    const input = ["bonus"];

    mockQuestions(input);

    await expect(user.getBonusNumber()).rejects.toThrow(
      MESSAGES.ERROR.PLEASE_ONLY_NUMBER
    );
  });

  test("보너스 번호의 범위가 1~45가 아닌 경우 예외가 발생한다", async () => {
    const user = new UserInput();
    const input = ["88"];

    mockQuestions(input);

    await expect(user.getBonusNumber()).rejects.toThrow(
      MESSAGES.ERROR.INVAILD_LOTTO_NUMBER
    );
  });

  test("보너스 번호가 당첨 번호와 중복된 번호일 경우 예외가 발생한다", async () => {
    const user = new UserInput();
    const input = ["7"];
    const winningNumber = [1, 2, 3, 4, 5, 7];

    mockQuestions(input);

    await expect(user.getBonusNumber(winningNumber)).rejects.toThrow(
      MESSAGES.ERROR.DUPLICATE_BONUS_NUMBER
    );
  });
});

describe("사용자 입력 관련 정상 동작 테스트", () => {
  test("구입 금액을 입력한 경우 숫자로 반환한다", async () => {
    const user = new UserInput();
    const input = ["3000"];

    mockQuestions(input);

    await expect(user.getPrice()).resolves.toBe(3000);
  });

  test("당첨 번호를 입력하면 숫자를 인수로 갖는 배열을 반환한다", async () => {
    const user = new UserInput();
    const input = ["1,2,3,4,5,6"];

    mockQuestions(input);

    await expect(user.getWinningNumber()).resolves.toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("보너스 번호를 입력하면 숫자로 반환한다", async () => {
    const user = new UserInput();
    const winningNumber = ["1,2,3,4,5,6"];
    const input = ["7"];

    mockQuestions(input);

    await expect(user.getWinningNumber(winningNumber)).resolves.toBe(7);
  });
});
