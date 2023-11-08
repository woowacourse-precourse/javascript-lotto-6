import ErrorMessages from "../src/Error";

describe("ErrorMessages 클래스 테스트", () => {
  it("invalidInput 메서드가 올바른 에러 메시지를 반환해야 합니다.", () => {
    const message = "테스트 에러 메시지";
    const result = ErrorMessages.invalidInput(message);
    expect(result).toBe(`[ERROR] ${message}`);
  });

  it("lottoNumbersDuplicate 메서드가 올바른 에러 메시지를 반환해야 합니다.", () => {
    const result = ErrorMessages.lottoNumbersDuplicate();
    expect(result).toBe("[ERROR] 중복된 로또번호는 있을 수 없습니다.");
  });

  it("bonusNumberError 메서드가 올바른 에러 메시지를 반환해야 합니다.", () => {
    const result = ErrorMessages.bonusNumberError();
    expect(result).toBe("[ERROR] 보너스 번호는 로또번호와 달라야 합니다.");
  });

  it("lottoFormatError 메서드가 올바른 에러 메시지를 반환해야 합니다.", () => {
    const result = ErrorMessages.lottoFormatError();
    expect(result).toBe("[ERROR] 로또 형식에 부합하지 않습니다.");
  });

  it("lottoNumberRangeError 메서드가 올바른 에러 메시지를 반환해야 합니다.", () => {
    const result = ErrorMessages.lottoNumberRangeError();
    expect(result).toBe("[ERROR] 1~45 사이 수를 입력하세요");
  });
});