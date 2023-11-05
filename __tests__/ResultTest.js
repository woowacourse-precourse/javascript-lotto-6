import { lottoReader } from "../src/App.js" 
describe("당첨 통계 테스트", () => {
  test("당첨 번호와 로또 번호를 비교한다.", () => {
    const lotto = [1, 3, 5, 14, 22, 45];
    const winninglotto = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    const OUTPUT = 3;

    const result = lottoReader(lotto,winninglotto,BONUS_NUMBER);

    expect(result).toBe(OUTPUT);
  });
});