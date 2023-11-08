import InputManager from "../src/InputManager.js";
import { Console } from "@woowacourse/mission-utils"

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn()
  }
}));

describe("InputManager class", () => {
  let inputManager;

  beforeEach(() => {
    jest.clearAllMocks();
    inputManager = new InputManager();
  });

  describe("T-1-1 금액 입력 메세지 출력", () => {
    test("사용자에게 금액 입력 메세지를 출력해야 한다", async () => {
      Console.readLineAsync.mockResolvedValue("1000");
      await inputManager.enterAmount();
      expect(Console.readLineAsync).toHaveBeenCalledWith("구입금액을 입력해 주세요.\n");
    });     
  });

  describe("T-1-2 금액 입력 처리", () => {
    test("입력받은 금액이 1,000원 단위일 때 올바르게 처리해야 한다", async () => {
      const validAmount = "8000";
      Console.readLineAsync.mockResolvedValue(validAmount);
      
      const amount = await inputManager.enterAmount();
      expect(Console.readLineAsync).toHaveBeenCalled();
      expect(amount).toBe(parseInt(validAmount, 10));
    });
  });

  describe("T-1-3 금액 입력 예외 처리", () => {
    test("금액이 숫자가 아닌 경우 예외를 던져야 한다", async () => {
      const invalidAmount = "abc";
      Console.readLineAsync.mockResolvedValue(invalidAmount);

      await expect(inputManager.enterAmount()).rejects.toThrow("[ERROR] 구입 금액은 숫자여야 합니다.");
    });

    test("1,000원으로 나누어 떨어지지 않을 경우 예외를 던져야 한다", async () => {
      const invalidAmount = "1500";
      Console.readLineAsync.mockResolvedValue(invalidAmount);

      await expect(inputManager.enterAmount()).rejects.toThrow("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
    });
  });
});