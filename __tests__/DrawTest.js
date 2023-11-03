import DrawController from "../src/DrawController.js";

describe("당첨 번호 입력 테스트", () => {
  test("허용하는 문자(숫자, 공백, 콤마) 이외의 문자가 있는지 확인한다.", () => {
    // given
    const texts = ["1", "1,2", "1, 2", "1, ", "a,b", "a6!", "a-, 0"];
    const results = [true, true, true, true, false, false, false];

    // when
    const answers = texts.map((text) => DrawController.checkOnlyAllowedWinningNumbers(text));

    // then
    expect(answers).toEqual(results);
  });

  test("콤마로 분리한 값들 중 빈 문자열을 제외하면 총 6개인지 확인한다.", () => {
    // given
    const textNumbersList = [
      ["1", "2", "3", "4", "5", "6"],
      ["1", "2", "3", "4", "5"],
      ["1", "2", "3", "4", "5", "6", "7"],
    ];
    const results = [true, false, false];

    // when
    const answers = textNumbersList.map((numbers) => DrawController.checkWinningNumbersCount(numbers));

    // then
    expect(answers).toEqual(results);
  });

  test("선택한 모든 당첨 번호가 1부터 45 사이에 있는지 확인한다.", () => {
    // given
    const winningNumbersList = [
      [1, 2, 3, 4, 5],
      [45, 44, 43, 42, 41],
      [0, 1, 3, 4, 5],
      [46, 45, 44, 43, 42],
    ];
    const results = [true, true, false, false];

    // when
    const answers = winningNumbersList.map((winningNumbers) => DrawController.checkWinningNumbersInRange(winningNumbers));

    // then
    expect(answers).toEqual(results);
  });

  test("선택한 모든 당첨번호가 다른지 확인한다.", () => {
    // given
    const winningNumbersList = [
      [1, 2, 3, 4, 5],
      [1, 1, 3, 4, 5],
    ];
    const results = [true, false];

    // when
    const answers = winningNumbersList.map((winningNumbers) => DrawController.checkWinningNumbersUnique(winningNumbers));

    // then
    expect(answers).toEqual(results);
  });
});
