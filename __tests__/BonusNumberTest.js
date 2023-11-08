import BonusNumber from "../src/model/BonusNumber.js";

describe("BonusNumber 클래스 테스트", () => {
    test("보너스 번호가 45 이상일 경우 예외가 발생한다.", () => {
      expect(() => {
        new BonusNumber(46);
      }).toThrow("[ERROR]");
    });

    test("보너스 번호가 1 이하일 경우 예외가 발생한다.", () => {
        expect(() => {
          new BonusNumber(0);
        }).toThrow("[ERROR]");
    });

    test("1) 보너스 번호가 공백일 경우 예외가 발생한다.", () => {
        expect(() => {
          new BonusNumber('');
        }).toThrow("[ERROR]");
    });

    test("2) 보너스 번호가 공백일 경우 예외가 발생한다.", () => {
        expect(() => {
          new BonusNumber('        ');
        }).toThrow("[ERROR]");
    });

    test("3) 보너스 번호가 공백일 경우 예외가 발생한다.", () => {
        expect(() => {
          new BonusNumber('        3');
        }).toThrow("[ERROR]");
    });

    test("1) 보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new BonusNumber('a');
        }).toThrow("[ERROR]");
    });

    test("2) 보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new BonusNumber('%');
        }).toThrow("[ERROR]");
    });
});
  