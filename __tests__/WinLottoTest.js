import WinLotto from "../src/WinLotto.js";
import ERROR_MESSAGE from "../src/Errors.js";

describe("WinLottoTest", () => {
  test("1~45사이 당첨 번호 6개와 보너스 번호 형식이 주어질 경우 객체를 성공적으로 생성한다", () => {
    const winningNumbers = ["1", "2", "3", "4", "5", "6"];
    const bonusNumber = "7";
    const ticketNumbers = [["8", "9", "10", "11", "12", "13"]];

    const winLotto = new WinLotto(winningNumbers, bonusNumber, ticketNumbers);
    expect(winLotto.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
    expect(winLotto.bonusNumber).toBe(7);
    expect(winLotto.ticketNumbers).toEqual([[8, 9, 10, 11, 12, 13]]);
  });

  test("중복된 당첨 번호가 있는 경우 예외가 발생한다.", () => {
    const winningNumbers = ["1", "2", "3", "4", "5", "5"];
    const bonusNumber = "7";
    const ticketNumbers = [["8", "9", "10", "11", "12", "13"]];

    expect(() => {
      new WinLotto(winningNumbers, bonusNumber, ticketNumbers);
    }).toThrow(ERROR_MESSAGE.duplicateNumbers);
  });
});
