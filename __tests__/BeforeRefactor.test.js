import InputManager from "../src/InputManager.js";

import { Console } from "@woowacourse/mission-utils"

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
  }
}));

describe("InputManager class", () => {
  describe("T-1-1 금액 입력 메세지 출력", () => {
    let inputManager;
    
    beforeEach(() => {
      jest.clearAllMocks();
      inputManager = new InputManager();
    });
    
  test("사용자에게 금액 입력 메세지를 출력해야 한다", async () => {
    await inputManager.enterAmount();

    expect(Console.print).toHaveBeenCalledWith("구입금액을 입력해 주세요.\n");
    });
  });
});