import { LottoService } from '../src/model/LottoService.js';

describe('로또 서비스 테스트', () => {
  test('로또 당첨 수익률을 정확히 계산 후 출력한다. ', () => {
    const price = 8000;
    const rankingResult = [0, 0, 0, 0, 0, 1];
    const profit = 0

    expect(LottoService.calculateProfit(price, rankingResult)).toEqual(profit);
  })
});