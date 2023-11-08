import { PurchaseAmount } from '../src/lotto/index.js';
import { uiConstants } from '../src/constants/index.js';
import Lotto from '../src/Lotto.js';
import App from '../src/App.js';

describe('게임 진행 테스트', () => {
  test('당첨 개수 3개일 때의 상황', () => {
    const randomNumber = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];

    const lotto = new Lotto([3, 16, 32, 8, 20, 29]);
    const bonus = 5;

    expect(lotto.checkWinningCnt(randomNumber, bonus)).toEqual([
      [1, 3, 1],
      [0, 0, 0],
    ]);
  });

  test('당첨 개수3개 구입비용 3000원 일때 수익률', async () => {
    const purchaseAmount = new PurchaseAmount(3000);
    const moneyArr = [0, 0, 0, 1, 0, 0, 0, 0];
    const app = new App();
    expect(app.calculateReturn(purchaseAmount, moneyArr)).toEqual(166.7);
  });
});
