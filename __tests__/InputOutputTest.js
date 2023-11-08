import InputOutput from "../src/InputOutput";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("InputOutput 클래스 테스트", () => {
  describe("getInput 메서드 테스트", () => {
    it("사용자로부터 입력을 받아올 수 있어야 합니다.", async () => {
      const mockReadLineAsync = jest.fn().mockResolvedValue("User Input");
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      const input = await InputOutput.getInput("테스트 입력 메시지");
      expect(input).toBe("User Input");

      expect(mockReadLineAsync).toHaveBeenCalledTimes(1);

      expect(mockReadLineAsync).toHaveBeenCalledWith("테스트 입력 메시지");
    });
  });
});