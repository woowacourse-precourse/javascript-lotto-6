import WinningNumbers from "../src/model/WinningNumbers.js";

describe("WinningNumbers 클래스 테스트", () => {
    test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
          new WinningNumbers('1,2,3,4,5,6,7');
        }).toThrow("[ERROR]");
    });
    
    test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
          new WinningNumbers('1,2,3,4,5,5');
        }).toThrow("[ERROR]");
    });
    
    test("당첨 번호가 6개가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new WinningNumbers('1,2,3,4,5');
        }).toThrow("[ERROR]");
    });
      
    test("1) 당첨 번호가 1이상 45이하가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new WinningNumbers('1,2,3,4,5,46');
        }).toThrow("[ERROR]");
    });
    
    test("2) 당첨 번호가 1이상 45이하가 아닐 경우 예외가 발생한다.", () => {
        expect(() => {
          new WinningNumbers('0,1,2,3,4,5');
        }).toThrow("[ERROR]");
    });
    
    test("당첨 번호가 숫자가 아닐 때 예외가 발생한다.", () => {
        expect(() => {
          new WinningNumbers('0,1,2,3,4,a');
        }).toThrow("[ERROR]");
    });
    
    test("당첨 번호가 공백일 때 예외가 발생한다.", () => {
        expect(() => {
          new WinningNumbers('0,1,2,3,""');
        }).toThrow("[ERROR]");
    });
});