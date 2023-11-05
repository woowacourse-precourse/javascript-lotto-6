import { lottoReader, lottoResultPrinter } from "../src/App.js" 

describe("당첨 통계 테스트", () => {
  test("당첨 번호와 로또 번호를 비교한다.", () => {
    const lotto = [1, 3, 5, 14, 22, 45];
    const winninglotto = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    const output = [3,0];

    const result = lottoReader(lotto,winninglotto,BONUS_NUMBER);

    expect(result).toEqual(output);
  });

  test("당첨 내역을 출력한다.", () => {
    const winningInput = [3,0];
    const countInput = 1;
    const output = "3개 일치 (5,000원) - 1개";

    const result = lottoResultPrinter(winningInput, countInput);

    expect(result).toEqual(output);
  });
});