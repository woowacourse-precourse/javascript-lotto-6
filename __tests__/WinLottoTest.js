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

  test("모든 번호가 일치하는 경우 [6]을 반환한다", () => {
    const winningNumbers = ["1", "2", "3", "4", "5", "6"];
    const bonusNumber = "7";
    const ticketNumbers = [["1", "2", "3", "4", "5", "6"]];

    const winLotto = new WinLotto(winningNumbers, bonusNumber, ticketNumbers);
    expect(winLotto.compareNumbers()).toEqual([6]);
  });

  test("5개의 번호가 일치하는 경우 [5]을 반환한다", () => {
    const winningNumbers = ["1", "2", "3", "4", "5", "25"];
    const bonusNumber = "7";
    const ticketNumbers = [["1", "2", "3", "4", "5", "6"]];

    const winLotto = new WinLotto(winningNumbers, bonusNumber, ticketNumbers);
    expect(winLotto.compareNumbers()).toEqual([5]);
  });

  test("5개의 번호가 일치하는 경우 [4]을 반환한다", () => {
    const winningNumbers = ["1", "2", "3", "4", "25", "26"];
    const bonusNumber = "35";
    const ticketNumbers = [["1", "2", "3", "4", "5", "6"]];

    const winLotto = new WinLotto(winningNumbers, bonusNumber, ticketNumbers);
    expect(winLotto.compareNumbers()).toEqual([4]);
  });

  test("3개의 번호가 일치하는 경우 [3]을 반환한다", () => {
    const winningNumbers = ["1", "2", "3", "24", "25", "29"];
    const bonusNumber = "35";
    const ticketNumbers = [["1", "2", "3", "4", "5", "6"]];

    const winLotto = new WinLotto(winningNumbers, bonusNumber, ticketNumbers);
    expect(winLotto.compareNumbers()).toEqual([3]);
  });
});
