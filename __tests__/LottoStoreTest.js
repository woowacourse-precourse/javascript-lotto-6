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

  test("보너스 번호는 1~45사이 정수를 입력되어진다", async () => {
    mockReadLineAsync.mockResolvedValue("11");
    Validator.validateBonusNumber.mockImplementation((num) => num);
    const bonusNum = await LottoStore.askBonusNum();
    expect(Validator.validateBonusNumber).toHaveBeenCalledWith("11");
    expect(bonusNum).toBe("11");
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

  test("사용자의 로또 티켓과 당첨 번호가 6개 일치시 해당 결과를 반환한다", async () => {
    mockReadLineAsync
      .mockResolvedValueOnce("1,2,3,4,5,6")
      .mockResolvedValueOnce("7");
    Validator.validateWinningNumbers.mockReturnValue(true);
    Validator.validateBonusNumber.mockReturnValue(true);
    const userTickets = [["1", "2", "3", "4", "5", "6"]];
    const results = await LottoStore.calculateWinningResults(userTickets);
    expect(results).toEqual([6]);
    expect(Validator.validateWinningNumbers).toHaveBeenCalledWith(
      "1,2,3,4,5,6"
    );
    expect(Validator.validateBonusNumber).toHaveBeenCalledWith("7");
  });

  test("사용자의 로또 티켓과 당첨 번호가 5개와 보너스 번호 일치시 해당 결과를 반환한다", async () => {
    mockReadLineAsync
      .mockResolvedValueOnce("1,2,3,4,5,30")
      .mockResolvedValueOnce("6");
    Validator.validateWinningNumbers.mockReturnValue(true);
    Validator.validateBonusNumber.mockReturnValue(true);
    const userTickets = [["1", "2", "3", "4", "5", "6"]];
    const results = await LottoStore.calculateWinningResults(userTickets);
    expect(results).toEqual(["5+1"]);
  });

  test("사용자의 로또 티켓과 당첨 번호가 5개 일치시 해당 결과를 반환한다", async () => {
    mockReadLineAsync
      .mockResolvedValueOnce("1,2,3,4,5,30")
      .mockResolvedValueOnce("31");
    Validator.validateWinningNumbers.mockReturnValue(true);
    Validator.validateBonusNumber.mockReturnValue(true);
    const userTickets = [["1", "2", "3", "4", "5", "6"]];
    const results = await LottoStore.calculateWinningResults(userTickets);
    expect(results).toEqual([5]);
  });

  test("사용자의 로또 티켓과 당첨 번호가 4개 일치시 해당 결과를 반환한다", async () => {
    mockReadLineAsync
      .mockResolvedValueOnce("1,2,3,4,25,30")
      .mockResolvedValueOnce("31");
    Validator.validateWinningNumbers.mockReturnValue(true);
    Validator.validateBonusNumber.mockReturnValue(true);
    const userTickets = [["1", "2", "3", "4", "5", "6"]];
    const results = await LottoStore.calculateWinningResults(userTickets);
    expect(results).toEqual([4]);
  });

  test("사용자의 로또 티켓과 당첨 번호가 4개 일치시 해당 결과를 반환한다", async () => {
    mockReadLineAsync
      .mockResolvedValueOnce("1,2,3,24,25,30")
      .mockResolvedValueOnce("31");
    Validator.validateWinningNumbers.mockReturnValue(true);
    Validator.validateBonusNumber.mockReturnValue(true);
    const userTickets = [["1", "2", "3", "4", "5", "6"]];
    const results = await LottoStore.calculateWinningResults(userTickets);
    expect(results).toEqual([3]);
  });
});
