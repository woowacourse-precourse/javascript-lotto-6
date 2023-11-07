import { describe, expect, test } from '@jest/globals';
import BonusNumber from "../src/BonusNumber.js";
import WinningNumbers from "../src/WinningNumbers.js";

describe("보너스 클래스 테스트", () => {
    test("보너스 번호가 숫자가 아닌 경우.", () => {
      expect(() => {
        new BonusNumber(['1e']);
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
});