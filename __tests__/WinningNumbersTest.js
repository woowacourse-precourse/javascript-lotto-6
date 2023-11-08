import WinningNumbers from "../src/Model/WinningNumbers.js";

describe("WinningNumbers 클래스 테스트", () => {
  let winningNumbers;

  beforeEach(() => {
    winningNumbers = new WinningNumbers("1, 2, 3, 4, 5, 6", "7");
  });

  test("WinningNumbers 객체를 생성한다.", () => {
    expect(winningNumbers).toBeInstanceOf(WinningNumbers);
  });

  test("옳바른 당첨번호를 반환한다.", () => {
    const numbers = winningNumbers.getWinningNumbers();
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("옳바른 보너스번호를 반환한다.", () => {
    const bonus = winningNumbers.getBonus();
    expect(bonus).toBe(7);
  });



  test("parseNumbers 메서드가 옳게 동작한다.", () => {
    const parsedNumbers = winningNumbers.parseNumbers("1, 2, 3, 4, 5, 6");
    expect(parsedNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("정수가 아니면 예외를 발생시킨다.", () => {
    expect(() => {const winningNumbers = new WinningNumbers("a, 2, 3, 4, 5,6", "6")}).toThrow(
      "[ERROR] 당첨 번호는 정수여야 합니다."
    );
    expect(() => {const winningNumbers = new WinningNumbers("1, 2, 3, 4, 5, 6", "s")}).toThrow(
      "[ERROR] 보너스 번호는 정수여야 합니다."
    );
  });

  test("당첨번호 길이가 6이 아니면 예외를 발생시킨다.", () => {
    expect(() => {
      const winningNumbers = new WinningNumbers("1, 2, 3, 4, 5", "1");
    }).toThrow("[ERROR] 당첨 번호 여섯자리를 모두 입력하세요.");
  });

  test("당첨 번호 범위가 옳지 않으면 예외를 발생시킨다.", () => {
    expect(() => {
      const winningNumbers = new WinningNumbers("1, 2, 3, 4, 5, 46", "2");
    }).toThrow("[ERROR] 유효한 당첨번호를 입력하세요.");
    expect(() => {
      const winningNumbers = new WinningNumbers("1, 2, 3, 4, 5, 6", "46");
    }).toThrow("[ERROR] 유효한 보너스번호를 입력하세요.");
  });

  test("중복이 있으면 예외를 발생시킨다.", () => {
    expect(() => {
      const winningNumbers = new WinningNumbers("1, 2, 2, 4, 5, 6", "7");
    }).toThrow("[ERROR] 중복된 숫자가 있으면 안됩니다.");
    expect(() => {
      const winningNumbers = new WinningNumbers("1, 2, 3, 4, 5, 6", "1");
    }).toThrow("[ERROR] 보너스 숫자가 당첨 숫자와 중복되면 안됩니다.");
  });
  
});
