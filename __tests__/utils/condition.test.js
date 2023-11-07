import {
  caseOfWinning,
  checkBonusBall,
  checkBonusBallIsMatching,
  countMatchingBalls,
  recordRanks,
} from "../../src/utils/condition.js";

// TODO: 변수명 변경하여 가독성 개선
describe("condition util 함수 테스트", () => {
  test("당첨 번호에 구매한 번호가 올바르게 들어가있어야 한다.", () => {
    const purchasedLotto = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 5, 6, 8, 10],
    ];
    const winningBalls = [1, 2, 3, 5, 6, 7];
    const expectedMatchingCount = [5, 4];

    const isMatched = countMatchingBalls(purchasedLotto, winningBalls);

    // 배열 내부의 값들을 확인하기 위해 .toEqual 사용
    expect(isMatched).toEqual(expectedMatchingCount);
  });

  test(`보너스 숫자가 있는지 여부를 확인한다.`, () => {
    const input1 = [
      [6, 7, 14, 38, 41, 45],
      [8, 13, 19, 20, 38, 41],
      [1, 5, 25, 29, 36, 45],
      [9, 11, 14, 16, 27, 44],
    ]; // 초기값 입력
    const input2 = 14; // 초기값 입력
    const expected = [true, false, false, true]; // 기댓값 입력
    const test = checkBonusBall(input1, input2);
    expect(test).toEqual(expected);
  });

  test(`당첨 순위가 정상적으로 매겨지는 지 확인한다.`, () => {
    const input1 = [5, 0, 0, 1]; // 초기값 입력
    const input2 = [true, false, false, false]; // 초기값 입력
    const expected = [0, 0, 1, 0, 0, 0]; // 기댓값 입력
    const test = recordRanks(input1, input2);
    expect(test).toEqual(expected);
  });

  let rankCounts;

  beforeEach(() => {
    rankCounts = [0, 0, 0, 0, 0, 0]; // 각 테스트 전에 rankCounts 배열 초기화
  });

  test("6개가 일치할 경우 1등 count를 증가시킨다", () => {
    caseOfWinning(6, false, rankCounts);
    expect(rankCounts[1]).toBe(1);
  });

  test("5개가 일치하고 보너스 볼이 맞을 경우 2등 count를 증가시킨다", () => {
    caseOfWinning(5, true, rankCounts);
    expect(rankCounts[2]).toBe(1);
  });

  test("5개가 일치하고 보너스 볼이 맞지 않을 경우 3등 count를 증가시킨다", () => {
    caseOfWinning(5, false, rankCounts);
    expect(rankCounts[3]).toBe(1);
  });

  test("4개가 일치할 경우 4등 count를 증가시킨다", () => {
    caseOfWinning(4, false, rankCounts);
    expect(rankCounts[4]).toBe(1);
  });

  test("3개가 일치할 경우 5등 count를 증가시킨다", () => {
    caseOfWinning(3, false, rankCounts);
    expect(rankCounts[5]).toBe(1);
  });

  test("보너스 볼이 맞을 경우 2등 count를 증가시킨다", () => {
    checkBonusBallIsMatching(true, rankCounts);
    expect(rankCounts[2]).toBe(1);
  });

  test("보너스 볼이 맞지 않을 경우 3등 count를 증가시킨다", () => {
    checkBonusBallIsMatching(false, rankCounts);
    expect(rankCounts[3]).toBe(1);
  });
});
