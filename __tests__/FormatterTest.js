import Calculator from '../src/Calculator/index.js';
import Formatter from '../src/Formatter/index.js';
import Lotto from '../src/Lotto.js';
import { MESSAGE, RESULT } from '../src/constants/message.js';

describe('Formatter 클래스 테스트', () => {
  test('당첨 번호, 보너스 번호를 입력받아 숫자 배열로 반환하는 toNumbers 메서드를 테스트한다.', () => {
    const inputs = ['1,2,3,4,5,6', '2'];
    const lengths = [6, 1];

    inputs.forEach((input, index) => {
      const nums = Formatter.toNumbers(input);

      expect(typeof nums).toBe('object');
      expect(lengths[index]).toEqual(nums.length);

      nums.forEach((num) => {
        expect(typeof num).toBe('number');
      });
    });
  });

  test('구매한 로또를 배열로 포맷팅하여 반환하는 formatLottos 함수를 테스트한다.', () => {
    const numsArray = [
      [1, 2, 3, 4, 5, 6],
      [13, 23, 25, 34, 37, 44],
      [5, 8, 11, 32, 33, 45],
    ];
    const lottos = numsArray.map((num) => new Lotto(num));
    const formattedLottos = Formatter.formatLottos(lottos);

    numsArray.forEach((nums) => {
      nums.forEach((num) => {
        expect(formattedLottos).toContain(String(num));
      });
    });
  });

  test('당첨 통계를 포맷팅하여 반환하는 formatStatistics 함수를 테스트한다.', () => {
    const purchaseAmount = 1000;
    const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const calculator = new Calculator(lottos, winningNumbers, bonusNumber);
    const ranks = { first: 1, second: 0, third: 0, fourth: 0, fifth: 0 };
    const revenu = calculator.calculateRevenue(purchaseAmount);

    const result = Formatter.formatStatistics(ranks, revenu);

    const outputs = [
      ...Object.values(RESULT),
      `${RESULT.first}1개`,
      MESSAGE.result,
    ];

    outputs.forEach((output) => {
      expect(result).toContain(output);
    });
  });
});
