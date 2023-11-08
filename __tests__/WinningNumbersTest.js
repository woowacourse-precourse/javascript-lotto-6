import WinningNumbers from "../src/WinningNumbers";

describe("당첨번호 클래스 테스트", () => {
    test("보너스 번호가 1~45를 벗어나면 예외가 발생한다.", () => {
        expect(() => {
            new WinningNumbers([1, 2, 3, 4, 5, 6], 46);
        }).toThrow("[ERROR]");
    });
    test("보너스 번호가 당첨번호에 포함되면 예외가 발생한다.", () => {
        expect(() => {
            new WinningNumbers([1, 2, 3, 4, 5, 6], 6);
        }).toThrow("[ERROR]");
    });
    test("당첨번호와 보너스 번호가 유효하면 예외를 발생시키지 않는다.", () => {
        expect(() => {
            new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
        }).not.toThrow("[ERROR]");
    });
    test("당첨번호를 반환하는 getNumbers() 테스트", () => {
        const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
        const numbers = winningNumbers.getNumbers();
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
    test("보너스 번호를 반환하는 getBonusNumber() 테스트", () => {
        const winningNumbers = new WinningNumbers([1, 2, 3, 4, 5, 6], 7);
        const bonusNumber = winningNumbers.getBonusNumber();
        expect(bonusNumber).toEqual(7);
    });
});
