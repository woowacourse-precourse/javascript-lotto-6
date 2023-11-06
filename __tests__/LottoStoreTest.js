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
  });

  test("당첨 번호는 ,를 기준으로 나눈다", async () => {
    mockReadLineAsync.mockResolvedValue("1,2,3,4,5,6");
    const winningNums = await LottoStore.askWinningNum();
    expect(mockReadLineAsync).toHaveBeenCalledTimes(1);
    expect(winningNums).toEqual(["1", "2", "3", "4", "5", "6"]);
    expect(Validator.validateWinningNumbers).toHaveBeenCalledWith(
      "1,2,3,4,5,6"
    );
  });

  test("당첨 번호는 1~45사이 정수들을 입력하지 않으면 예외가 발생한다", async () => {
    mockReadLineAsync.mockResolvedValue("1,2,3,4,5,52");
    Validator.validateWinningNumbers.mockImplementation(() => {
      throw new Error(ERROR_MESSAGE.invalidTicketNumbers);
    });
    await expect(LottoStore.askWinningNum()).rejects.toThrow(
      ERROR_MESSAGE.invalidTicketNumbers
    );
    expect(mockReadLineAsync).toHaveBeenCalledTimes(1);
  });

  test("당첨 번호는 입력 시 쉼표가 아닌 다른 구분자를 사용하면 에러가 발생한다", async () => {
    mockReadLineAsync.mockResolvedValue("1;2!3@4#5$6");
    Validator.validateWinningNumbers.mockImplementation(() => {
      throw new Error(ERROR_MESSAGE.invalidTicketNumbers);
    });
    await expect(LottoStore.askWinningNum()).rejects.toThrow(
      ERROR_MESSAGE.invalidTicketNumbers
    );
  });

  test("보너스 번호는 1~45사이 정수를 입력하지 않으면 예외가 발생한다", async () => {
    mockReadLineAsync.mockResolvedValue("49");
    Validator.validateBonusNumber.mockImplementation(() => {
      throw new Error(ERROR_MESSAGE.invalidTicketNumbers);
    });
    await expect(LottoStore.askBonusNum()).rejects.toThrow(
      ERROR_MESSAGE.invalidTicketNumbers
    );
    expect(mockReadLineAsync).toHaveBeenCalledTimes(1);
  });
});
