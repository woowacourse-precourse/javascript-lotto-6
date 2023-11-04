import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// MissionUtils.Console.readLineAsync를 Mock 함수로 대체합니다.
jest.mock("@woowacourse/mission-utils", () => ({
  MissionUtils: {
    Console: {
      readLineAsync: jest.fn(),
    },
  },
}));

describe("Input check test", () => {
  test("Input amount must be a multiple of 1000", async () => {
    // Mock 함수가 특정 값을 반환하도록 설정합니다.
    MissionUtils.Console.readLineAsync.mockResolvedValue("2500");

    const app = new App();
    // async 함수이므로 await를 사용해야 합니다.
    // 비동기 함수 내에서 예외가 발생하는지 확인하려면, 비동기 로직을 await하는 Promise를 expect에 전달합니다.
    await expect(app.getInputPurchaseAmount()).rejects.toThrow(
      "구입 금액은 1000원 단위로 입력해야 합니다."
    );
  });

  test("구입 금액은 숫자여야 합니다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("asdf");

    const app = new App();
    await expect(app.getInputPurchaseAmount()).rejects.toThrow(
      "구입 금액은 숫자여야 합니다."
    );
  });

  test("당첨 번호는 6개여야 합니다.", async () => {
    MissionUtils.Console.readLineAsync
      .mockResolvedValueOnce("1,2,3,4,5")
      .mockResolvedValueOnce("45");

    const app = new App();
    await expect(app.getInputWinningNumbers()).rejects.toThrow(
      "당첨 번호는 6개여야 합니다."
    );
  });
});
