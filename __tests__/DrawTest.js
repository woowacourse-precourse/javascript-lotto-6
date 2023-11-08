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
      [1, 2, 3, 4, 5, 6],
      [45, 44, 43, 42, 41, 40],
      [0, 1, 3, 4, 5, 6],
      [46, 45, 44, 43, 42, 41],
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
      [1, 2, 3, 4, 5, 6],
      [1, 1, 3, 4, 5, 6],
    ];
    const results = [true, false];

    // when
    const answers = winningNumbersList.map((winningNumbers) => DrawController.checkWinningNumbersUnique(winningNumbers));

    // then
    expect(answers).toEqual(results);
  });
});

describe("보너스 번호 입력 테스트", () => {
  test("불필요한 공백이 제거된 후 숫자 이외의 문자가 있는지 확인", () => {
    // given
    const texts = ["10", "1 1", "1a", "1!"];
    const results = [true, false, false, false];

    // when
    const answers = texts.map((text) => DrawController.checkBonusNumberTextOnlyNumber(text));

    // then
    expect(answers).toEqual(results);
  });

  test("보너스 번호의 범위가 맞는지 확인한다.", () => {
    // given
    const bonusNumbers = [0, 1, 45, 46];
    const results = [false, true, true, false];

    // when
    const answers = bonusNumbers.map((bonusNumber) => DrawController.checkBonusNumberInRange(bonusNumber));

    // then
    expect(answers).toEqual(results);
  });

  test("당첨 번호 중에 보너스 번호와 동일한 숫자가 있으면 안 된다.", () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumbers = [1, 2, 3, 4, 5, 6, 7];
    const results = [false, false, false, false, false, false, true];

    // when
    const answers = bonusNumbers.map((bonusNumber) => DrawController.checkWinningBonusDifferent({ winningNumbers, bonusNumber }));

    // then
    expect(answers).toEqual(results);
  });
});
