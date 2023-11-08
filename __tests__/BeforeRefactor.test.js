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
      expect(amount).toBe(validAmount);
    });
  });
});