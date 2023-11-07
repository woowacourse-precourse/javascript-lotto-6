import { describe, expect, test } from '@jest/globals';
import BonusNumber from "../src/BonusNumber.js";
import WinningNumbers from "../src/WinningNumbers.js";

describe("보너스 클래스 테스트", () => {
    test("보너스 번호가 숫자가 아닌 경우.", () => {
      expect(() => {
        new BonusNumber(['1e']);
      }).toThrow("[ERROR]");
    });

    test("보너스 번호에 공백이 포함된 경우.", () => {
        expect(() => {
          new BonusNumber(['1 2']);
        }).toThrow("[ERROR]");
      });
    test("보너스 번호의 범위가 1~45를 벗어난 경우.", () => {
        expect(() => {
            new BonusNumber(['49']);
        }).toThrow("[ERROR]");
    });
});

describe("당첨 숫자 클래스 테스트", () => {
    test("당첨 숫자 번호가 6자리가 아닌 경우.", () => {
      expect(() => {
        let str = '1,2,3,4,5,6,7';
        new WinningNumbers([str]);
      }).toThrow("[ERROR]");
    });

    test("당첨 숫자에 공백이 포함된 경우.", () => {
        expect(() => {
            let str = '1,2,3,4, ,6';
            new WinningNumbers([str]);
        }).toThrow("[ERROR]");
    });
    
    test("당첨 숫자에 공백이 포함된 경우.", () => {
        expect(() => {
            let str = '1,1,1,1,1,1';
            new WinningNumbers([str]);
        }).toThrow("[ERROR]");
    });

    test("당첨 숫자에 문자가 포함된 경우.", () => {
        expect(() => {
            let str = '1,2,3,4,a,5';
            new WinningNumbers([str]);
        }).toThrow("[ERROR]");
    });
    test("당첨 숫자가 범위를 벗어난 경우.", () => {
        expect(() => {
            let str = '1,2,3,4,5,67';
            new WinningNumbers([str]);
        }).toThrow("[ERROR]");
    });
});
