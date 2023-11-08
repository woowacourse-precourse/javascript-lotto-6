/* eslint-disable */

import { MissionUtils } from "@woowacourse/mission-utils";
import CalculationOfResult from "../src/CalculationOfResult.js";

describe("수익률 클래스 테스트", () => {
    test('각 등수별 우승횟수를 확인한다.', () =>{

    const arrayofLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8],
    ];
    const winningNum = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const answer = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 2개",
      "6개 일치 (2,000,000,000원) - 2개",
      "총 수익률은 406005000.0%입니다.",
    ];
    const app = new CalculationOfResult();
    
    const prize = app.calculatePrize(arrayofLotto, winningNum, bonusNum);
    const expectResult = [2,2,0,1,0];
    expect(prize).toEqual(expectResult)
  })

  //mock 연습용
  const mockConsolePrint = jest.spyOn(MissionUtils.Console, "print");
  test("로또 게임 결과 출력을 확인한다.", () => {
    const numOfBuy = 1;
    const arrayofLotto = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8],
    ];
    const winningNum = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const answer = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 2개",
      "6개 일치 (2,000,000,000원) - 2개",
      "총 수익률은 406005000.0%입니다.",
    ];

    // const answer = [2, 2, 0, 1, 0];
    const app = new CalculationOfResult();
    const yeildcontents = app.run(numOfBuy, arrayofLotto, winningNum, bonusNum);
    app.printOfResult(yeildcontents[0], yeildcontents[1]);

    answer.forEach((answer) => {
      expect(mockConsolePrint).toHaveBeenCalledWith(expect.stringContaining(answer));
    })
  });

});
