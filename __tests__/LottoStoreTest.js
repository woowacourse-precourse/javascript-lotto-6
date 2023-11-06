import LottoStore from "../src/LottoStore.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "../src/Validate.js";

const mockReadLineAsync = jest.fn();
MissionUtils.Console.readLineAsync = mockReadLineAsync;
Validator.validateWinningNumbers = jest.fn();

describe("LottoStoreTest", () => {
  beforeEach(() => {
    mockReadLineAsync.mockReset();
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
});
