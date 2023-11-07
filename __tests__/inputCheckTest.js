import { MissionUtils } from "@woowacourse/mission-utils";
import CONSTANT from "../src/constant/constants.js";
import App from "../src/App.js";

jest.mock("@woowacourse/mission-utils", () => ({
  MissionUtils: {
    Console: {
      readLineAsync: jest.fn(),
    },
  },
}));

describe("Input check test for winning numbers", () => {
  test("당첨 번호는 6개여야 합니다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce("1,2,3,4,5");
    const app = new App();
    await expect(app.getInputWinningNumbers()).rejects.toThrow(
      CONSTANT.ERR_LOG.WIN_LENGTH
    );
  });

  test("당첨 번호는 숫자여야 합니다", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce("1,2,3,4,5,A");
    const app = new App();
    await expect(app.getInputWinningNumbers()).rejects.toThrow(
      CONSTANT.ERR_LOG.NAN
    );
  });

  test("보너스 번호가 올바르지 않습니다.", async () => {
    MissionUtils.Console.readLineAsync
      .mockResolvedValueOnce("1,2,3,4,5,6")
      .mockResolvedValueOnce("A");
    const app = new App();
    await expect(app.getInputWinningNumbers()).rejects.toThrow(
      CONSTANT.ERR_LOG.WRONG_BONUS
    );
  });

  test("보너스 번호는 당첨 번호와 중복될 수 없습니다.", async () => {
    MissionUtils.Console.readLineAsync
      .mockResolvedValueOnce("1,2,3,4,5,6")
      .mockResolvedValueOnce("6");
    const app = new App();
    await expect(app.getInputWinningNumbers()).rejects.toThrow(
      CONSTANT.ERR_LOG.REPEATED_BONUS
    );
  });
});
