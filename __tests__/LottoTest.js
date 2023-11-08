import Lotto from "../src/Lotto.js";
import Score from "../src/models/Score.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능

  test("1부터 45까지의 숫자가 입력되지 않은 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 65]);
    }).toThrow("[ERROR]");
  });

  test("숫자가 입력되지 않은 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow("[ERROR]");
  });
});

describe("로또 당첨 테스트", () => {
  test("당첨 번호가 구매한 로또의 번호가 3개 일치하는 경우", () => {
    const score = new Score();
    score.checkLotto([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9], 10);
    const EXPECT_RESULT = { 
      '1st': 0, 
      '2nd': 0, 
      '3rd': 0, 
      '4th': 0, 
      '5th': 1 } 
    expect(score.getScore()).toEqual(EXPECT_RESULT);
  });

  test("당첨 번호가 구매한 로또의 번호가 4개 일치하는 경우 (로또 2개를 발급받았을 때)", () => {
    const score = new Score();
    const LOTTS = [
      [1, 2, 3, 4, 5, 6],
      [11, 12, 13, 14, 15, 16]
    ];
    const WINNING_NUM = [1, 2, 3, 4, 33, 34, 35];
    const BONUSNUM = 45;
    const result = score.getScore();
    LOTTS.forEach(lotto => {
      score.checkLotto(lotto, WINNING_NUM, BONUSNUM);
    });
    const EXPECT_RESULT = { 
      '1st': 0, 
      '2nd': 0, 
      '3rd': 0, 
      '4th': 1, 
      '5th': 0 } 
    expect(result).toEqual(EXPECT_RESULT);
  });

  test("당첨 번호가 구매한 로또의 번호가 5개 일치하는 경우 (보너스 제외)", () => {
    const score = new Score();
    score.checkLotto([7, 8, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9], 10);
    const EXPECT_RESULT = { 
      '1st': 0, 
      '2nd': 0, 
      '3rd': 1, 
      '4th': 0, 
      '5th': 0 } 
    expect(score.getScore()).toEqual(EXPECT_RESULT);
  });

  test("당첨 번호가 구매한 로또의 번호가 5개 일치하는 경우 (보너스 포함)", () => {
    const score = new Score();
    score.checkLotto([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 8, 6], 5);
    const EXPECT_RESULT = { 
      '1st': 0, 
      '2nd': 1, 
      '3rd': 0, 
      '4th': 0, 
      '5th': 0 } 
    expect(score.getScore()).toEqual(EXPECT_RESULT);
  });

  test("당첨 번호가 구매한 로또의 번호가 6개 일치하는 경우", () => {
    const score = new Score();
    score.checkLotto([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 10);
    const EXPECT_RESULT = { 
      '1st': 1, 
      '2nd': 0, 
      '3rd': 0, 
      '4th': 0, 
      '5th': 0 } 
    expect(score.getScore()).toEqual(EXPECT_RESULT);
  });
});
