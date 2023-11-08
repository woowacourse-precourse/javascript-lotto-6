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

    it("입력이 실패할 경우 에러를 던져야 합니다.", async () => {
      const mockReadLineAsync = jest.fn().mockRejectedValue(new Error("Test Error"));
      MissionUtils.Console.readLineAsync = mockReadLineAsync;

      try {
        await InputOutput.getInput("테스트 입력 메시지");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe("[ERROR] 입력을 받는 중 실패하였습니다.");
      }

      expect(mockReadLineAsync).toHaveBeenCalledTimes(1);

      expect(mockReadLineAsync).toHaveBeenCalledWith("테스트 입력 메시지");
    });
  });

  describe("print 메서드 테스트", () => {
    it("메시지를 출력할 수 있어야 합니다.", () => {
      const mockConsolePrint = jest.fn();
      MissionUtils.Console.print = mockConsolePrint;

      const message = "테스트 출력 메시지";
      InputOutput.print(message);

      expect(mockConsolePrint).toHaveBeenCalledTimes(1);

      expect(mockConsolePrint).toHaveBeenCalledWith(message);
    });
  });
});