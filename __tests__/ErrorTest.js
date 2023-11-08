import ErrorMessages from "../src/Error";

describe("ErrorMessages 클래스 테스트", () => {
  it("invalidInput 메서드가 올바른 에러 메시지를 반환해야 합니다.", () => {
    const message = "테스트 에러 메시지";
    const result = ErrorMessages.invalidInput(message);
    expect(result).toBe(`[ERROR] ${message}`);
  });
});