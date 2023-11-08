import Lotto from "../src/Lotto.js";
import { isBonusNumValid } from "../src/App.js";

describe("로또 당첨 번호 입력 테스트", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    })
    
      test("로또 보너스 번호가 숫자 형태가 아니면 예외가 발생한다.", () => {
        expect(() => {
            const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonusNumber = "d";
            isBonusNumValid(winningNumbers, bonusNumber);
          }).toThrow("[ERROR]");
      });

      test("로또 보너스 번호가 정수가 아니면 예외가 발생한다.", () => {
        expect(() => {
            const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonusNumber = 9.5;
            isBonusNumValid(winningNumbers, bonusNumber);
          }).toThrow("[ERROR]");
      });

      test("로또 보너스 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonusNumber = 46;
            isBonusNumValid(winningNumbers, bonusNumber);
          }).toThrow("[ERROR]");
      });

      test("로또 보너스 번호가 로또 당첨 번호와 중복되면 예외가 발생한다.", () => {
        expect(() => {
            const winningNumbers = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonusNumber = 6;
            isBonusNumValid(winningNumbers, bonusNumber);
          }).toThrow("[ERROR]");
      });
  });