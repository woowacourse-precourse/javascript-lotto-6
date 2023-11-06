import LottoStore from "../src/LottoStore.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "../src/Validate.js";
import ERROR_MESSAGE from "../src/Errors.js";

const mockReadLineAsync = jest.fn();
MissionUtils.Console.readLineAsync = mockReadLineAsync;
jest.mock("../src/Validate.js", () => ({
  __esModule: true,
  default: {
    validateBonusNumber: jest.fn(),
    validateWinningNumbers: jest.fn(),
  },
}));

describe("LottoStoreTest", () => {
  beforeEach(() => {
    mockReadLineAsync.mockReset();
    Validator.validateBonusNumber.mockReset();
    Validator.validateWinningNumbers.mockReset();
    Validator.validateBonusNumber.mockImplementation(() => {
      throw new Error(ERROR_MESSAGE.invalidTicketNumbers);
    });
  });

  test("당첨 번호는 1~45사이 정수를 중복없이 입력하지 않으면 예외가 발생한다", async () => {
    mockReadLineAsync.mockResolvedValue("1,2,3,4,5,6");
    const winningNums = await LottoStore.askWinningNum();
    expect(mockReadLineAsync).toHaveBeenCalledTimes(1);
    expect(winningNums).toEqual(["1", "2", "3", "4", "5", "6"]);
    expect(Validator.validateWinningNumbers).toHaveBeenCalledWith(
      "1,2,3,4,5,6"
    );
  });

  test("보너스 번호는 1~45사이 정수를 입력하지 않으면 예외가 발생한다", async () => {
    mockReadLineAsync.mockResolvedValue("49");
    await expect(LottoStore.askBonusNum()).rejects.toThrow(
      ERROR_MESSAGE.invalidTicketNumbers
    );
    expect(mockReadLineAsync).toHaveBeenCalledTimes(1);
  });
});
